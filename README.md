# Параллакс-эффект на сайте

Источник: видео "Параллакс анимация сайта Matthew Wagerfield (parallax.js) на CSS3 HTML jQuery // Как это сделать?" 
https://vk.com/im/convo/19460369?entrypoint=list_all&z=video-125918837_456239143%2F770e7f00fe8f3b6747

1. создаем создаем файлы index.html, style.css, script.js в папке проекта

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
    <link rel="stylesheet" href="style.css">
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
        <script src="script.js"></script>
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
<script src="jquery.parallax.js"></script>
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
        <img src="rope.png" alt="">
    </div>
</li>
```

11. в файле index.html в 3ем li - 2 веревочка - меняем только нумерацию и оставляем 2 элемента

```html
<li>
    <div class="parallax_rope parallax_rope_2">
        <div class="parallax_element parallax_element_4"><span></span></div>
        <div class="parallax_element parallax_element_5"><span></span></div>
        <img src="rope.png" alt="">
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
        <img src="rope.png" alt="">
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

16. в файле style.css 

```css

```