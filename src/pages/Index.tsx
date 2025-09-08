import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const ChessBoard = () => {
  const squares = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const isLight = (row + col) % 2 === 0;
    
    return (
      <div
        key={i}
        className={`aspect-square flex items-center justify-center text-2xl ${
          isLight ? 'bg-chess-light-square' : 'bg-chess-dark-square'
        }`}
      >
        {/* Chess pieces would go here */}
        {i === 0 && '♜'}
        {i === 7 && '♜'}
        {i === 56 && '♖'}
        {i === 63 && '♖'}
        {i === 1 && '♞'}
        {i === 6 && '♞'}
        {i === 57 && '♘'}
        {i === 62 && '♘'}
        {i === 4 && '♚'}
        {i === 60 && '♔'}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-8 gap-0 w-80 h-80 border-4 border-chess-black rounded-lg overflow-hidden shadow-2xl">
      {squares}
    </div>
  );
};

const AnalysisChart = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">Анализ позиции</span>
        <Badge variant="secondary">+0.8</Badge>
      </div>
      <Progress value={65} className="h-3" />
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="font-medium">Белые</div>
          <div className="text-muted-foreground">Небольшое преимущество</div>
        </div>
        <div>
          <div className="font-medium">Черные</div>
          <div className="text-muted-foreground">Защищаются</div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary/10">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">CHESS MASTER</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Обучение</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Турниры</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Игра онлайн</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Рейтинги</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Новости</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                  Мастерство
                  <span className="block text-primary">в каждом ходе</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Профессиональная платформа для изучения шахмат, анализа партий и участия в турнирах мирового уровня
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Начать обучение
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-gray-600">Активных игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-gray-600">Проанализированных партий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Онлайн турниры</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <ChessBoard />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-64">
                  <AnalysisChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Возможности платформы</h2>
            <p className="text-xl text-gray-600">Все инструменты для совершенствования игры в одном месте</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Brain" size={32} className="text-primary" />
                </div>
                <CardTitle>ИИ-анализ</CardTitle>
                <CardDescription>
                  Мощный движок анализирует каждый ход и предлагает улучшения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle>Мультиплеер</CardTitle>
                <CardDescription>
                  Играйте с соперниками со всего мира в реальном времени
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" size={32} className="text-primary" />
                </div>
                <CardTitle>Турниры</CardTitle>
                <CardDescription>
                  Участвуйте в турнирах различного уровня и выигрывайте призы
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" size={32} className="text-primary" />
                </div>
                <CardTitle>Обучение</CardTitle>
                <CardDescription>
                  Структурированные курсы от дебютов до эндшпиля
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Analysis Tools Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-foreground text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Инструменты анализа</h2>
            <p className="text-xl text-gray-300">Профессиональные инструменты для глубокого анализа партий</p>
          </div>

          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/10">
              <TabsTrigger value="analysis" className="text-white data-[state=active]:bg-white data-[state=active]:text-foreground">Анализ позиции</TabsTrigger>
              <TabsTrigger value="database" className="text-white data-[state=active]:bg-white data-[state=active]:text-foreground">База данных</TabsTrigger>
              <TabsTrigger value="engine" className="text-white data-[state=active]:bg-white data-[state=active]:text-foreground">Движок</TabsTrigger>
            </TabsList>
            
            <TabsContent value="analysis" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Мгновенный анализ позиций</h3>
                  <p className="text-gray-300 text-lg">
                    Получайте детальную оценку позиции, лучшие ходы и тактические возможности 
                    с помощью современных шахматных движков.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Оценка материального баланса</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Анализ безопасности короля</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Контроль центра и активность фигур</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="Check" size={20} className="text-primary" />
                      <span>Пешечная структура</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Текущий анализ</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Материальный баланс</span>
                        <Badge variant="secondary">+0.5</Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="text-sm text-gray-300">
                        Белые имеют небольшое позиционное преимущество благодаря лучшей координации фигур
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">База данных партий</h3>
                  <p className="text-gray-300 text-lg">
                    Миллионы партий гроссмейстеров, статистика дебютов и 
                    исторические данные для глубокого изучения.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Статистика</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">5.2M</div>
                      <div className="text-sm text-gray-300">Партий в базе</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">2800+</div>
                      <div className="text-sm text-gray-300">Рейтинг игроков</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="engine" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Шахматный движок</h3>
                  <p className="text-gray-300 text-lg">
                    Используйте мощные движки для анализа на уровне 
                    супергроссмейстеров и ИИ.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Параметры движка</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Глубина анализа</span>
                      <span className="text-primary">22 полухода</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Скорость</span>
                      <span className="text-primary">15M узлов/сек</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Последние новости</h2>
            <p className="text-xl text-gray-600">Актуальные события из мира шахмат</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Турниры</Badge>
                <CardTitle className="text-lg">Чемпионат мира по быстрым шахматам</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  15 сентября 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Захватывающие поединки лучших шахматистов планеты в формате быстрой игры.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Обновления</Badge>
                <CardTitle className="text-lg">Новый ИИ-тренер</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  12 сентября 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Представляем улучшенного ИИ-тренера с персонализированными уроками.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-primary text-primary-foreground">События</Badge>
                <CardTitle className="text-lg">Международный день шахмат</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  20 июля 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Празднуем всемирный день шахмат специальными турнирами и мастер-классами.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Crown" size={24} className="text-primary" />
                <span className="text-xl font-bold">CHESS MASTER</span>
              </div>
              <p className="text-gray-400">
                Профессиональная платформа для изучения и игры в шахматы
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Играть онлайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Анализ партий</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Сообщество</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнеры</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Chess Master. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;