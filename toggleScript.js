
function copyCode(id, copyButton) {
    let code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = "Copied! ✅";
        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}



document.getElementById("toggleButton").addEventListener("click", function() {
let box = document.getElementById("box");
if (box.style.display === "none" || box.style.display === "") {
box.style.display = "block";
this.textContent = "Hide box";
} else {
box.style.display = "none";
this.textContent = "Show Box";
}
});
