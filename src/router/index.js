import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Đoàn Hiếu PRO',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://windowxp.vercel.app'
          },
          {
            name: 'title',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            name: 'description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            name: 'keywords',
            content: 'portfolio, Doan Hieu, developpeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Đoàn Hiếu'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            name: 'twitter:description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            property: 'og:description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Đoàn Hiếu PRO'
          },
          {
            property: 'og:url',
            content: 'https://pauljaguin.com'
          },
          {
            property: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          },
          {
            property: 'og:locale:alternate',
            content: 'fr_FR'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Desktop | Đoàn Hiếu PRO',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://pauljaguin.com/office'
          },
          {
            name: 'title',
            content: 'Desktop | Đoàn Hiếu PRO'
          },
          {
            name: 'description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            name: 'keywords',
            content: 'bureau, Doan Hieu, developer web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Đoàn Hiếu'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Bureau | Đoàn Hiếu PRO'
          },
          {
            name: 'application-name',
            content: 'Desktop | Đoàn Hiếu PRO'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Desktop | Đoàn Hiếu PRO'
          },
          {
            name: 'twitter:description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            name: 'twitter:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Desktop | Đoàn Hiếu PRO'
          },
          {
            name: 'og:description',
            content:
              "Đam mê công nghệ, không ngừng khám phá, học hỏi, phát triển"
          },
          {
            name: 'og:site_name',
            content: 'Desktop | Đoàn Hiếu PRO'
          },
          {
            name: 'og:url',
            content: 'https://pauljaguin.com/office'
          },
          {
            name: 'og:image',
            content: 'https://pauljaguin.com/img/logo-portfolio-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Paul Jaguin'
          },
          {
            name: 'og:locale',
            content: 'en_US'
          },
          {
            name: 'og:locale:alternate',
            content: 'fr_FR'
          }
        ]
      }
    }
  ]
})

export default router
