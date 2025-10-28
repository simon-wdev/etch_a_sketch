const canvasBox = document.querySelector(".canvasBox");
const canvasItem = document.querySelector(".canvasItem")

let grid = 16;
let columns = grid;
let rows = grid;
setSize();


function setSize(){
    if (grid>100){
        alert("100 is max! Grid will be set to max.");
        setCanvas(100, 100);
    }else{
        let columns = grid;
        let rows = grid;
        getWidth(rows, columns);
        setCanvas(rows, columns);
    }
}

function getWidth(rows, columns){
    canvasBox.style.width = `${columns*25}px`; //box width/height multiplied by number of columns
    canvasBox.style.height = `${rows*25}px`;
}

function setCanvas(rows, columns){
    let rowCount = 0;
    while (rowCount < rows){    //mcreates the rows
        for (let i = 0; i < columns; i++){  //creates the columns
            const canvasItem = document.createElement("div");
            canvasItem.classList.add("canvasItem")
            canvasBox.appendChild(canvasItem);

                let color = ["red", "blanchedalmond", "lightgreen", "darkorchid", "darkseagreen", "firebrick", "lightcoral", "orange", "skyblue"];
                let randomColor = color[Math.floor(Math.random()* 9)]
                console.log(randomColor)
                canvasItem.addEventListener('mouseover', () =>{          
                    canvasItem.style.backgroundColor = `${randomColor}`;
                });
        }
        rowCount++;
    }   
}








