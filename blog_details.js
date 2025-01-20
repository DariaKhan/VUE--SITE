Vue.component("blog_details", {
    props: {},
  
    data() {
      return {
        articles: [
          {
            id: 0,
            tag: "planirovka",
            title: "Создадим лучший макет перепланировки",
            date: "26 Декабрь, 2022",
            text: "В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке...",
          },
          {
            id: 1,
            tag: "kuhnya",
            title: "Идеи для дизайна современной кухни",
            date: "10 Январь, 2023",
            text: "Современные кухни становятся не просто местом для готовки, а сердцем дома. Использование натуральных материалов...",
          },
          {
            id: 2,
            tag: "spalnya",
            title: "Создайте уют в своей спальне",
            date: "15 Февраль, 2023",
            text: "Спальня — это место для отдыха и восстановления. Важную роль играет подбор цветов: мягкие пастельные оттенки создают атмосферу...",
          },
          {
            id: 3,
            tag: "zdanie",
            title: "Современные подходы в проектировании зданий",
            date: "1 Март, 2023",
            text: "Современная архитектура основывается на принципах устойчивости и инновационных технологий. Применение экологически чистых материалов...",
          },
          {
            id: 4,
            tag: "arhitektura",
            title: "Архитектура будущего: тренды и перспективы",
            date: "20 Март, 2023",
            text: "Архитектура будущего ориентируется на гармонию с природой и использование умных технологий...",
          },
          {
            id: 5,
            tag: "gostinaya",
            title: "Как оформить уютную гостиную",
            date: "5 Апрель, 2023",
            text: "Гостиная — это центр общения и отдыха в доме. При оформлении стоит уделить внимание цветовой гамме, удобной мебели...",
          },
        ],
        tagName: "",
      };
    },
  
    computed: {
      articleCases() {
        if (this.tagName) {
          return this.articles.filter((article) => article.tag === this.tagName);
        }
        return this.articles;
      },
    },
  
    template: `
        <div class="blog-article center">
          <div class="blog-article__info-box">
            <div v-for="article in articleCases" :key="article.id">
              <h3 class="blog-article__heading">{{ article.title }}</h3>
              <img
                class="blog-article__main-img"
                src="./img/3-article_picture1.png"
                alt="blog_image"
              />
              <div class="blog-article__data-nav-box">
                <div class="blog-article__date">{{ article.date }}</div>
                <nav class="blog-article__nav">
                  <ul class="blog-article__nav_list">
                    <li class="blog-article__nav_item">
                      <a href="index.html">Домой</a>
                    </li>
                    <li class="blog-article__nav_item">/</li>
  
                    <li class="blog-article__nav_item">
                      <a href="#">Проект</a>
                    </li>
                    <li class="blog-article__nav_item">/</li>
                    <li class="blog-article__nav_item">
                      <a href="#">Блог</a>
                    </li>
                  </ul>
                </nav>
              </div>
  
              <p class="blog-article__text">{{ article.text }}</p>
            </div>
            <div class="blog-article__insert">
              <div class="blog-article__insert-block">
                <div class="blog-article__symbols">
                  <svg
                    width="74"
                    height="56"
                    viewBox="0 0 74 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                      fill="#CDA274"
                    />
                  </svg>
                </div>
                <p class="blog-article__text-after-symbol">
                  Какая-то умная и красивая цитата
                </p>
              </div>
            </div>
            <h3 class="blog-article__second-tytle">Design sprints are great</h3>
            <p class="blog-article__text">
              В оригинале текст выглядит так «Neque porro quisquam est qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit ...», и
              переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее
              и хотел бы чтобы она была у него. Потому что это боль...»
            </p>
            <ul class="blog-article__points">
              <li class="blog-article__point">
                <span class="blog-article__number">1</span>С того времени этот,
                похожий на латинский, текст стал стандартом в печатной
                промышленности для примеров шрифтов и текстов.
              </li>
              <li class="blog-article__point">
                <span class="blog-article__number">2</span>С того времени этот,
                похожий на латинский, текст стал стандартом в печатной
                промышленности для примеров шрифтов и текстов.
              </li>
              <li class="blog-article__point">
                <span class="blog-article__number">3</span>С того времени этот,
                похожий на латинский, текст стал стандартом в печатной
                промышленности для примеров шрифтов и текстов.
              </li>
            </ul>
            <img
              class="blog-article__secondary-img"
              src="./img/3-article_picture2.png"
              alt="blog_image"
            />
            <p class="blog-article__end-text">
              В своей статье от 1994-го года журнал «Before & After» отследил
              фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах
              добра и зла, написанного в 45 году до нашей эры на латинском языке.
            </p>
          </div>
  
          <div class="blog-article__tags-box">
            <h3 class="blog-article__tags_heading">Тэги</h3>
            <ul class="blog-article__tags">
              <li>
                <button @click="tagName=''" class="blog-article__tag-button">
                  Все
                </button>
              </li>
              <li>
                <button @click="tagName='kuhnya'" class="blog-article__tag-button">
                  Кухня
                </button>
              </li>
              <li>
                <button @click="tagName='spalnya'" class="blog-article__tag-button">
                  Спальня
                </button>
              </li>
              <li>
                <button @click="tagName='zdanie'" class="blog-article__tag-button">
                  Здание
                </button>
              </li>
              <li>
                <button
                  @click="tagName='arhitektura'"
                  class="blog-article__tag-button"
                >
                  Архитектура
                </button>
              </li>
              <li>
                <button
                  @click="tagName='planirovka'"
                  class="blog-article__tag-button"
                >
                  Планировка
                </button>
              </li>
              <li>
                <button
                  @click="tagName='gostinaya'"
                  class="blog-article__tag-button"
                >
                  Гостиная
                </button>
              </li>
            </ul>
          </div>
        </div>
      `,
  });
  