const toggle = document.querySelector('.toggle');
const mainCtr = document.querySelector('.main');

toggle.addEventListener('click', () => {
	mainCtr.classList.toggle('dark-mode-on');
	if (toggle.innerHTML === "🌖") {
		toggle.innerHTML = "🌒";
	} else {
		toggle.innerHTML = "🌖";
	}
});

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log(systemTheme);

if (systemTheme) {
	mainCtr.classList.add('dark-mode-on')
} else {
	mainCtr.classList.remove('dark-mode-on')
}