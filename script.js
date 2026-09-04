// DATI
function aggiornaRischio() {
    const p = parseInt(document.getElementById("sliderP").value);
    const d = parseInt(document.getElementById("sliderD").value);
    document.getElementById("valoreP").textContent = p;
    document.getElementById("valoreD").textContent = d;
    let testoP = "";
    if (p === 1) testoP = "Improbabile";
    if (p === 2) testoP = "Poco probabile";
    if (p === 3) testoP = "Probabile";
    if (p === 4) testoP = "Altamente probabile";
    document.getElementById("descrizioneP").textContent = testoP;
    let testoD = "";
    if (d === 1) testoD = "Lieve";
    if (d === 2) testoD = "Modesto";
    if (d === 3) testoD = "Grave";
    if (d === 4) testoD = "Gravissimo";
    document.getElementById("descrizioneD").textContent = testoD;
    const rischio = p * d;
    document.getElementById("valoreRischio").textContent = rischio;
    let testoR = "";
    if (rischio <= 2) testoR = "Rischio Basso.";
    else if (rischio <= 6) testoR = "Rischio Medio.";
    else if (rischio <= 9) testoR = "Rischio Alto.";
    else testoR = "Rischio Altissimo.";
    document.getElementById("descrizioneRischio").textContent = testoR;
}
// Risolto il bug della pagina FAQ
const sliderP = document.getElementById("sliderP");
const sliderD = document.getElementById("sliderD"); 
if (sliderP && sliderD) { 
    sliderP.addEventListener("input", aggiornaRischio);
    sliderD.addEventListener("input", aggiornaRischio);
    aggiornaRischio();
}
// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});
