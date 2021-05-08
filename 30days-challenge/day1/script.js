let keySet = {
    'a' : 'A', 's' : 'B', 'd' : 'C', 'f': 'D', 
    'g':'E', 'h': 'F', 'j':'G',
}

function playSound(event) {
    let obj = document.querySelector('div[data-key='+keySet[event.key]+']');
    //console.log(obj);
    if(!obj) return; //don't accept the key that isn't in the set
    let testSound = new Audio('audio/'+keySet[event.key]+'.mp3');
    testSound.play();
    obj.classList.add('playing');
}

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.note');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown',playSound);


