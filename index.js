function randomize(){

    var numberP1 = (Math.floor(Math.random() * 6)) + 1;
    var numberP2 = (Math.floor(Math.random() * 6)) + 1;

    if (localStorage.getItem("firstLoad") === "true"){

        pickWinner(numberP1, numberP2);

    }
    
    setDiceImage(numberP1, ".img1");
    setDiceImage(numberP2, ".img2");

    localStorage.setItem('firstLoad', 'true');

}

function pickWinner(numberP1, numberP2){

    var resultado = "";
    
    if (numberP1 === numberP2){
        resultado = "Empate! 🤝"
    }else if (numberP1 > numberP2){
        resultado = "🏁 Jogardor 1 venceu!"
    }else{
        resultado = "Jogardor 2 venceu! 🏁"
    }

    document.querySelector("h1").textContent = resultado;

}


function setDiceImage(number, classValue){

    element = document.querySelector(classValue); 

    switch(number){
        case 1: 
            element.setAttribute("src", "./images/dice1.png");
        break;
        case 2: 
           element.setAttribute("src", "./images/dice2.png");
        break;
        case 3: 
           element.setAttribute("src", "./images/dice3.png");
        break;
        case 4: 
           element.setAttribute("src", "./images/dice4.png");
        break;
        case 5: 
           element.setAttribute("src", "./images/dice5.png");
        break;
        case 6: 
           element.setAttribute("src", "./images/dice6.png");
        break;
    }

}

function reset(){
    localStorage.setItem('firstLoad', null);
    location.reload(true);
}

