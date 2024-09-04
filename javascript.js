const container = document.querySelector(".container");

const sketchpad = document.createElement("div");
sketchpad.classList.add("sketchpad");
container.appendChild(sketchpad);

function create_boxes(count){
    for (let i = 0; i <16; i++){
        const box = document.createElement("div");
        box.classList.add("box");
        sketchpad.appendChild(box);
    }
};

create_boxes();