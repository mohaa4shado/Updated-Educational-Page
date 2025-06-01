// Update current date
function updateDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = date.toLocaleDateString('ar-SA', options);
}

// Countdown Timer
function updateCountdown() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    
    function update() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        const units = document.querySelectorAll('#countdown .timer-unit');
        units[0].textContent = seconds.toString().padStart(2, '0');
        units[1].textContent = minutes.toString().padStart(2, '0');
        units[2].textContent = hours.toString().padStart(2, '0');
        units[3].textContent = days.toString().padStart(2, '0');
    }
    
    update();
    setInterval(update, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateDate();
    updateCountdown();
});

document.getElementById('toggle-mode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  // تغيير الأيقونة حسب الوضع
  const icon = this.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});