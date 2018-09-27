var ip = [prompt("Please enter and input")];
//var name2=["Waqar" , "Mehmood", "Junaid", "jbbar"];

for(var name in ip){

    if (ip[name].startsWith('j') || ip[name].startsWith('J'))
    {
        console.log("GoodBy "+ip[name]);
    }   
    else  {
    
        console.log("Hello "+ip[name]);
   }
   
}
/* 	*/

(function (window) {
	var helloSpeaker = {};
	var Hello = "Hello";
	helloSpeaker.speak = function (names) {
  console.log(Hello + " " + names);
}

window.helloSpeaker = helloSpeaker;
})(window);

(function (window) {

var speakWord = "Good Bye";
var byeSpeaker = {};
byeSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}

window.byeSpeaker = byeSpeaker;
})(window);

(function (window) {
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var i = 0; i < names.length; i++){
	  var firstLetter = names[i].charAt(0).toLowerCase();
       if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})(window);

console.log("------------------")
console.log(ip); 