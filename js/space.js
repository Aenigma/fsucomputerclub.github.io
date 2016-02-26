(function() {
  if (!window.location.hash.substring(1)) {
    return;
  }
  var voices = [];
  speechSynthesis.onvoiceschanged = function() {
    voices = speechSynthesis.getVoices();
    console.log(voices);
  }

  var msg = new SpeechSynthesisUtterance();

  msg.text = window.location.hash.substring(1);
  msg.onend = function() {
    var voice = voices[Math.floor(Math.random() * voices.length)];
    msg.voice = voice;
    speechSynthesis.speak(msg);
  }

  msg.onend();
})();
