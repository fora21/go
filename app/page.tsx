'use client'
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Link from 'next/link'

import { Carousel } from "react-responsive-carousel";

export default function Home() {
    const myImageLoader = ({ src, width, quality }: any) => {
        return `${src}`
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
            <header>
                <div className="logo">Логотип</div>
                <nav>
                    <ul>
                        <li><Link href="/about">Быстрый поиск</Link></li>
                        <li><a href="#register">Регистрация</a></li>
                        <li><a href="#login">Вход</a></li>
                        <li><a href="#add">Добавить анкету</a></li>
                        <li><a href="#reviews">Отзывы</a></li>
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
                <Carousel>
                <div>
                    <img
                        src=
"https://i.pinimg.com/originals/42/40/e9/4240e997dc9051cfc6a421a6d1aaf7b4.jpg"
                        alt="image1"
                    />
                    <p className="legend">
                        Image 1
                    </p>
                </div>
                <div>
                    <img
                        src=
"https://i.pinimg.com/originals/5a/e9/2b/5ae92bf8226ff4a8480cca4026959c90.jpg"
                        alt="image2"
                    />
                    <p className="legend">
                        Image 2
                    </p>
                </div>
                <div>
                    <img
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172226/3.png"
                        alt="image3"
                    />
                    <p className="legend">
                        Image 3
                    </p>
                </div>
                <div>
                    <img
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172227/4.png"
                        alt="image4"
                    />
                    <p className="legend">
                        Image 4
                    </p>
                </div>
                <div>
                    <img
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20211213172229/5.png"
                        alt="image5"
                    />
                    <p className="legend">
                        Image 5
                    </p>
                </div>
            </Carousel>
                <section className="catalog">
                    <h2>Каталог</h2>
                    <div className="item">

                        {/* <Image alt="" src={"/9ec1fd6c20d9276837762b6bf8d67f57.jpg"} width={100} height={150} /> */}

                        <Image
                            loader={myImageLoader}
                            src="https://avatars.mds.yandex.net/i?id=380bac0802f07bfc76e41e9ae75c7de4_l-5288850-images-thumbs&n=13"
                            alt="Picture of the author"
                            width={500}
                            height={150} />

                        <h3>Собака</h3>
                        <p>Краткое описание собаки.</p>
                        <a href="#" className="button">Подробнее</a>
                    </div>
                    <div className="item">
                    <Image
                            loader={myImageLoader}
                            src="https://avatars.mds.yandex.net/get-ydo/6058772/2a00000186a1678e30592cd70626a7bf491f/diploma"
                            alt="Picture of the author"
                            width={500}
                            height={150} />
                        <h3>Кошка</h3>
                        <p>Краткое описание кошки.</p>
                        <a href="#" className="button">Подробнее</a>
                    </div>
                    <div className="item">

                    <Image
                            loader={myImageLoader}
                            src="https://image.winudf.com/v2/image1/Y29tLm1vdmluZy53YWxscGFwZXJzLnJhYmJpdC5saXZlLndhbGxwYXBlcl9zY3JlZW5fNl8xNTUzNzc4MDcwXzAwNg/screen-6.jpg?fakeurl=1&type=.jpg"
                            alt="Picture of the author"
                            width={500}
                            height={150} />
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
