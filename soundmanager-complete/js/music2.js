var myPlayer = myPlayer || {}

myPlayer.setup = function() {
  this.playButton = document.getElementById('box1');
  this.playButton.setAttribute('data-state', 'stopped')
  this.playButton.addEventListener('click', myPlayer.playClickHandler.bind(this))
}

myPlayer.playClickHandler = function(e) {
  e.preventDefault();
  console.log(this);

  if(this.playButton.getAttribute('data-state') === 'playing') {
    this.pause();
  } else {
    this.play()
  }
}

myPlayer.play = function() {
  var sound = this.getSound()

  this.playButton = 

  if(this.playButton.getAttribute('data-state') === 'stopped') {
    // this.currentSound.play({onfinish: this.clearSound.bind(this)});
    this.currentSound.play();
  } else if(this.playButton.getAttribute('data-state') === 'paused') {
    this.currentSound.resume();
  } else {
    console.warn('myPlayer is in an unexpected state: ' + this.playButton.getAttribute('data-state'))
  }

  this.playButton.setAttribute('data-state', 'playing');
}

myPlayer.pause = function() {
  this.currentSound.pause();
  this.playButton.innerHTML = '&#9654'
  this.playButton.setAttribute('data-state', 'paused');
}

myPlayer.getSound = function() {
  if(!this.currentSound) {
    this.currentSound = soundManager.createSound({
      id: 'respect',
      url: './sounds/respect.mp3'
    });
  }
  return this.currentSound;
}

myPlayer.currentSound = null;

soundManager.setup({
  url: '/swf/',
  flashVersion: 9, // optional: shiny features (default = 8)
  // optional: ignore Flash where possible, use 100% HTML5 mode
  // preferFlash: false,
  onready: function() {
    myPlayer.setup().bind(myPlayer)
  }
});

function changeImage(element) {
         var right = "./images/alig.jpg";
         var left = "./images/alig2.jpg";
         element.src = element.bln ? right : left;
         element.bln = !element.bln;
     }