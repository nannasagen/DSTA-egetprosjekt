function seeDay(day){
model.currentDay = day;
model.endreRegistrering = true;
show()
}

function makeObject(){
    let saveInfo = {};
    saveInfo.Dato = model.inputfelter.Dato
    saveInfo.Dag = model.currentDay
    saveInfo.Leggetid = model.inputfelter.Leggetid
    saveInfo.StåttOpp = model.inputfelter.StåttOpp
    saveInfo.SøvnKvalitet = model.inputfelter.SøvnKvalitet
    saveInfo.timerSøvnTotalt = model.kalkulertVerdi.timerSøvnTotalt
    saveInfo.id = model.idnummer
    model.endreRegistrering = checkIfDateExists();
    if(model.endreRegistrering == false) return;

    model.dailyStatus.push(saveInfo)
    model.idnummer += 1;
    //model.endreRegistrering = false;
 }

 function checkIfDateExists(){
     for (let i = 0; i < model.dailyStatus.length; i++){
         if(model.dailyStatus[i].Dato == model.inputfelter.Dato) return false;
     }
     return true;
 }

 function registerAgain(Dato){ 
     console.log(Dato)
    for (let i = 0; i < model.dailyStatus.length; i++){
        if(model.dailyStatus[i].Dato == Dato) {
            console.log("Hei")
            model.dailyStatus.slice(i)
            model.endreRegistrering = true
    }
 }
 }
 function calculateSleepTime(){
    let startTid1 = new Date()  
    let sluttTid1 = new Date()
    let startTid2 = model.inputfelter.Leggetid.split(":")
    let sluttTid2 = model.inputfelter.StåttOpp.split(":")
    let dag = -1

    if(startTid2[0] < sluttTid2[0]) dag = 0

    startTid1.setDate(startTid1.getDate()+dag)
    startTid1.setHours(startTid2[0], startTid2[1], 0)
    sluttTid1.setHours(sluttTid2[0], sluttTid2[1], 0)

    let tidIMilisekunder = sluttTid1 - startTid1
    let minutes = tidIMilisekunder / (1000*60)
    model.kalkulertVerdi.timerSøvnTotalt = timeConvert(minutes);

    show()
}

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return  rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    
 