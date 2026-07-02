import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const LOGO = 'https://i.postimg.cc/2S7WsRNF/Bez-5imeni.png';
const PORTRAIT = 'https://i.postimg.cc/YCjV1ZhV/IMG-4704.png';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'О нас' },
  { id: 'services', label: 'Услуги' },
  { id: 'contact-form', label: 'Заявка' },
  { id: 'contacts', label: 'Контакты' },
];

const ADVANTAGES = [
  { icon: 'Award', title: '14 лет опыта', text: 'Признанный эксперт с сотнями реализованных проектов в разных отраслях.' },
  { icon: 'Scale', title: '44-ФЗ и 223-ФЗ', text: 'Глубокая экспертиза законодательства о госзакупках и корпоративных торгах.' },
  { icon: 'ShieldCheck', title: 'Ответственность', text: 'Персональная ответственность за результат и полная конфиденциальность.' },
  { icon: 'TrendingUp', title: 'Прозрачные цены', text: 'Оптимизация затрат, минимизация рисков и понятное ценообразование.' },
];

const COMPETENCES = [
  'Стратегическое планирование тендерной деятельности',
  'Полное сопровождение проектов от поиска до исполнения',
  'Управление командами тендерных специалистов',
  'Разработка регламентов и стандартизация процессов',
  'Комплексный анализ рыночной конъюнктуры',
];

const PORTFOLIO = [
  'Промышленное оборудование и комплектующие',
  'Строительные материалы и технологии',
  'Рекламно-сувенирная продукция',
  'Мультимедийные решения и контент',
  'BTL-услуги и event-мероприятия',
];

const SERVICES = [
  { num: '01', icon: 'Search', title: 'Поиск и просчёт тендеров', text: 'Мониторинг площадок, отбор релевантных закупок и предварительный расчёт участия под ваш профиль.' },
  { num: '02', icon: 'FileText', title: 'Подготовка документов на подачу', text: 'Формирование заявки любой сложности в строгом соответствии с требованиями 44-ФЗ и 223-ФЗ.' },
  { num: '03', icon: 'Calculator', title: 'Просчёт выбранных тендеров', text: 'Детальный анализ и расчёт экономики выбранных вами тендеров: рентабельность, риски, стратегия.' },
  { num: '04', icon: 'Crown', title: 'Тендерное сопровождение под ключ', text: 'Полный цикл: от анализа перспектив и подготовки документации до контроля исполнения контракта.' },
];

