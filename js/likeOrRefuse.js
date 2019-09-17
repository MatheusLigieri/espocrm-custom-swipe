var aceita = document.querySelector('#aceita');
var recusa = document.querySelector('#recusa');
var leadQuente = document.querySelector('#lead-quente');
var userId;
var aprovacao = []
var reprovacao = []
console.log('rola')
aceita.addEventListener('click', function () {
    aceitaLead();
});

recusa.addEventListener('click', function () {
    recusaLead()
});

leadQuente.addEventListener('click', function () {
    superAceita()
});

function aceitaLead() {
    aprovacao = JSON.stringify({
        "aprovacao": true
    });
    console.log('você aceitou esse lead');
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        }
    })
    xhr.send(aprovacao);
}

function recusaLead() {
    console.log('você rescusou esse lead')
    reprovacao = JSON.stringify({
        "repovacao": true
    });
    console.log('você aceitou esse lead');
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        }
    })
    xhr.send(reprovacao);
}

function superAceita() {
    console.log('você aceitou esse lead e o definiu como um lead quente!')
    aprovacao = JSON.stringify({
        "aprovacao": true
    });
    console.log('você aceitou esse lead');
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                console.log(this.responseText);
            }
        }
    })
    xhr.send(aprovacao);
}