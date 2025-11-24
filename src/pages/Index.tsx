import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface Review {
  id: number;
  author: string;
  product: string;
  rating: number;
  text: string;
  date: string;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [dreamEntry, setDreamEntry] = useState({ title: '', content: '', mood: '' });

  const products: Product[] = [
    {
      id: 1,
      name: 'Маска для осознанных снов',
      description: 'Специальная маска с LED-индикаторами для практики REM-тестирования',
      price: 4500,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg'
    },
    {
      id: 2,
      name: 'Дневник сновидений Lunar',
      description: 'Премиум дневник с подсказками для интерпретации образов',
      price: 1200,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg'
    },
    {
      id: 3,
      name: 'Амулет осознанности',
      description: 'Амулет с аметистом для усиления осознанности во сне',
      price: 2800,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg'
    },
    {
      id: 4,
      name: 'Набор ароматерапии',
      description: 'Масла лаванды и сандала для глубокого сна',
      price: 1800,
      category: 'accessories',
      image: 'https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/f37517f6-f484-4b1c-a165-9a07343e7f4b.jpg'
    }
  ];

  const techniques = [
    {
      title: 'MILD техника',
      description: 'Мнемоническая индукция осознанных сновидений',
      difficulty: 'Начинающий',
      icon: 'Brain'
    },
    {
      title: 'WILD техника',
      description: 'Вход в осознанный сон из бодрствования',
      difficulty: 'Продвинутый',
      icon: 'Moon'
    },
    {
      title: 'Reality Checks',
      description: 'Проверка реальности в течение дня',
      difficulty: 'Начинающий',
      icon: 'Eye'
    },
    {
      title: 'Dream Journaling',
      description: 'Практика ведения дневника сновидений',
      difficulty: 'Начинающий',
      icon: 'BookOpen'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      author: 'Анна К.',
      product: 'Маска для осознанных снов',
      rating: 5,
      text: 'Невероятный результат! Уже через неделю использования начала осознавать себя во сне. Качество маски превосходное.',
      date: '15 ноября 2024'
    },
    {
      id: 2,
      author: 'Михаил П.',
      product: 'MILD техника',
      rating: 5,
      text: 'Техника действительно работает. После месяца практики могу входить в осознанные сны 3-4 раза в неделю.',
      date: '10 ноября 2024'
    },
    {
      id: 3,
      author: 'Елена С.',
      product: 'Дневник сновидений Lunar',
      rating: 5,
      text: 'Красивый дневник с продуманной структурой. Подсказки помогают лучше интерпретировать символы.',
      date: '5 ноября 2024'
    }
  ];

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

  const saveDream = () => {
    if (dreamEntry.title && dreamEntry.content) {
      alert('Сновидение сохранено! 🌙');
      setDreamEntry({ title: '', content: '', mood: '' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Moon" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Архив Снов</h1>
            </div>
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

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <img
          src="https://cdn.poehali.dev/projects/5837ed2d-3dde-4afd-83d9-d2fff7139866/files/5c06e666-0065-45e3-b3b8-6c0fb9b6e4b7.jpg"
          alt="Dream"
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-float">
              Исследуйте мир осознанных сновидений
            </h2>
            <p className="text-xl text-muted-foreground">
              Инструменты и практики для контроля над своими снами
            </p>
            <Link to="/catalog">
              <Button size="lg" className="mt-4">
                Начать путешествие
                <Icon name="Sparkles" className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground">Профессиональные инструменты для изучения снов</p>
            <Link to="/catalog">
              <Button variant="outline" className="mt-4">
                Смотреть весь каталог
                <Icon name="ArrowRight" className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button onClick={() => addToCart(product)}>
                    <Icon name="Plus" size={16} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="techniques" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Практики и техники</h2>
            <p className="text-muted-foreground">Проверенные методы освоения осознанных сновидений</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="text-center hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={technique.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle>{technique.title}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Badge variant="secondary">{technique.difficulty}</Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="py-16 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Дневник сновидений</h2>
            <p className="text-muted-foreground">Записывайте и анализируйте свои сны</p>
          </div>
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle>Новая запись сна</CardTitle>
              <CardDescription>Запишите детали сновидения сразу после пробуждения</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="dream-title">Название сна</Label>
                <Input
                  id="dream-title"
                  placeholder="Например: Полёт над городом"
                  value={dreamEntry.title}
                  onChange={(e) => setDreamEntry({ ...dreamEntry, title: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="dream-content">Описание</Label>
                <Textarea
                  id="dream-content"
                  placeholder="Опишите ваш сон максимально подробно..."
                  rows={6}
                  value={dreamEntry.content}
                  onChange={(e) => setDreamEntry({ ...dreamEntry, content: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="dream-mood">Настроение после сна</Label>
                <Input
                  id="dream-mood"
                  placeholder="Спокойное, радостное, тревожное..."
                  value={dreamEntry.mood}
                  onChange={(e) => setDreamEntry({ ...dreamEntry, mood: e.target.value })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveDream} className="w-full">
                <Icon name="Save" size={16} className="mr-2" />
                Сохранить запись
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы сновидцев</h2>
            <p className="text-muted-foreground">Реальный опыт наших клиентов</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="animate-fade-in hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.author}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs">{review.product}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Moon" className="text-primary" size={24} />
            <span className="text-xl font-bold">Архив Снов</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Исследуйте границы сознания через практику осознанных сновидений
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            © 2024 Архив Снов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;