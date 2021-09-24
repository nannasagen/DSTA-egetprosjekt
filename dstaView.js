show()
function show(){
html = `

<div class="day">

<button class="dayTab" onclick="seeDay('Mandag')">Mandag</button>
<button class="dayTab" onclick="seeDay('Tirsdag')">Tirsdag</button>
<button class="dayTab" onclick="seeDay('Onsdag')">Onsdag</button>
<button class="dayTab" onclick="seeDay('Torsdag')">Torsdag</button>
<button class="dayTab" onclick="seeDay('Fredag')">Fredag</button>
<button class="dayTab" onclick="seeDay('Lørdag')">Lørdag</button>
<button class="dayTab" onclick="seeDay('Søndag')">Søndag</button>

</div>


<div id="Mandag" class"dayContent">
<h3>${model.currentDay}</h3>
<p>Dato når du sto opp:</p> <input type="date" value="${model.inputfelter.Dato || ''}" oninput="model.inputfelter.Dato = this.value;"/> <br>
<p>Når la du deg?</p> <input type="time" value="${model.inputfelter.Leggetid || ''}" oninput="model.inputfelter.Leggetid = this.value; calculateSleepTime()"/> <br>
<p>Når stod du opp?</p> <input type="time" value="${model.inputfelter.StåttOpp || ''}" oninput="model.inputfelter.StåttOpp = this.value; calculateSleepTime()"/> <br>
<p>Hvor godt sov du?</p>   
 ${selectView()}
<p>Timer søvn totalt: ${model.kalkulertVerdi.timerSøvnTotalt}<p/> 
</div>
<button onclick="makeObject()">Registrer timer</button>
<button onclick="registerAgain(${model.inputfelter.Dato})">Endre registrering</button>


<div id="weeklyRecap">
<h3>Gjennomsnitt for den siste uken:</h3>
<p>Timer søvn</p> <br>
<p>Søvn kvalitet:</p> <br>
</div>

<div id="overAllStats">
<h3>Fremgang den siste måneden:</h3>
</div>
`
document.getElementById("app").innerHTML = html
}
function selectView(){
    let html = ''
    let valgt = ''

    html = ` 
    
    <select value="${model.inputfelter.SøvnKvalitet}" onchange="model.inputfelter.SøvnKvalitet = this.value; calculateSleepTime()" >
    <option ${model.inputfelter.SøvnKvalitet == "Fikk ikke sove" ? "selected" : ''}>Fikk ikke sove</option>
    <option ${model.inputfelter.SøvnKvalitet == "Dårlig" ? "selected" : ''}>Dårlig</option>
    <option ${model.inputfelter.SøvnKvalitet == "Helt greit" ? "selected" : ''}>Helt greit</option>
    <option ${model.inputfelter.SøvnKvalitet == "Bra" ? "selected" : ''}>Bra</option>
    <option ${model.inputfelter.SøvnKvalitet == "Kjempebra" ? "selected" : ''}>Kjempebra</option>
    </select>          
    `
    return html
}


// Finn ut av en måte å legge dagene i tabs.
//Finn ut av hvordan koden kan lagre data som blir skrevet inn, selv når man ser på en annen dag.
//Lage en funksjon som tegner opp dagene man trykker på ut i fra id i model.