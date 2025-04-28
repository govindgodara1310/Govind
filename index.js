let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newgamebtn = document.querySelector("#new_btn");
let msg = document.querySelector(".msg_container");
let msgtext = document.querySelector("#msg")

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turn0 == true){
            box.innerText = "X";
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;''
        }
        box.disabled = true;
        checkwinner();
    }
    );
});

const resetgame = () => {
    turn0 = true;
    enablebtns();
    msg.classList.add("hide")
}

const disablebtns = ()=> {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebtns = ()=> {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msgtext.innerText = `Congratulations, Winner is ${winner} .`
    msg.classList.remove("hide");
};



const checkwinner = () => {

    for (let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerHTML;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                showwinner(posval1);
            }
        }
    }
};
resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);
