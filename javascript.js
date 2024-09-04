const container = document.querySelector(".container");

const sketchpad = document.createElement("div");
sketchpad.classList.add("sketchpad");
container.appendChild(sketchpad);

function create_boxes(count){
    for (let i = 0; i < Math.pow(count,2); i++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${get_width(count)}px`;
        sketchpad.appendChild(box);
    }
};

function get_width(count){
    return 900/count;
}

create_boxes(16);