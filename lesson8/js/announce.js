function showAnnounce(){
    var today = new Date();
    if(today.getDay() == 5){
        document.getElementById("announce").style.display = "block";
    }
}