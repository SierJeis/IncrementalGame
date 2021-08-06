var food = 0;
var wood = 0;
var stone = 0;
var pickaxe = 0;
var axe = 0;
var bunny = 0;
var money = 0;

function gatherFood(){
    food += 1;
    document.querySelector("#food").innerHTML = "You Have " + food + " Food"
}

function chopWood(){
    if(axe >= 1){
        wood +=1;
        document.querySelector("#wood").innerHTML = "You Have " + wood + " Wood"
    }
}

function mineStone(){
    if(pickaxe >= 1){
        stone += 1;
        document.querySelector("#stone").innerHTML = "You Have " + stone + " Stone";
    }
}

function visitMarket(){
    menu = switchMenu("marketplace");
    document.getElementsByClassName("marketplace")[0].style.display="block";
}

function switchMenu(menu){
    document.getElementsByClassName("main")[0].style.display="none";
}

function buyAxe(){
    axe = 1
    document.getElementById("axes").style.display="block";
}

function Return(){
    document.getElementsByClassName("marketplace")[0].style.display="none";
    document.getElementsByClassName("main")[0].style.display="block";
}

function buyPickaxe(){
    pickaxe = 1;
    document.getElementById("picks").style.display="block";
}

function bunnySlave(){
    if(food >= 30){
        food -= 30;
        bunny += 1;
        document.getElementById("slaves").innerHTML = "You Have " + bunny + " Bunnys"
    }
}

function checkInventory(){
    setInterval(() => {
        document.querySelector("#wood").innerHTML = "You Have "+wood+" Wood"
    },50)
    setInterval(() => {
        document.querySelector("#stone").innerHTML = "You Have "+stone+" Stone"
    },50)
    setInterval(() => {
        document.querySelector("#food").innerHTML = "You Have "+food+" Food"
    },50)
    setInterval(() => {
        document.querySelector("#slaves").innerHTML = "You Have "+bunny+" Bunnys"
    },50)
}