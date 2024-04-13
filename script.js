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

function school(){
    window.open('https://teams.microsoft.com/_?culture=en-us&country=us#/school/teams-grid/General?ctx=teamsGrid')
    window.open('https://studentportal-mhric.eschooldata.com/RedHookCSD')
    window.open('https://www.redhookcentralschools.org/Domain/51')
    window.open('https://www.office.com/?auth=2')
}
window.school = school;

function leisure(){
    window.open('https://www.depop.com')
    window.open('https://www.pinterest.com/')
    window.open('https://www.chess.com/home')
    window.open('https://www.grailed.com/')
}
window.leisure = leisure;

function books(){
    window.open('https://libgen.li/')
    window.open('https://archive.org/')
}
window.books = books

function security(){
    window.open('https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/');
    window.open('https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/')
    window.open('https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search');
    window.open('https://addons.mozilla.org/en-US/firefox/addon/smart-https-revived/')
}
//This is just a test
window.security = security;