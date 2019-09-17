var checkoutBody = []
var userId = localStorage.getItem('userId');
var userName = localStorage.getItem('userName');
function checkoutOferta() {
    checkoutBody = JSON.stringify({
        "status": "Held",
        "duration": 3600,
        "primeiraVisita": false,
        "segundaVisita": false,
        "tipodevisita": "Checkout Corretor (Oferta Ativa)",
        "corretorAtivoRoleta": false,
        "assignedUserId": userId,
        "assignedUserName": userName,
    })
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://mais.anupam.com.br/api/v1/Meeting');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ' + localStorage.getItem('espo-user-auth'))
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var data = JSON.parse(this.responseText);
                console.log(data);
                console.log('deu certo')
            } else {
                console.log('erro')
            }
        }
    })
    xhr.send(checkoutBody)
}