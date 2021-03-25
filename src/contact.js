let envoiFormulaire = document.getElementById("envoi");
const img_send = '<img class="img_send" src="images/send_email.png">';

function elementAnimate() {
    envoiFormulaire.animate([{
        transform: "translate(0%, 0)"
    }, {
        transform: "translate(50%, 0)"
    }],
    {
        duration: 500,
        iteration: 0,
        delay: 0,
        direction: 'normal',
        fill: 'forwards'
    });
}
function envoyer(event) {
    document.getElementById("envoi").innerHTML = "<p id=text_mail>Email envoyé!</p>" + img_send;
    elementAnimate();
    event.preventDefault();
}
