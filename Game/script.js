const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
document.addEventListener('keydown', function(event){
    jump()
})
function jump () {
    if (dino.classList !='jump') {
        dino.classList.add('jump')
    }
    setTimeout (function() {
        dino.classList.remove('jump')
    },300)
} 
let isAlive = setInterval( function()  {
    let dinoTop = parent (window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusleft = parent (window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusleft < 60 && cactusleft > 0 && dinoTop >=240) {
        alert ('Game over')
    }
}, 10);
