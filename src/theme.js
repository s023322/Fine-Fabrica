if (localStorage.theme == 'dark') {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    document.getElementById('mode').innerHTML = "light_mode"
}
else {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
    document.getElementById('mode').innerHTML = "dark_mode"
}


function mode() {
    if (localStorage.theme == 'light') {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        document.getElementById('mode').innerHTML = "light_mode"
        console.log(localStorage.theme)
    }
    else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        document.getElementById('mode').innerHTML = "dark_mode"
        console.log(localStorage.theme)
    }
}