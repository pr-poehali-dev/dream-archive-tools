export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
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

export const categories = [
  { 
    id: 'masks', 
    name: 'Маски для сна', 
    icon: 'Moon',
    description: 'Специальные маски с технологиями для практики осознанных сновидений'
  },
  { 
    id: 'journals', 
    name: 'Дневники', 
    icon: 'BookOpen',
    description: 'Профессиональные дневники для записи и анализа сновидений'
  },
  { 
    id: 'accessories', 
    name: 'Аксессуары', 
    icon: 'Sparkles',
    description: 'Амулеты, кристаллы и другие инструменты для практики'
  },
  { 
    id: 'aromatherapy', 
    name: 'Ароматерапия', 
    icon: 'Flame',
    description: 'Эфирные масла и благовония для глубокого сна'
  }
];
