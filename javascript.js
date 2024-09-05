const container = document.querySelector(".container");

const reset = document.createElement("button");
reset.classList.add("button");
reset.textContent = "Reset";
reset.addEventListener("click", start_over);
container.appendChild(reset);

const sketchpad = document.createElement("div");
sketchpad.classList.add("sketchpad");
container.appendChild(sketchpad);

function create_boxes(count){
    for (let i = 0; i < Math.pow(count,2); i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${get_width(count)}px`;
        box.addEventListener("mouseover", (hovered) => {box.classList.add("hovered")});
        sketchpad.appendChild(box);
    }
};

function get_width(count){
    return 800/count;
};

function start_over() {
    let input = Number(prompt("Please enter a number between 1 and 100 for the number of squares per side in the new grid."))
    while (sketchpad.hasChildNodes()){
        sketchpad.removeChild(sketchpad.firstChild);
    }
    if (Number.isInteger(input) && input > 0 && input < 101){
        create_boxes(input);
    }else{
        alert("That won't work");
    };
};

create_boxes(16)