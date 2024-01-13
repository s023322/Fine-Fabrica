const theme = document.getElementById("theme");

fetch('/pages/constant.html')
    .then(response => response.text())
    .then(data => {
        theme.insertAdjacentHTML("beforebegin", data);
    });   

if (localStorage.theme == 'dark') {
    localStorage.theme = 'dark';
    document.documentElement.classList.add('dark');
}
else {
    localStorage.theme = 'light';
    document.documentElement.classList.remove('dark');
}

function checkLoaded() {
    if (!document.getElementById('theme_change')) {
        window.setTimeout(checkLoaded, 50);
    }
    else {

        if (localStorage.getItem('username') != 'null' && localStorage.getItem('pfp') != 'null') {
          document.getElementById("pfp").classList.remove('hidden');
          document.getElementById("pfp").classList.add('inline-block');
          document.getElementById("pfp").src = localStorage.getItem('pfp');
          document.getElementById("account").innerHTML = localStorage.getItem('username');
        }
        
        if (localStorage.theme == 'dark') {
            document.getElementById('theme_change').innerHTML = "light_mode";
        }
        else {
            document.getElementById('theme_change').innerHTML = "dark_mode";
        }
    }
}
checkLoaded();

console.log(localStorage.getItem('pfp'));
console.log(localStorage.getItem('username'));

/*template.innerHTML = `
<div class="bg-[#D1CFE2BF] dark:bg-[#001929BF]   fixed w-full h-12 overflow-hidden text-center   select-none">
    <ul class="list-none m-0 p-0 font-bold leading-[48px]">
        <li class="block md:hidden">
            <input type="checkbox" id="logo-input" class="absolute top-2 left-2 w-8 h-8 opacity-0" />
            <label id="menu" class="absolute pointer-events-none" for="input">
                <div id="sidebar" class="bg-lm-secondary dark:bg-dm-secondary">
                    <ul class="mt-12 space-y-4 pointer-events-auto">
                        <li class="w-min mx-auto">
                            <a href="/pages/index.html" class="block">HOME</a>
                        </li>
                        <li class="w-min mx-auto">
                            <a href="/pages/services.html" class="block">SERVICES</a>
                        </li>
                        <li class="w-min mx-auto">
                            <a href="/pages/calendar.html" class="block">CALENDAR</a>
                        </li>
                        <li class="w-min mx-auto">
                            <a href="/pages/about.html" class="block">ABOUT</a>
                        </li>
                        <li class="w-min mx-auto py-4 text-2xl leading-8">
                            <button id="mode" class="icon" type="button" onclick="mode()">light_mode</button>
                        </li>
                    </ul>
                </div>
            </label>
        </li>
        <img class="absolute float-left w-8 my-2 ml-2 mr-4 pointer-events-none" src="/src/fine fabrica.svg">

        <li class="float-right px-4">
            <a href="/pages/login.html">LOGIN</a>
        </li>
        <li class="float-right px-4">
            <div class="bg-main-red rounded-lg px-2 my-2 leading-8">
                <a href="/pages/index.html" class="text-lm-secondary dark:text-dm-secondary">
                    BECOME A MEMBER</a>
            </div>
        </li>

        <div class="ml-12 opacity-0 md:opacity-100 transition-opacity duration-100">
            <li class="float-left px-4">
                <a href="/pages/">HOME</a>
            </li>
            <li class="float-left px-4">
                <a href="/pages/services.html">SERVICES</a>
            </li>
            <li class="float-left px-4">
                <a href="/pages/calendar.html">CALENDAR</a>
            </li>
            <li class="float-left px-4">
                <a href="/pages/about.html">ABOUT</a>
            </li>
            <li class="float-right px-4">
                <button id="mode" class="icon" type="button" onclick="mode()">light_mode</button>
            </li>
        </div>
    </ul>
</div>
`
*/