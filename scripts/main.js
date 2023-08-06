let inp_as=document.getElementById('a_size')
let array_size=inp_as.value;
let inp_gen=document.getElementById("a_generate");
let inp_aspeed=document.getElementById("a_speed");

let btn_algo = document.querySelectorAll(".algos button");

let div_sizes=[];
let divs=[];
let margin_size;
let cont=document.getElementById("array_container");
cont.style="flex-direction:row";

const default_color = 'blue';
const comparing = 'yellow';
const incorrect = 'red';
const correct = 'turquoise';


//Creating Array divs

inp_gen.addEventListener("click",generate_array); 
inp_as.addEventListener("input",update_array_size);

function generate_array(){
    cont.innerHTML = "";
    for(let i=0;i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

for(let i=0;i<btn_algo.length;i++)
{
    btn_algo[i].addEventListener("click",runalgo);
}

function disable_btn(){
    for(let i=0;i<btn_algo.length;i++)
    {
        btn_algo[i].classList=[];
        btn_algo[i].classList.add("btn_locked");

        btn_algo[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function runalgo(){

    disable_btn();

    this.classList.add("btn_selected");
    switch(this.innerHTML){
        case "Bubble": Bubble();
                        break;
        case "Merge": Merge();
                        break;
        case "Quick": Quick();
                        break;
        case "Heap": Heap();
                        break;
        case "Selection": Selection_Sort();
                        break;
        case "Insertion": Insertion();
                        break;
    }


}