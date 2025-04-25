# 🎓 Автоматизированная система отчётности | Frontend

## 🧰 Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="40" alt="HTML5 Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="40" alt="CSS3 Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" width="40" alt="Sass Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="40" alt="React Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="40" alt="TypeScript Logo" />
  <img src="https://axios-http.com/assets/logo.svg" height="40" width="40" alt="Axios Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" height="40" width="40" alt="Vite Logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git Logo" />
</div>

## 🖥 Описание

Интерфейсная часть веб-приложения для автоматизированного учета и анализа научно-педагогической деятельности преподавателей. Позволяет пользователям аутентифицироваться, просматривать таблицы и взаимодействовать с системой в зависимости от своей роли (преподаватель, заведующий кафедрой, проректор, ректор).

## 🚀 Реализованный функционал

> - 🔐 Модальное окно авторизации
> - 🏠 Главная страница с описанием системы
> - 📊 Страница с таблицами (отображение зависит от роли)
> - 🧭 Навигация и маршрутизация
> - 🚫 Обработка ошибки 404
> - 📱 Адаптивный интерфейс
> - 🔁 Сохраняемая авторизация с localStorage и автообновлением accessToken

## 🧭 Маршруты

| Путь     | Страница | Доступ                   |
| -------- | -------- | ------------------------ |
| `/`      | Home     | Все пользователи         |
| `/table` | Table    | Только после авторизации |
| `*`      | NotFound | Все пользователи         |

## 🔒 Аутентификация

> - При успешной авторизации accessToken и роль пользователя сохраняются в localStorage
> - Поддерживается автоматическое продление сессии через httpOnly refreshToken (обрабатывается на стороне сервера)
> - Контекст AuthContext отслеживает состояние и предоставляет доступ к данным во всех компонентах

## 🛠 Установка и запуск

1. Перейдите в папку frontend
2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm run dev
```

⚠️ Обязательно должен быть запущен Backend по адресу http://localhost:9999 для работы авторизации и refresh-токенов.

## 👨‍💻 Об авторе

**Victor Yrman (TheYrman)**

**Веб-разработчик**

<details>
  <summary>📫 Контакты</summary>

<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="16" alt="Telegram"/> [Telegram](https://t.me/theyrman_development)
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="16" alt="LinkedIn"/> [LinkedIn](https://www.linkedin.com/in/vitya-yrman-a83508264/)
📍 Брест, Беларусь

</details>
