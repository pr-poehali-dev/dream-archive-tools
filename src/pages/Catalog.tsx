import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
}

const Catalog = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: 1,
      name: 'Маска для осознанных снов REM Master',
      description: 'Профессиональная маска с LED-индикаторами для практики REM-тестирования',
      price: 4500,
      category: 'masks',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/fc125a8e-3151-45e3-b50f-116269e8beab.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Маска Dream Light Basic',
      description: 'Базовая световая маска для начинающих практиков',
      price: 2800,
      category: 'masks',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/fc125a8e-3151-45e3-b50f-116269e8beab.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Премиум маска Silk Dreams',
      description: 'Шёлковая маска премиум-класса с таймером',
      price: 6200,
      category: 'masks',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/fc125a8e-3151-45e3-b50f-116269e8beab.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Дневник сновидений Lunar',
      description: 'Премиум дневник с подсказками для интерпретации образов',
      price: 1200,
      category: 'journals',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/5d123dcc-d743-446b-b36f-07086cb77d24.jpg',
      rating: 5
    },
    {
      id: 5,
      name: 'Дневник Dream Journal Pro',
      description: 'Расширенный дневник с анализом символов и паттернов',
      price: 1800,
      category: 'journals',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/5d123dcc-d743-446b-b36f-07086cb77d24.jpg',
      rating: 5
    },
    {
      id: 6,
      name: 'Кожаный дневник Mystic',
      description: 'Ручная работа, натуральная кожа, золотое тиснение',
      price: 3500,
      category: 'journals',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/5d123dcc-d743-446b-b36f-07086cb77d24.jpg',
      rating: 5
    },
    {
      id: 7,
      name: 'Амулет осознанности с аметистом',
      description: 'Амулет с натуральным аметистом для усиления осознанности',
      price: 2800,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg',
      rating: 5
    },
    {
      id: 8,
      name: 'Амулет с лунным камнем',
      description: 'Серебряный амулет с лунным камнем для вещих снов',
      price: 3200,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg',
      rating: 4
    },
    {
      id: 9,
      name: 'Набор ароматерапии Lavender Dreams',
      description: 'Масла лаванды и сандала для глубокого сна',
      price: 1800,
      category: 'aromatherapy',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/3058a7c9-5b33-4ce7-b8aa-e92df60c1017.jpg',
      rating: 5
    },
    {
      id: 10,
      name: 'Ароманабор Night Journey',
      description: 'Комплекс из 5 масел для осознанных сновидений',
      price: 2400,
      category: 'aromatherapy',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/3058a7c9-5b33-4ce7-b8aa-e92df60c1017.jpg',
      rating: 5
    },
    {
      id: 11,
      name: 'Благовония Lucid Dream',
      description: 'Натуральные благовония для практик перед сном',
      price: 900,
      category: 'aromatherapy',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/3058a7c9-5b33-4ce7-b8aa-e92df60c1017.jpg',
      rating: 4
    },
    {
      id: 12,
      name: 'Подушка для осознанных снов',
      description: 'Ортопедическая подушка с ароматизатором',
      price: 3800,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg',
      rating: 5
    },
    {
      id: 13,
      name: 'Браслет Reality Check',
      description: 'Вибрирующий браслет-напоминатель для проверки реальности',
      price: 4200,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg',
      rating: 4
    },
    {
      id: 14,
      name: 'Кристаллы для сна набор',
      description: 'Набор из 7 кристаллов для размещения у изголовья',
      price: 2600,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg',
      rating: 5
    },
    {
      id: 15,
      name: 'Мини-дневник для путешествий',
      description: 'Карманный дневник для записи снов в дороге',
      price: 650,
      category: 'journals',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/5d123dcc-d743-446b-b36f-07086cb77d24.jpg',
      rating: 4
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'masks', name: 'Маски для сна', icon: 'Moon' },
    { id: 'journals', name: 'Дневники', icon: 'BookOpen' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Sparkles' },
    { id: 'aromatherapy', name: 'Ароматерапия', icon: 'Flame' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Moon" className="text-primary" size={28} />
            <h1 className="text-2xl font-bold text-foreground">Архив Снов</h1>
          </Link>
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

      <div className="relative overflow-hidden py-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
            <h2 className="text-5xl font-bold">Каталог товаров</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональные инструменты для изучения и практики осознанных сновидений
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="gap-2"
            >
              <Icon name={category.icon as any} size={16} />
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product, index) => (
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

export default Catalog;
