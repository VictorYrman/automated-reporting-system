# Директория frontend

## Технологический стек

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" width="40" alt="HTML5" title="HTML5"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" width="40" alt="CSS3" title="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="40" alt="JavaScript" title="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" alt="Git" title="Git"/>
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
