if (localStorage.theme == 'dark') {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
    document.getElementById('theme_change').innerHTML = "light_mode";
}
else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
    document.getElementById('theme_change').innerHTML = "dark_mode";
}

function mode() {
    if (localStorage.theme == 'light' || !document.documentElement.classList.contains("dark")) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        document.getElementById('theme_change').innerHTML = "light_mode";
    }
    else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
        document.getElementById('theme_change').innerHTML = "dark_mode";
    }
}
