(function (window) {
	var helloSpeaker = {};
	var Hello = "Hello";
	helloSpeaker.speak = function (names) {
  console.log(Hello + " " + names);
}

window.helloSpeaker = helloSpeaker;
})(window);
