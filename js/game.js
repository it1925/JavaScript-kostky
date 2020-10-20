let throws = [];
let timer = false;
let h = 1;
button = document.getElementById("game");
dice = document.getElementById('cube');
result = document.getElementById('result')

function animation() {
    h = Math.ceil(Math.random() * 6);
    dice.src='img/kostka' + h + '.png';
}




button.addEventListener('click',
    function(){
        if (!timer) {
            sound();
            timer = setInterval(animation, 50);
            button.innerHTML = "STOP";
        }
        else {
            clearInterval (timer);
            timer = false;
            button.innerHTML = "PLAY";
            hod();
            
            console.log(throws);
        } 
        
    });

    

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

    throws.push(h);
    
    result.innerHTML = '<p>Hod: ' + h + '</p>';
    result.innerHTML += 
        '<p>Number of throws: ' + throws.length + '</p>';
    result.innerHTML += 
        '<p>Sum of throws: ' + suma(throws) + '</p>';
    result.innerHTML += 
        '<p>Avrage of throws: ' + average(suma(throws),throws.length) + '</p>';
    result.innerHTML += 
        '<p>Best throw: ' + maximum(throws) + '</p>';
    result.innerHTML += 
        '<p>Worst throw: ' + minimum(throws) + '</p>';
    return h;
}


function sound (){

        let sound = document.getElementById("pavel");
        sound.currentTime = 0;
        sound.play();
        window.setTimeout(function(){
            sound.pause();
        }, 4000);
}