

// cada elemento de la tabla necesita un valor

const allSquares =  document.querySelectorAll(".square")
console.log(allSquares);

class Card {
    constructor(value, elemento){
        this.value = value
        this.emelento = elemento
    }
}

let values = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

let cards = [];

allSquares.forEach((ditto)=>{


    const randomIndex = Math.floor(Math.random() * values.length)
    const randomValue = values[randomIndex];
    cards.push(new Card(randomValue, ditto));
    values.splice(randomIndex, 1)

    
})
console.log(cards);

//apuntando a documento HTML

let showMoves = document.getElementById('movimientos');
let showMatches = document.getElementById('aciertos');
let showTime = document.getElementById('t-restante');


//funcion principal 

let timer = false;
let flippedCards = 0;
let card1 = null;
let card2 = null;
let secondResult = null;
let firstResult = null;
let moves = 0;

function reveal(id){
    if( timer == false){
    timer = true;
}
    flippedCards++;

    if(flippedCards == 1){
        //mostrar primer numero
        card1 = document.getElementById(id);
        firstResult = cards[id].value;
        card1.innerHTML = firstResult;
        
        //deshabilitar primer boton

        card1.disabled = true;

    }else if(flippedCards == 2){
        //mostrar segundo numero
        card2 = document.getElementById(id);
        secondResult = cards[id].value;
        card2.innerHTML = secondResult;
        

        //deshabilitar segundo boton

        card2.disabled = true;

        //incrementar movimientos

        moves++;

        showMoves.innerHTML = `moves: ${moves}`;



        if(firstResult == secondResult){
            flippedCards = 0;
        }else {flippedCards = 0};
        
        //incrementar aciertos

        

    
    }
}
