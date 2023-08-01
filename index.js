home_scoreEl=document.getElementById("home_scoreel")
guest_scoreEl=document.getElementById("guest_scoreel")


let home_sum=0
let guest_sum=0

function home_score(score){
    home_sum = home_sum + score
    home_scoreEl.textContent=home_sum
}

function guest_score(score){
    guest_sum = guest_sum + score
    guest_scoreEl.textContent=guest_sum
}

function clean_home_score(){
    home_sum=0
    home_score(0)
}

function clean_guest_score(){
    guest_sum=0
    guest_score(0)
}