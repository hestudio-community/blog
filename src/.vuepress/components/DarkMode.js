export async function DarkMode() {
    setInterval(() => {
        if (document.querySelector('html[data-theme="dark"]')) {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, 500);
}
