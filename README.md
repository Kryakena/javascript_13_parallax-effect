# 🕊 Параллакс-эффект на сайте 🕊

Источник: видео "Параллакс анимация сайта Matthew Wagerfield (parallax.js) на CSS3 HTML jQuery // Как это сделать?" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239143%2F770e7f00fe8f3b6747

![2024-12-31_14-10-35](https://github.com/user-attachments/assets/e8e29535-7cbb-44ae-acd9-38506fda8529)



https://github.com/user-attachments/assets/4535497d-bf79-4aaf-b852-9f57aecffbe5



1. создаем создаем файлы index.html, style.css (в папке css), script.js (в папке js) в папке проекта. 
Скачиваем готовые шаблоны изображений (в папку img) и файл js (положить в папку js) и вставляем в папку проекта: 
https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnZIUDJuWGl6a2NrU0J2cU5pZi16R2UtbkxNQXxBQ3Jtc0treHU4U2lSU3NBZF9nU21ZN2hJX0tVQlZiUEZibDE3SHdobk5EcWtOY3NSWUJod2EzYmdhTWZTYUdkSjE5WEZaeERZNzAyMTdBUER0aGg4Z2lpWlVGZkZFaUh4NmdaeVJ4LXZ5UHVNS3hqM1FIbjJGQQ&q=https%3A%2F%2Ffls.guru%2Fhowtodoit%2Fhowtodoit_07_files.zip&v=bhHNpbYI_Tc

2. в файле index.html готовим шаблон

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title></title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->

    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/script.js"></script>
</div>
</body>
</html>
```

3. в файле style.css вставляем шаблон

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
}
.wrapper{

}
/* Основные стили */
```

4. в файл script.js вставляем шаблон

```js
$(document).ready(function () {

});
```

5. в файле index.html в разделе head пишем название и адаптив

```html
<title>Параллакс-эффект Matthew Wagerfield</title>
```
```html
 <!-- Адаптив -->
<meta name="viewport" content="width=device-width">
```

6. в файле index.html в разделе body подключаемся к скрипту

```html

<script src="js/jquery.parallax.js"></script>
```

7. в файле index.html в разделе body в классе wrapper создаем оболочку page, 
внутри которого создаем блоки параллакс и контент

```html
<div class="page">
    <div class="parallax"></div>
    <div class="content"></div>
</div>
```

8. в файле index.html в разделе body в классе parallax создаем список анимаций

```html
<ul class="parallax_list">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

9. в файле index.html в 1ом li - бэкграунд страницы

```html
<li>
    <div class="parallax_bg"></div>
</li>
```

10. в файле index.html в 2ом li - 1 веревочка - анимация из 3х элементов - облака, птички
(внутри каждого элемента помещаем span) + изображение

```html
<li>
    <div class="parallax_rope parallax_rope_1">
        <div class="parallax_element parallax_element_1"><span></span></div>
        <div class="parallax_element parallax_element_2"><span></span></div>
        <div class="parallax_element parallax_element_3"><span></span></div>
        <img src="img/rope.png" alt="">
    </div>
</li>
```

11. в файле index.html в 3ем li - 2 веревочка - меняем только нумерацию и оставляем 2 элемента

```html
<li>
    <div class="parallax_rope parallax_rope_2">
        <div class="parallax_element parallax_element_4"><span></span></div>
        <div class="parallax_element parallax_element_5"><span></span></div>
        <img src="img/rope.png" alt="">
    </div>
</li>
```

12. в файле index.html в 3ем li - 2 веревочка - меняем только нумерацию и оставляем 3 элемента

```html
<li>
    <div class="parallax_rope parallax_rope_3">
        <div class="parallax_element parallax_element_6"><span></span></div>
        <div class="parallax_element parallax_element_7"><span></span></div>
        <div class="parallax_element parallax_element_8"><span></span></div>
        <img src="img/rope.png" alt="">
    </div>
</li>
```

13. в файле index.html в других li - 3 волны, потом 1 li пропускаем и еще 3 волны

```html
<li>
    <div class="parallax_wave parallax_wave_1"></div>
</li>
<li>
    <div class="parallax_wave parallax_wave_2"></div>
</li>
<li>
    <div class="parallax_wave parallax_wave_3"></div>
</li>
<li></li>
<li>
    <div class="parallax_wave parallax_wave_4"></div>
</li>
<li>
    <div class="parallax_wave parallax_wave_5"></div>
</li>
<li>
    <div class="parallax_wave parallax_wave_6"></div>
</li>
```

14. в файле index.html в пропущенном li маяк

```html
<li>
    <div class="parallax_litehouse"></div>
</li>
```

15. в файле style.css добавляем классы из файла html

```css
.page {}

.parallax {}

.parallax_list {}

.parallax_bg {}

.parallax_rope {}
.parallax_rope_1 {}
.parallax_rope_2 {}
.parallax_rope_3 {}

.parallax_element {}
.parallax_element_1 {}
.parallax_element_2 {}
.parallax_element_3 {}
.parallax_element_4 {}
.parallax_element_5 {}
.parallax_element_6 {}
.parallax_element_7 {}
.parallax_element_8 {}

.parallax_wave {}
.parallax_wave_1 {}
.parallax_wave_2 {}
.parallax_wave_3 {}
.parallax_wave_4 {}
.parallax_wave_5 {}
.parallax_wave_6 {}
```

16. в файле style.css заполняем стили для удобной демонстрации

```css
html,body{
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background-color: #000;
}
.wrapper{
    overflow: hidden; /* Чтобы скрыть все, что может вылезти за пределы экрана */
}
```

17. в файле style.css отображение страницы

```css
.page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-height: 360px; /* Чтобы при изменении экрана по высоте не было проблем */
}
```

18. в файле style.css отображение параллакса

```css
.parallax {
    flex: 1 0 100%; /* Разрешаем экрану в высоту увеличиваться, а уменьшаться запрещаем */
    position: relative;
    overflow: hidden;
}
```

19. в файле style.css параллакс после изменений

```css
.parallax:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%);
}
```

20. в файле style.css стилизуем список

```css
.parallax_list {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```

21. в файле style.css стилизуем задний фон с изображением

```css
.parallax_bg {
    position: absolute;
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
    background: url('/img/background.jpg') 50% 100% / cover no-repeat; /* Задний фон с изображением на весь экран */
}
```

22. в файле style.css стиль для каждого элемента

```css
.parallax_list li {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```

23. в файле style.css общий стиль для всех веревок

```css
.parallax_rope { /* Веревки - общий для всех стиль */
    position: absolute;
    width: 120%;
    left: -10%;
}
```

24. в файле style.css обратимся к картинке в каждой веревке

```css
.parallax_rope img {
    width: 100%;
}
```

25. в файле style.css обратимся к стилю каждой из веревок

```css
.parallax_rope_1 {
    top: 5%;
    transform: scale(1);
}
.parallax_rope_2 {
    top: -1.66667%;
    transform: scale(1.05556);
}
.parallax_rope_3 {
    top: -11.66667%;
    transform: scale(1.13889);
}
```

26. в файле style.css обращаемся ко всем элементам на веревках

```css
.parallax_element {
    position: absolute;
}
```

27. в файле style.css обращаемся к span в каждом элементе на веревках в созданном .parallax_element span

```css
.parallax_element span{
    display: inline-block;
    transform-origin: 50% 0; /* Чтобы изменить стиль анимации */
    width: 280px;
    height: 280px;
    margin: 0 0 0 -140px; /* Выводим span по середине */
    animation: swing 2s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955); /* Непрерывная альтернативная анимация */
}
```

28. в файле style.css развешиваем изображения (облака, птицы) на веревках

```css
.parallax_element_1 {
    top: 28%;
    left: 20%;
}
.parallax_element_1 span{
    background: url('/img/clouds/board-cloud-2.png') 0 0 / 100% no-repeat; /* Облако */
}

.parallax_element_2 {
    top: 46%;
    left: 40%;
}
.parallax_element_2 span {
    background: url('/img/clouds/board-cloud-1.png') 0 0 / 100% no-repeat; /* Облако */
}

.parallax_element_3 {
    top: 24%;
    left: 80%;
}
.parallax_element_3 span {
    background: url('/img/clouds/board-birds.png') 0 0 / 100% no-repeat; /* Птички */
}

.parallax_element_4 {
    top: 10%;
    left: 17%;
}
.parallax_element_4 span {
    background: url('/img/clouds/board-cloud-1.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_5 {
    top: 50%;
    left: 56%;
}
.parallax_element_5 span {
    background: url('/img/clouds/board-cloud-4.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_6 {
    top: 30%;
    left: 57%;
}
.parallax_element_6 span {
    background: url('/img/clouds/board-birds.png') 0 0 / 100% no-repeat; /* Птички */
}

.parallax_element_7 {
    top: 60%;
    left: 65%;
}
.parallax_element_7 span {
    background: url('/img/clouds/board-cloud-2.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_8 {
    top: 80%;
    left: 45%;
}
.parallax_element_8 span {
    background: url('/img/clouds/board-cloud-3.png') 0 0 / 100% no-repeat; /* Облака */
}
```

29. в файле style.css общий стиль волн

```css
.parallax_wave {
    position: absolute;
    background: url('/img/waves/wave-plain.png') 0 0 / auto 101% repeat-x;
    left: -100%;
    width: 300%;
}
```

30. в файле style.css стилизуем волны

```css
.parallax_wave_1 {
    bottom: 180px;
    height: 86px;
    animation: wave 7.11111s 0.1s infinite linear;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
}
.parallax_wave_2 {
    bottom: 144px;
    height: 115px;
    animation: wave 6.66667s 0.1s infinite linear;
}
.parallax_wave_3 {
    bottom: 108px;
    height: 144px;
    animation: wave 6.22222s 0.1s infinite linear;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
}
.parallax_wave_4 {
    animation: wave 5.77778s 0.1s infinite linear;
    bottom: 72px;
    height: 173px;
}
.parallax_wave_5 {
    animation: wave 4.8888s 0.1s infinite linear;
    bottom: -1px;
    height: 230px;
}
.parallax_wave_6 {
    animation: wave 4.5s 0.1s infinite linear;
    height: 288px;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
    bottom: -72px;
}
```

31. в файле style.css стилизуем маяк

```css
.parallax_litehouse {
    background: url('/img/lighthouse.png') 0 0 no-repeat;
    width: 320px;
    height: 560px;
    position: absolute;
    right: 12%;
    bottom: 50px;
    animation: lighthouse 4s 0.1s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955);
}
```

32. в файле style.css делаем анимацию облаков и птиц (swing)

```css
@keyframes swing { /* Движение птиц и облаков вправо влево */
    0%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(-10deg);
    }
}
```

33. в файле style.css делаем анимацию волн (wave)

```css
@keyframes wave { /* Движение волн по кругу */
    0%{
        transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    }
}
```

34. в файле style.css анимация маяка

```css
@keyframes lighthouse { /* Покачивание маяка */
    0%{
        transform: translate3d(15%,0,0) rotateZ(10deg);
    }
    100%{
        transform: translate3d(-15%,0,0) rotateZ(-10deg);
    }
}
```

35. в файле script.js для улучшения общей анимации (когда прогрузятся скрипты, то будут анимации)

```js
$(document).ready(function () {

    $('.wrapper').addClass('active');
});
```

36. в файле style.css в классе .wrapper вставляем стили

```css
opacity: 0;
transition: all 1.0s ease 0s;
```

37. в файле style.css создаем .wrapper.active - теперь можем применять стиль благодаря js скрипту

```css
.wrapper.active{
    opacity: 1;
}
```

38. в файле style.css настраиваем очередь загрузки анимации элементов согласно сценарию

```css
.wrapper.active .parallax_wave{ /* Можем постепенно показывать наши волны */
    opacity: 1;
    transition: all 1.0s ease 1.0s; /* Анимация с задержкой, т.к. у нас есть сценарий появления наших элементов */
}
.wrapper.active .parallax_rope { /* Очередь загрузки анимации веревки */
    opacity: 1;
    transition: all 1.0s ease 1.8s;
}
.wrapper.active .parallax_litehouse { /* Очередь загрузки анимации маяка */
    bottom: 130px;
    transition: all 0.8s ease 2.5s;
}
```

39. в файле style.css - возвращаемся к нашим элементам и меняем значения, чтобы изначально они были скрыты

.parallax_litehouse меняем значение bottom
```css
bottom: -100%; /* Было 50px, потом поменяли на -100%, чтобы маяка не было видно при загрузке */
```

.parallax_wave добавляем
```css
opacity: 0;
```

.parallax_rope добавляем
```css
opacity: 0;
```

40. в файле script.js обращаемся ко всему списку в $(document).ready(function ()

```js
$('.parallax_list>li').addClass('layer'); // Обращаемся ко всему списку li
$('.parallax_list').parallax(); // Анимация реагирует на движение мышкой
```

41. в файле index.html, уровень реакции на мышку

бэкграунд
```html
<li data-depth="0.10">
```
1 веревка
```html
<li data-depth="0.15">
```
2 веревка
```html
<li  data-depth="0.30">
```
3 веревка
```html
<li data-depth="0.60">
```
1 волна
```html
<li data-depth="0.30">
```
2 волна
```html
<li data-depth="0.40">
```
3 волна
```html
<li data-depth="0.50">
```
маяк
```html
<li data-depth="0.60">
```
4 волна
```html
<li data-depth="0.60">
```
5 волна
```html
<li data-depth="0.80">
```
6 волна
```html
<li data-depth="1.00">
```

42. в файле style.css у каждого элемента на веревке пишем реакцию на наведение курсора

```css
.parallax_rope_1 .parallax_element{
    transform: scale(0.6);
}
.parallax_rope_2 .parallax_element{
    transform: scale(0.75556);
}
.parallax_rope_3 .parallax_element{
    transform: scale(0.98889);
}
```

# Итог

1. файл style.css

```css
/* Обнуление */
*,*:before,*:after{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
/* Стили для демонстрации */
html,body{
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background-color: #000;
}
.wrapper{
    overflow: hidden; /* Чтобы скрыть все, что может вылезти за пределы экрана */
    opacity: 0;
    transition: all 1.0s ease 0s;
}
/* Основные стили */

.wrapper.active{
    opacity: 1;
}
.wrapper.active .parallax_wave{ /* Можем постепенно показывать наши волны */
    opacity: 1;
    transition: all 1.0s ease 1.0s; /* Анимация с задержкой, т.к. у нас есть сценарий появления наших элементов */
}
.wrapper.active .parallax_rope { /* Очередь загрузки анимации веревки */
    opacity: 1;
    transition: all 1.0s ease 1.8s;
}
.wrapper.active .parallax_litehouse { /* Очередь загрузки анимации маяка */
    bottom: 130px;
    transition: all 0.8s ease 2.5s;
}

.page {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    min-height: 360px; /* Чтобы при изменении экрана по высоте не было проблем */
}

.parallax {
    flex: 1 0 100%; /* Разрешаем экрану в высоту увеличиваться, а уменьшаться запрещаем */
    position: relative;
    overflow: hidden;
}
.parallax:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 60%);
}

.parallax_list {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.parallax_list li {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.parallax_bg {
    position: absolute;
    width: 110%;
    height: 110%;
    top: -5%;
    left: -5%;
    background: url('/img/background.jpg') 50% 100% / cover no-repeat; /* Задний фон с изображением на весь экран */
}

.parallax_rope { /* Веревки - общий для всех стиль */
    position: absolute;
    width: 120%;
    left: -10%;
    opacity: 0;
}
.parallax_rope img {
    width: 100%;
}

.parallax_rope_1 {
    top: 5%;
    transform: scale(1);
}
.parallax_rope_2 {
    top: -1.66667%;
    transform: scale(1.05556);
}
.parallax_rope_3 {
    top: -11.66667%;
    transform: scale(1.13889);
}

.parallax_rope_1 .parallax_element{
    transform: scale(0.6);
}
.parallax_rope_2 .parallax_element{
    transform: scale(0.75556);
}
.parallax_rope_3 .parallax_element{
    transform: scale(0.98889);
}

.parallax_element {
    position: absolute;
}
.parallax_element span{
    display: inline-block;
    transform-origin: 50% 0; /* Чтобы изменить стиль анимации */
    width: 280px;
    height: 280px;
    margin: 0 0 0 -140px; /* Выводим span по середине */
    animation: swing 2s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955); /* Непрерывная альтернативная анимация */
}

.parallax_element_1 {
    top: 28%;
    left: 20%;
}
.parallax_element_1 span{
    background: url('/img/clouds/board-cloud-2.png') 0 0 / 100% no-repeat; /* Облако */
}

.parallax_element_2 {
    top: 46%;
    left: 40%;
}
.parallax_element_2 span {
    background: url('/img/clouds/board-cloud-1.png') 0 0 / 100% no-repeat; /* Облако */
}

.parallax_element_3 {
    top: 24%;
    left: 80%;
}
.parallax_element_3 span {
    background: url('/img/clouds/board-birds.png') 0 0 / 100% no-repeat; /* Птички */
}

.parallax_element_4 {
    top: 10%;
    left: 17%;
}
.parallax_element_4 span {
    background: url('/img/clouds/board-cloud-1.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_5 {
    top: 50%;
    left: 56%;
}
.parallax_element_5 span {
    background: url('/img/clouds/board-cloud-4.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_6 {
    top: 30%;
    left: 57%;
}
.parallax_element_6 span {
    background: url('/img/clouds/board-birds.png') 0 0 / 100% no-repeat; /* Птички */
}

.parallax_element_7 {
    top: 60%;
    left: 65%;
}
.parallax_element_7 span {
    background: url('/img/clouds/board-cloud-2.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_element_8 {
    top: 80%;
    left: 45%;
}
.parallax_element_8 span {
    background: url('/img/clouds/board-cloud-3.png') 0 0 / 100% no-repeat; /* Облака */
}

.parallax_wave {
    position: absolute;
    background: url('/img/waves/wave-plain.png') 0 0 / auto 101% repeat-x;
    left: -100%;
    width: 300%;
    opacity: 0;
}

.parallax_wave_1 {
    bottom: 180px;
    height: 86px;
    animation: wave 7.11111s 0.1s infinite linear;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
}
.parallax_wave_2 {
    bottom: 144px;
    height: 115px;
    animation: wave 6.66667s 0.1s infinite linear;
}
.parallax_wave_3 {
    bottom: 108px;
    height: 144px;
    animation: wave 6.22222s 0.1s infinite linear;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
}
.parallax_wave_4 {
    animation: wave 5.77778s 0.1s infinite linear;
    bottom: 72px;
    height: 173px;
}
.parallax_wave_5 {
    animation: wave 4.8888s 0.1s infinite linear;
    bottom: -1px;
    height: 230px;
}
.parallax_wave_6 {
    animation: wave 4.5s 0.1s infinite linear;
    height: 288px;
    background: url('/img/waves/wave-paint.png') 0 0 / auto 101% repeat-x;
    bottom: -72px;
}

.parallax_litehouse {
    background: url('/img/lighthouse.png') 0 0 no-repeat;
    width: 320px;
    height: 560px;
    position: absolute;
    right: 12%;
    bottom: -100%; /* Было 50px, потом поменяли на -100%, чтобы маяка не было видно при загрузке */
    animation: lighthouse 4s 0.1s infinite alternate cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.content {}

@keyframes swing { /* Движение птиц и облаков вправо влево */
    0%{
        transform: rotate(10deg);
    }
    100%{
        transform: rotate(-10deg);
    }
}

@keyframes wave { /* Движение волн по кругу */
    0%{
        transform: rotateZ(0deg) translate3d(0,10%,0) rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg) translate3d(0,10%,0) rotateZ(-360deg);
    }
}

@keyframes lighthouse { /* Покачивание маяка */
    0%{
        transform: translate3d(15%,0,0) rotateZ(10deg);
    }
    100%{
        transform: translate3d(-15%,0,0) rotateZ(-10deg);
    }
}
```

![2024-12-31_14-25-13](https://github.com/user-attachments/assets/8ad0ba4b-c4b5-4379-b57a-25550ed6f65c)
![2024-12-31_14-25-32](https://github.com/user-attachments/assets/315817bf-38c4-41da-8853-eacb6bd1c867)
![2024-12-31_14-25-47](https://github.com/user-attachments/assets/d3bf654a-b08c-47eb-873b-20b9145452b3)
![2024-12-31_14-26-02](https://github.com/user-attachments/assets/098cd8d3-cb64-466d-9ebe-c30df4291016)
![2024-12-31_14-26-18](https://github.com/user-attachments/assets/0b9b8168-fcf6-4353-ac4a-b574d4cf01b0)
![2024-12-31_14-26-29](https://github.com/user-attachments/assets/c4d50c73-a692-47ca-9cb5-02d6b91a87ed)


2. файл index.html

```html
<!-- Сообщаем браузеру, как стоит обрабатывать эту страницу -->
<!DOCTYPE html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных (не отображается) -->
<head>
    <!-- Заголовок страницы в браузере -->
    <title>Параллакс-эффект Matthew Wagerfield</title>
    <!-- Подключаем CSS -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Кодировка страницы -->
    <meta charset="utf-8">
    <!-- Адаптив -->
    <meta name="viewport" content="width=device-width">
</head>
<!-- Отображаемое тело страницы -->
<body>
<!-- Оболочка для демонстрации -->
<div class="wrapper">
    <!-- Контент -->
    <div class="page">
        <div class="parallax">
            <ul class="parallax_list">
                <li data-depth="0.10">
                    <!-- Уровень реакции на мышку -->
                    <div class="parallax_bg"></div>
                </li>
                <li data-depth="0.15">
                    <div class="parallax_rope parallax_rope_1">
                        <div class="parallax_element parallax_element_1"><span></span></div>
                        <div class="parallax_element parallax_element_2"><span></span></div>
                        <div class="parallax_element parallax_element_3"><span></span></div>
                        <img src="img/rope.png" alt="">
                    </div>
                </li>
                <li  data-depth="0.30">
                    <div class="parallax_rope parallax_rope_2">
                        <div class="parallax_element parallax_element_4"><span></span></div>
                        <div class="parallax_element parallax_element_5"><span></span></div>
                        <img src="img/rope.png" alt="">
                    </div>
                </li>
                <li data-depth="0.60">
                    <div class="parallax_rope parallax_rope_3">
                        <div class="parallax_element parallax_element_6"><span></span></div>
                        <div class="parallax_element parallax_element_7"><span></span></div>
                        <div class="parallax_element parallax_element_8"><span></span></div>
                        <img src="img/rope.png" alt="">
                    </div>
                </li>
                <li data-depth="0.30">
                    <div class="parallax_wave parallax_wave_1"></div>
                </li>
                <li data-depth="0.40">
                    <div class="parallax_wave parallax_wave_2"></div>
                </li>
                <li data-depth="0.50">
                    <div class="parallax_wave parallax_wave_3"></div>
                </li>
                <li data-depth="0.60">
                    <div class="parallax_litehouse"></div>
                </li>
                <li data-depth="0.60">
                    <div class="parallax_wave parallax_wave_4"></div>
                </li>
                <li data-depth="0.80">
                    <div class="parallax_wave parallax_wave_5"></div>
                </li>
                <li data-depth="1.00">
                    <div class="parallax_wave parallax_wave_6"></div>
                </li>
            </ul>
        </div>
        <div class="content"></div>
    </div>
    <!-- Подключаем jQuery -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <!-- Подключаем файл JS скриптов -->
    <script src="js/jquery.parallax.js"></script>
    <script src="js/script.js"></script>
</div>
    <!-- Подключаем файл изображений для успешного отображения на GitHub, все, кроме веревок (rope) -->
    <img id="background" src="img/background.jpg">
    <img id="lighthouse" src="img/lighthouse.png">
    <img id="rope" src="img/rope.png">
    <img id="board-birds" src="img/clouds/board-birds.png">
    <img id="board-cloud-1" src="img/clouds/board-cloud-1.png">
    <img id="board-cloud-2" src="img/clouds/board-cloud-2.png">
    <img id="board-cloud-3" src="img/clouds/board-cloud-3.png">
    <img id="board-cloud-4" src="img/clouds/board-cloud-4.png">
    <img id="wave-paint" src="img/waves/wave-paint.png">
    <img id="wave-plain" src="img/waves/wave-plain.png">
</body>
</html>
```

![2024-12-31_14-24-07](https://github.com/user-attachments/assets/d3d30535-acfc-4a32-bc58-523cc2d7021c)
![2024-12-31_14-24-19](https://github.com/user-attachments/assets/5d34fb88-b3a2-4ab9-b789-2b1ee6ae6b95)


3. файл script.js

```js
$(document).ready(function () {
    $('.parallax_list>li').addClass('layer'); // Обращаемся ко всему списку li
    $('.parallax_list').parallax(); // Анимация реагирует на движение мышкой

    $('.wrapper').addClass('active');
});
```

![2024-12-31_14-26-56](https://github.com/user-attachments/assets/9772aca3-cf83-41c0-b89f-32a100fad235)
