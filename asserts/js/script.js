const mode = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('#theme-toggle i')
const userTheme = localStorage.getItem('color-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const toggleSound = document.getElementById('toggle-sound');
const html = document.documentElement;

if (userTheme == 'dark') {
    html.classList.add('dark');
    themeIcon.className = 'bxr  bx-sun ';
} else {
    html.classList.remove('dark');
    themeIcon.className = 'bxr  bx-moon text-black';

} 
mode.addEventListener('click', () => {
  toggleSound.currentTime = 0;
  toggleSound.play();
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
    themeIcon.className = 'bx bx-moon text-black';
    toggleSound.play();
  } else {
    html.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
    themeIcon.className = 'bx bx-sun';
    toggleSound.play();
    }
});