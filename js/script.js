
function criarQuadrado() {
    var boxElement = document.createElement("div");
    boxElement.style.width = 300;
    boxElement.style.height = 300;
    boxElement.style.display = "inline-block";
    boxElement.style.backgroundColor = "#32CD32";
    boxElement.addEventListener('mouseover', function () {
        var letters = "0123456789ABCDEF";
        var color = "#FF0000";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return this.style.background = color;
    });

    var container = document.getElementById("container");
    container.appendChild(boxElement);
}
