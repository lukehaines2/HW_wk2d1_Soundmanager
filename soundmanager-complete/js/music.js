//Don't load until page is 100%
window.onload = function (){
  var clickPlay = document.getElementById('boxes');
  clickPlay.addEventListener('click', playSound);
}
debugger;
//array of phrases
var snippets = ['sounds/smell.mp3','sounds/forreal.mp3', 'sounds/bigup.mp3', 'sounds/love.mp3', 'sounds/checkdis.mp3', 'sounds/kfc.mp3', 'sounds/wicked.mp3', 'sounds/respect.mp3', 'sounds/smoke.mp3'];


// var snippets = this.getElementById('smell')
//     snippets = this.getElementById('forreal')
//     snippets = this.getElementById('bigup')
//     snippets = this.getElementById('love')
//     snippets = this.getElementById('checkdis')
//     snippets = this.getElementById('kfc')
//     snippets = this.getElementById('wicked')
//     snippets = this.getElementById('respect')
//     snippets = this.getElementById('smoke')


soundManager.setup({
  url: '/swf/',
  onready: function() {
  }
});
function playSound(){
  var snippets = mp3s[Math.floor(Math.random() * snippets.length)];  
  var mySound = soundManager.createSound({
    id: 'aSound',
  url: snippets
  });
  mySound.play(); 
}

// Change the image backgrounds
 function changeImage(element) {
         var right = "./images/alig2.jpg";
         var left = "./images/alig.jpg";
         element.src = element.bln ? right : left;
         element.bln = !element.bln;
     }
 
// var sounds = this.getElementById('sounds')

// var playSound(snippets, 'snippets')

// ( './sounds'+  +'.mp3')


box1.addEventListener('click', function() {
  mySound = soundManager.createSound({
    id: 'wicked',
    url: './sounds/wicked.mp3'
  });
      my.sound.play();
});