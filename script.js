function showTab(tab) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}

// Default open
document.getElementById("home").style.display = "block";
