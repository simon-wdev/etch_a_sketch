const canvasBox = document.querySelector(".canvasBox")

function setCanvas(rows, columns){
    let rowCount = 0;
    while (rowCount < rows){
        for (let i = 0; i < columns; i++){
            const canvasItem = document.createElement("div");
            canvasItem.classList.add("canvasItem")
            canvasBox.appendChild(canvasItem);
        }
        rowCount++;
    }   
}

setCanvas(16, 16);