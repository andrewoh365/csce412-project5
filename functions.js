function toggleStyleSheet() {
    const el = document.getElementById("mainStyleSheet");
    const fileName = el.getAttribute("href");
    const newFileName = fileName === "style1.css" ? "style2.css" : "style1.css";
    el.setAttribute("href", newFileName);
    localStorage.setItem("filename", newFileName);
}

window.onload = function () {
    const fileName = localStorage.getItem("filename");
    const el = document.getElementById("mainStyleSheet");
    if (fileName) {
        el.setAttribute("href", fileName);
    }
};
