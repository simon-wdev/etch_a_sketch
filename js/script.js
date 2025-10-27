const canvasBox = document.querySelector(".canvasBox")
canvasBox.style.display = "flex";

function setCanvas(){
    for (let i = 0; i < 16; i++){
        const canvasItem = document.createElement("div");
        canvasItem.style.border = "solid";
        canvasItem.style.width = "50px";
        canvasItem.style.height = "50px";
        canvasItem.classList.add("canvasItem")
        canvasBox.appendChild(canvasItem);
    }
}

setCanvas();