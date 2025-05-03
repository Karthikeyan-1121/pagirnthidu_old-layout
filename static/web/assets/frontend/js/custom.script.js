/* To Fix Header */
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const placeholder = document.createElement("div");
    const headerHeight = header.offsetHeight;

    placeholder.style.height = headerHeight + "px";
    placeholder.style.display = "none";
    header.parentNode.insertBefore(placeholder, header);

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            header.classList.add("fixed-header");
            placeholder.style.display = "block";
        } else {
            header.classList.remove("fixed-header");
            placeholder.style.display = "none";
        }
    });
});



