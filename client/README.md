# Директория frontend

## Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="40" alt="HTML5" title="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="40" alt="CSS3" title="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="40" alt="JavaScript" title="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" height="40" width="40" alt="Fastify" title="Fastify"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" alt="Node.js" title="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" width="40" alt="MongoDB" title="MongoDB"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git" title="Git"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jwt/jwt-plain.svg" height="40" width="40" alt="JWT" title="JWT" />
  <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" height="40" width="40" alt="httpOnly Cookie" title="httpOnly Cookie (secure)" />
</div>

## Описание

Директория frontend представляет собой клиентскую часть веб-приложения, реализованную на базе библиотеки React с использованием React Router, модальной авторизации и управления ролями пользователей. Приложение построено по компонентной архитектуре, поддерживает адаптивный дизайн, а также защищённые маршруты на основе аутентификации.

## Основные характеристики

> - Маршрутизация: реализована через react-router-dom
> - Авторизация: на основе JWT с access/refresh token, авторизация хранится в localStorage, есть автообновление токена при монтировании
> - Роли пользователей: определяют доступ к различным частям интерфейса (Преподаватель, Заведующий кафедрой, Проректор, Ректор)
> - Модальное окно входа: используется компонент Modal с формой AuthForm
> - Адаптивность: поддержка мобильных и десктопных разрешений с бургер-меню
> - Стилизация: SCSS с разделением на модули по компонентам и БЭМ-нейминг
