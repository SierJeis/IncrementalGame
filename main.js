var food = 0;
var wood = 0;
var stone = 0;
var pickaxe = 0;
var axe = 0;

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