let date  = new Date()
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
let hours
let minutes
let seconds
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
    
    
    
    setTimeout(runClock, 1000);
}
runClock()

function appOpen(url){
    let box = document.getElementById("newWindow");
    if(box.checked){
        let windowFeatures = 'width=1000,height=1000'
        window.open(url, '_blank', windowFeatures)

    
    }
    else{
        window.open(url)
    }

}
window.appOpen = appOpen


