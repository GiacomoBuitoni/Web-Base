let date  = new Date()
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
let hours
let minutes
let seconds

// while(true){
//     console.log(hours + ":" + minutes + ":" + seconds)  
// }
function runClock() {
    let date  = new Date()
    hours = date.getHours().toString()
    minutes = date.getMinutes().toString()
    seconds = date.getSeconds().toString()
    let coll = [hours, minutes, seconds]
    for(let i = 0; i < 3; i++){
        if(coll[i].length == 1){
            coll[i] = "0" + coll[i];
        }
    }
    hours = coll[0]
    minutes = coll[1]
    seconds = coll[2]
    

    document.getElementById("clock").innerHTML = hours + ':' + minutes + ":" + seconds
    
    
    
    setTimeout(runClock, 1000); // Run the loop every 1 second
}
runClock()
