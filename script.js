var 	ip = [prompt("Please enter and input")];
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


console.log("------------------")
console.log(ip); 