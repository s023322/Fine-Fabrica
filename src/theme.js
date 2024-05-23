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

function openSearch() {
    document.getElementById("searchInput").classList.remove("hidden");
    document.getElementById("searchButton").classList.add("hidden");

    
document.getElementById("searchForm").addEventListener("keypress", function(e) {
    if (e.key == "Enter") {
        e.preventDefault();
        document.getElementById("search").click();
    }
});
}

function closeSearch() {
    document.getElementById("searchInput").classList.add("hidden");
    document.getElementById("searchButton").classList.remove("hidden");
}

function getText(data, s, src) {
    var subIndex = data.indexOf(s);

    if (subIndex === -1) {
        return null;
    }

    var start = Math.max(0, subIndex - 40);
    var end = Math.min(data.length, subIndex + s.length + 40);
    
    var output = data.slice(start, end);
    console.log(output);

    output = output.replace("\n", "");
    output = output.replace("  ", "");
    output = output.replace("<br>", "");
    output = output.replace(">", "");
    output = output.replace("<", "");
    output = src.replace("/pages/", "").replace(".html", "").toUpperCase() + " - ..." + output + "...";

    var newResult = document.createElement("a");
    newResult.href = src;
    newResult.innerHTML = output;

    document.getElementById("results").appendChild(newResult);
    document.getElementById("results").appendChild(document.createElement("br"));
}

function search() {
    var s = document.getElementById("searchForm").value;
    document.getElementById("results").innerHTML = "";
    console.log(s);
    fetch("/pages/about.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/about.html");
  });
    fetch("/pages/account.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/account.html");
  });
    fetch("/pages/calendar.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/calendar.html");
  });
    fetch("/pages/copyright-checklist.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/copyright-checklist.html");
  });
    fetch("/pages/index.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/index.html");
  });
    fetch("/pages/services.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/services.html");
  });
    fetch("/pages/work-log.html")
  .then((response) => response.text())
  .then((data) => {
    getText(data, s, "/pages/work-log.html");
  });
  setTimeout(function () {
  if (document.getElementById("results").innerHTML == "") {
    document.getElementById("results").innerHTML = "NO RESULTS FOUND";
  }
  }, 100)
}