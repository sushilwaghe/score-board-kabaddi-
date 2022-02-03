function incA(){
    var score = parseInt(document.getElementById("scoreA").innerHTML);
    score++;
    document.getElementById("scoreA").innerHTML = score;
}
function incB(){
    var score = parseInt(document.getElementById("scoreB").innerHTML);
    score++;
    document.getElementById("scoreB").innerHTML = score;
}
function decA(){
    var score = parseInt(document.getElementById("scoreA").innerHTML);
    if(score > 0){
        score--;
    }
    document.getElementById("scoreA").innerHTML = score;
}
function decB(){
    var score = parseInt(document.getElementById("scoreB").innerHTML);
    if(score > 0){
        score--;
    }
    document.getElementById("scoreB").innerHTML = score;
}
