//Sum of Resistors in Series
function sumResistance(values) {
    let sum = 0; 
    for (let i = 0; i < values.length; i++) { 
        sum +=  Math.abs(values[i]); 
    }
    return sum; 
}
console.log(sumResistance([-1,5,6,3]));
console.log(sumResistance([14,3.5,6]));
console.log(sumResistance([8,15,100]));

//Number divided into halves

function numDiv(num){
    let Div = num/2;
    let mitades = [];
    for(let i=0; i<2;i++){
    mitades.unshift(Div);
    }
    return mitades;
}

console.log(numDiv(4));
console.log(numDiv(150));

// Secret Society

function secretName(nombres){
    let societyName = "";
    for(let i = 0; i<nombres.length;i++){
        societyName += nombres[i][0];
        
    }
return societyName;
}

console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']))
/*Faltó que las letras estuvieran ordenadas alfabeticamente hay un metodo que lo ordenaría pero
al querer hacerlo con for e if no entiendo la lógica que se debería llevar*Y/

//Online Status*/

function onlineStatus(users){
    let list = ""; 
    for(let i = 0; i<users.length-1;i++){
        list += users[i] + ", ";   
    }
    return list + "and 1 more online"
}
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));

//Array of multiples 


function arrayOfMultiples(a , b){
    let arr = [];
    let x = 1;
    for (let i = 1; i <= b; i++) {
      arr.push(a * x);
      x++;
    }
    return arr;
  };
console.log(arrayOfMultiples(3,5))










