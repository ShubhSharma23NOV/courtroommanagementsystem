function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("dropdown");
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (!dropdown.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});
