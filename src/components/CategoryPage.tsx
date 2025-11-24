import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { products, categories, Product } from '@/data/products';

interface CartItem extends Product {
  quantity: number;
}

interface CategoryPageProps {
  categoryId: string;
}

const CategoryPage = ({ categoryId }: CategoryPageProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  if (!category) {
    return <div>Категория не найдена</div>;
  }

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Moon" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Архив Снов</h1>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/catalog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Каталог
              </Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg">
              <SheetHeader>
                <SheetTitle>Корзина</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-center text-muted-foreground">Корзина пуста</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 border-b border-border pb-4">
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.price} ₽ × {item.quantity}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Итого:</span>
                        <span className="text-2xl font-bold text-primary">{totalPrice} ₽</span>
                      </div>
                      <Button className="w-full" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <div className="relative overflow-hidden py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name={category.icon as any} size={40} className="text-primary" />
            </div>
            <h2 className="text-5xl font-bold">{category.name}</h2>
            <p className="text-xl text-muted-foreground">
              {category.description}
            </p>
            <div className="flex justify-center gap-2 pt-4">
              <Link to="/catalog">
                <Button variant="outline" size="sm">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Назад к каталогу
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {categoryProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1">
                  <Icon name="Star" size={14} className="fill-primary text-primary" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col gap-3">
                <div className="flex justify-between items-center w-full">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                </div>
                <Button onClick={() => addToCart(product)} className="w-full">
                  <Icon name="Plus" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Moon" className="text-primary" size={24} />
            <span className="text-xl font-bold">Архив Снов</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Исследуйте границы сознания через практику осознанных сновидений
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryPage;
