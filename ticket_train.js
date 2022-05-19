//chiedere all'utente nome e cognome
const userName = prompt ("Come ti chiami?")
const kmDaPercorrere =  prompt("Quanti km vuoi percorrere?")
const etaUtente = prompt("Quanti anni hai?")





let ticketPrice = 0.21 * kmDaPercorrere;

if (etaUtente < 18){
    /* applica sconto */
    ticketPrice = (ticketPrice - (ticketPrice * 0.2));
    
console.log("applico sconto", ticketPrice)
} else if (etaUtente > 65){
    /* applica sconto */
    ticketPrice = (ticketPrice - (ticketPrice * 0.4));
}


let divTicketPrice = document.getElementById("ticketPrice")

divTicketPrice.innerHTML = `<div>${ticketPrice}€</div>`
divTicketPrice.innerHTML = ticketPrice.toFixed(2)

console.log("ticketPrice", ticketPrice)