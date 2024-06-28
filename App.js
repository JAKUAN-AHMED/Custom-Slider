let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.slider .item');
    document.querySelector('.slider').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.slider .item');
    document.querySelector('.slider').prepend(items[items.length - 1]);
});
