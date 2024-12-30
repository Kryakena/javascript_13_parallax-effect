$(document).ready(function () {
    $('.parallax_list>li').addClass('layer'); // Обращаемся ко всему списку li
    $('.parallax_list').parallax(); // Анимация реагирует на движение мышкой

    $('.wrapper').addClass('active');
});