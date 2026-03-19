function showTab(tab) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "grid";
}

// Default tab
document.getElementById("home").style.display = "grid";
