var checkinBody = []
function checkinOferta() {
    checkinBody = JSON.stringify({
        "status": "Held",
        "primeiraVisita": false,
        "segundaVisita": false,
        "tipodevisita": "Checkin Corretor (Oferta Ativa)",
        "corretorAtivoRoleta": false,
        "empreendimentosIds": [
            "5b55e7b4d7247984a"
        ],
        "assignedUserId": userId,
        "assignedUserName": userName,
        "empreendimentosNames": {
            "5b55e7b4d7247984a": "O Parque"
        }
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
    xhr.send(checkinBody)
}