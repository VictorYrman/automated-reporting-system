# 🎓 Автоматизированная система отчётности | Backend

## 🧰 Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" height="40" width="40" alt="Fastify" title="Fastify"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" width="40" alt="TypeScript" title="TypeScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" width="40" alt="PostgreSQL" title="PostgreSQL"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git" title="Git"/>
</div>

## 🖥 Описание

Серверная часть веб-приложения, реализованная с использованием Fastify и TypeScript. Отвечает за RESTful API, авторизацию, управление токенами и подключение к базе данных PostgreSQL. Поддерживает безопасную аутентификацию с использованием JWT и httpOnly cookie.

## 🚀 Реализованный функционал

> - 🧾 `POST /login` — Авторизация, выдача access и refresh токенов
> - 🔄 `GET /refresh` — Обновление access токена по refresh токену
> - 🚪 `POST /logout` — Выход из системы, очистка refresh токена
> - 🛡 Middleware `authenticate` — Проверка валидности access токена
> - 🗄 Подключение к PostgreSQL через `fastify-postgres`

## 🔒 Аутентификация

> - Access Token (15 минут) и Refresh Token (1 или 15 дней) выдаются при логине
> - Refresh Token сохраняется в httpOnly cookie
> - Автоматическое обновление access токена на клиенте при истечении срока
> - Валидация access токена через middleware

## 🛠 Установка и запуск

1. Перейдите в папку backend
2. Установите зависимости:

```bash
npm install
```

3. Создайте файл .env на основе шаблона:

```bash
PORT=9999

DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database

SECRET_ACCESS_TOKEN=your_access_secret
SECRET_REFRESH_TOKEN=your_refresh_secret
```

4. Запустите сервер:

```bash
npm run dev
```

Сервер будет доступен по адресу http://localhost:9999

## 👨‍💻 Об авторе

**Victor Yrman (TheYrman)**

**Веб-разработчик**

<details>
  <summary>📫 Контакты</summary>

<img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" width="16" alt="Telegram"/> [Telegram](https://t.me/theyrman_development)
<img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" width="16" alt="LinkedIn"/> [LinkedIn](https://www.linkedin.com/in/vitya-yrman-a83508264/)
📍 Брест, Беларусь

</details>
