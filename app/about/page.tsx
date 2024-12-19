import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <header>
        <div className="logo">Логотип</div>
        <nav>
            <ul>
                <li><a href="#search">Быстрый поиск</a></li>
                <li><a href="#register">Регистрация</a></li>
              
            </ul>
        </nav>
    </header>

    <main>
        <section className="slider">
             
        </section>
        <div className="dot-container">
            <span className="dot"></span>
            <span className="dot" ></span>
            <span className="dot" ></span>
        </div>
        
        <section className="catalog">
            <h2>Каталог</h2>
            <div className="item">
                
                <h3>Собака</h3>
                <p>Краткое описание собаки.</p>
                <a href="#" className="button">Подробнее</a>
            </div>
            <div className="item">
              
                <h3>Кошка</h3>
                <p>Краткое описание кошки.</p>
                <a href="#" className="button">Подробнее</a>
            </div>
            <div className="item">
               
                <h3>Кролик</h3>
                <p>Краткое описание кролика.</p>
                <a href="#" className="button">Подробнее</a>
            </div>
        </section>
    </main>

    <footer>
        <p>Телефон: +7 (123) 456-78-90</p>
        <p>Email: info@example.com</p>
    </footer>
    </div>
  );
}
