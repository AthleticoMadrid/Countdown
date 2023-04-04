// Находим действующие элементы на HTML-странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
// колесо загрузки
const countdown = document.querySelector('#countdown');
const loading = document.querySelector('#preloader');


// Делаем расчёты времени
// текущий год
const currentYear = new Date().getFullYear();  
// новый год 
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.innerText = currentYear + 1;

// функция для автоматического обновления счётчика обратного отсчёта
function updateCountdown() {
    // текущее время
    const currentTime = new Date(); 
    // до нового года в милисекундах
    const diff = nextYear - currentTime;    

    // дней осталось (округление в меньшую сторону)
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);    
    // часов осталось
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    // минут осталось
    const minutesleft = Math.floor(diff / 1000 / 60) % 60;
    // секунд осталось
    const secondsLeft = Math.floor(diff / 1000) % 60;

    // Устанавливаем расчёты времени в элементы на HTML-странице
    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesleft < 10 ? '0' + minutesleft : minutesleft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

updateCountdown();

// время автоматически меняется ежесекундно
setInterval(updateCountdown, 1000);

// скрывается загрузка и показывается отсчёт после обновления страницы
setTimeout(function() {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);