const Index = () => {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-graphite-dark text-foreground overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-gold/10 bg-graphite-dark/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-4 group">
            <img src={LOGO} alt="Логотип" className="w-14 h-14 object-contain mix-blend-lighten group-hover:opacity-90 transition-all rounded-full" />
            <div className="text-left leading-none">
              <p className="font-display text-3xl font-bold tracking-[0.18em] text-gold" style={{fontFamily:'Playfair Display, serif', letterSpacing:'0.18em'}}>M&nbsp;G&nbsp;S</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">Тендерное сопровождение</p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-4 py-2 text-sm tracking-wide rounded transition-colors ${
                  active === n.id ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {n.label}
              </button>
            ))}
            <Button onClick={() => scrollTo('contact-form')} className="ml-3 gold-border-btn text-graphite-dark font-semibold hover:opacity-90">
              Оставить заявку
            </Button>
          </nav>

          <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-gold/10 bg-graphite-dark/95 animate-fade-in">
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-3 text-muted-foreground hover:text-gold border-b border-gold/5">
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-40 pb-28 md:pt-52 md:pb-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-gold/5 blur-[120px]" />
          <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-gold/4 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full bg-gold/3 blur-[100px]" />
        </div>
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-gold/25 text-gold text-xs uppercase tracking-[0.2em]">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              № 1 в тендерном сопровождении — 14 лет опыта
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-5">
              Выигрывайте тендеры
              <br />
              <span className="text-gold-gradient">с первой попытки</span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-lg mb-4 leading-relaxed font-medium">
              Берём на себя весь цикл — от поиска закупки до подписания контракта. Вы получаете результат, не тратя время на бюрократию.
            </p>
            <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
              500+ выигранных тендеров · ₽2.8 млрд контрактов · 94% процент побед
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="lg" onClick={() => scrollTo('contact-form')} className="gold-border-btn text-graphite-dark font-bold h-14 px-12 hover:opacity-90 text-base">
                Получить бесплатный анализ
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('services')} className="h-14 px-10 border-gold/40 text-gold hover:bg-gold/10 hover:text-gold text-base">
                Узнать об услугах
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mb-10">
              <Icon name="Clock" size={13} className="inline mr-1 text-gold" />
              Ответим в течение 2 часов — бесплатно и без обязательств
            </p>

            <div className="flex gap-10 pt-8 border-t border-gold/10">
              {[['14', 'лет опыта'], ['500+', 'побед'], ['94%', 'выигрышей']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl font-bold text-gold">{n}</p>
                  <p className="text-sm text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in-slow grid grid-cols-2 gap-4">
            {[
              { value: '500+', label: 'выигранных тендеров', icon: 'Trophy', sub: 'за 14 лет работы' },
              { value: '₽2.8 млрд', label: 'сумма контрактов', icon: 'TrendingUp', sub: 'в разных отраслях' },
              { value: '94%', label: 'процент побед', icon: 'Target', sub: 'в конкурентных торгах' },
              { value: '48 ч', label: 'среднее время отклика', icon: 'Zap', sub: 'от заявки до анализа' },
            ].map(({ value, label, icon, sub }) => (
              <div key={label} className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                  <Icon name={icon} size={20} />
                </div>
                <p className="font-display text-3xl font-semibold text-gold leading-none">{value}</p>
                <div>
                  <p className="text-sm font-medium text-foreground/90">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-8">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADVANTAGES.map((a) => (
            <div key={a.title} className="glass-card rounded-xl p-7 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 text-gold">
                <Icon name={a.icon} size={24} />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="container">
          <SectionTitle label="О специалисте" title="Признанный эксперт отрасли" />

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Фото — компактное, слева */}
            <div className="relative shrink-0 w-56 mx-auto lg:mx-0">
              <div className="absolute -inset-3 bg-gold/10 blur-2xl rounded-full" />
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-gold/25 shadow-2xl">
                <img src={PORTRAIT} alt="Юлия Макарова" className="w-full object-cover aspect-[3/4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-dark/60 via-transparent to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-display text-base font-semibold text-gold leading-tight">Юлия Сергеевна<br />Макарова</p>
                <p className="text-xs text-muted-foreground mt-1 tracking-wide">Эксперт тендерного сопровождения</p>
              </div>
            </div>

            {/* Описание — справа */}
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-7">
                {[['14 лет', 'опыта в отрасли'], ['500+', 'выигранных тендеров'], ['Top-5%', 'специалистов РФ']].map(([n, l]) => (
                  <div key={l} className="glass-card rounded-xl px-5 py-3 flex flex-col items-center min-w-[110px]">
                    <span className="font-display text-2xl font-semibold text-gold">{n}</span>
                    <span className="text-xs text-muted-foreground text-center mt-0.5">{l}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                <span className="text-gold font-semibold">Юлия Сергеевна Макарова</span> — один из ведущих экспертов России в сфере тендерного сопровождения. За 14 лет реализовала сотни проектов в различных отраслях, выстроила тендерные отделы с нуля в компаниях разного масштаба.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Глубокое знание 44-ФЗ и 223-ФЗ, системный подход к управлению рисками, налаженные связи с ключевыми участниками рынка — всё это позволяет добиваться результата там, где другие отступают.
              </p>

              <h3 className="font-display text-xl font-semibold text-gold mb-4">Ключевые компетенции</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {COMPETENCES.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-graphite/40 border-y border-gold/10">
        <div className="container">
          <SectionTitle label="Услуги" title="Что я делаю для вас" />
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div key={s.num} className="glass-card rounded-2xl p-8 group transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-graphite-dark transition-colors">
                    <Icon name={s.icon} size={26} />
                  </div>
                  <span className="font-display text-5xl font-semibold text-gold/15">{s.num}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.text}</p>
                <button onClick={() => scrollTo('contact-form')} className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all">
                  Обсудить услугу <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-28">
        <div className="container max-w-3xl">
          <SectionTitle label="Заявка" title="Оставьте заявку на консультацию" center />
          <p className="text-center text-muted-foreground -mt-6 mb-12">
            Свяжусь с вами в течение рабочего дня и предложу оптимальную стратегию участия в тендерах.
          </p>
          <form className="glass-card rounded-2xl p-8 md:p-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Ваше имя" placeholder="Иван Иванов" />
              <Field label="Телефон" placeholder="+7 (___) ___-__-__" />
            </div>
            <Field label="E-mail" placeholder="example@mail.ru" />
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Ваш запрос</label>
              <Textarea placeholder="Кратко опишите вашу задачу или сферу деятельности" rows={4} className="bg-graphite/60 border-gold/20 focus-visible:ring-gold" />
            </div>
            <Button type="submit" size="lg" className="w-full gold-border-btn text-graphite-dark font-semibold h-13 hover:opacity-90">
              Отправить заявку
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-graphite/40 border-t border-gold/10">
        <div className="container">
          <SectionTitle label="Контакты" title="Свяжитесь со мной" center />
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (900) 000-00-00' },
              { icon: 'Mail', title: 'E-mail', value: 'makarova@tender.ru' },
              { icon: 'Send', title: 'Telegram', value: '@makarova_tender' },
            ].map((c) => (
              <div key={c.title} className="glass-card rounded-xl p-8 text-center transition-all hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                  <Icon name={c.icon} size={24} />
                </div>
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">{c.title}</p>
                <p className="font-display text-2xl font-semibold text-gold">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 border-t border-gold/10">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">Нам доверяют крупнейшие компании России</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {[
              { name: 'Газпром', abbr: 'ГАЗПРОМ' },
              { name: 'Роснефть', abbr: 'РОСНЕФТЬ' },
              { name: 'РЖД', abbr: 'РЖД' },
              { name: 'Ростелеком', abbr: 'РОСТЕЛЕКОМ' },
              { name: 'Сбербанк', abbr: 'СБЕР' },
              { name: 'Лукойл', abbr: 'ЛУКОЙЛ' },
              { name: 'Росатом', abbr: 'РОСАТОМ' },
            ].map(({ name, abbr }) => (
              <div key={name} className="glass-card rounded-xl px-7 py-4 flex items-center justify-center min-w-[130px] hover:border-gold/40 transition-all">
                <span className="font-display text-lg font-bold tracking-widest text-foreground/40 hover:text-gold/70 transition-colors select-none">{abbr}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gold/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Логотип" className="w-20 h-20 object-contain mix-blend-lighten" />
            <span className="font-display text-lg font-semibold tracking-[0.3em] text-gold">M&nbsp;&nbsp;G&nbsp;&nbsp;S</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 — Тендерное сопровождение под ключ</p>
        </div>
      </footer>
    </div>
  );
};

const SectionTitle = ({ label, title, center }: { label: string; title: string; center?: boolean }) => (
  <div className={`mb-14 ${center ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-10 gold-line" />
      <span className="text-xs uppercase tracking-[0.3em] text-gold">{label}</span>
      {center && <span className="h-px w-10 gold-line" />}
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-semibold">{title}</h2>
  </div>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <label className="block text-sm text-muted-foreground mb-2">{label}</label>
    <Input placeholder={placeholder} className="bg-graphite/60 border-gold/20 focus-visible:ring-gold h-12" />
  </div>
);

export default Index;