let hody = [];
let timer = false;
let h = 1;
//button = document.getElementById(game);

function animation() {
    h = Math.ceil(Math.random() * 6);
    document.getElementById('cube').src='img/kostka' + h + '.png';
}

document.getElementById('game').addEventListener('click',
    function(){
        if (!timer) {
            timer = setInterval(animation, 50);
            document.getElementById('game').innerHTML = "STOP";
        }
        else {
            clearInterval (timer);
            timer = false;
            document.getElementById('game').innerHTML = "PLAY";
            hod();
            console.log(hody);
        }
       
        
    }
);

function suma(cisla) {
    let sum = 0;
    cisla.forEach(function(value,index){
        sum += value;
    })
    return sum;
}

function maximum(cisla) {
    let max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    let min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function hod() {
    
    hody.push(h);
    
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Number of throws: ' + hody.length + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Sum of throws: ' + suma(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Avrage of throws: ' + average(suma(hody),hody.length) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Best throw: ' + maximum(hody) + '</p>';
    document.getElementById('result').innerHTML += 
        '<p>Worst throw: ' + minimum(hody) + '</p>';
    return h;
}