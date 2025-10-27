const canvasBox = document.querySelector(".canvasBox");
const canvasItem = document.querySelector(".canvasItem")


let grid = prompt("Whats your grid size?");
let columns = grid;
let rows = grid;
getWidth(rows, columns);
setCanvas(rows, columns);


function getWidth(rows, columns){
    canvasBox.style.width = `${columns*25}px`;
    canvasBox.style.height = `${rows*25}px`;
}

function setCanvas(rows, columns){
    let rowCount = 0;
    while (rowCount < rows){    //mcreates the rows
        for (let i = 0; i < columns; i++){  //creates the columns
            const canvasItem = document.createElement("div");
            canvasItem.classList.add("canvasItem")
            canvasBox.appendChild(canvasItem);

                canvasItem.addEventListener('mouseenter', () =>{
                    canvasItem.style.backgroundColor = "red";
                });

                canvasItem.addEventListener('mouseleave', () =>{
                    setTimeout(()=>{
                        canvasItem.style.backgroundColor = "";}, "800");
                    
                });
        }
        rowCount++;
    }   
}








