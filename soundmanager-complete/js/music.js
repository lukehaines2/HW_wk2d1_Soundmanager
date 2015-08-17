soundManager.setup({
  url: '/swf/',
  onready: function() {
    var mySound = soundManager.createSound({
      id: 'aSound',
      url: './sounds/respect.mp3'
    });
    mySound.play();
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});
