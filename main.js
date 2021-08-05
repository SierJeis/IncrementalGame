var food = 0;
var wood = 0;
var stone = 0;

function gatherFood(){
    food += 1;
    document.querySelector("#food").innerHTML = "You Have " + food + " Food"
}

function chopWood(){
    wood +=1;
    document.querySelector("#wood").innerHTML = "You Have " + wood + " Wood"
}

function mineStone(){
    alert = ("You do not have a pickaxe.")
}