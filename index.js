class memoryGame {
  constructor() {
      
      let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  
      console.log(randomNumber);
      
    }
}


// cada elemento de la tabla necesita un valor

const allSquares =  document.querySelectorAll(".square")
console.log(allSquares);

class Card {
    constructor(valor, elemento){
        this.valor = valor
        this.emelento = elemento
    }
}

allSquares.forEach((ditto)=>{
    console.log(new Card(ditto));
})

