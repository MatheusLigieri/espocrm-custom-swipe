var aceita = document.querySelector('#aceita');
var recusa = document.querySelector('#recusa');
var leadQuente = document.querySelector('#lead-quente');
var userId;
var assignedUserId = []
console.log('rola')
aceita.addEventListener('click', function () {
    console.log('você aceitou esse lead');
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                assignedUserId = JSON.stringify({
                    "assignedUserId": userId
                });
            }
        }
    })
    xhr.send(assignedUserId);
});

recusa.addEventListener('click', function () {
    console.log('você rescusou esse lead')
    // var xhr = new XMLHttpRequest();
    // xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    // xhr.addEventListener('readystatechange', function () {
    //     if (this.readyState === 4) {
    //         if (this.status == 200) {
    //             assignedUserId = JSON.stringify({
    //                 "assignedUserId": userId
    //             });
    //         }
    //     }
    // })
    // xhr.send(assignedUserId);
});

leadQuente.addEventListener('click', function () {
    console.log('você aceitou esse lead e o definiu como um lead quente!')
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + idLead);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ZW51YmU6Y2Y0YWJjZDI5NDhjYTY2YzY4Yjg3YzdmNzVmOTRjMmU=');
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                assignedUserId = JSON.stringify({
                    "assignedUserId": userId
                });
            }
        }
    })
    xhr.send(assignedUserId);
    var xhr2 = new XMLHttpRequest();
    xhr2.open('POST', 'https://mais.anupam.com.br/api/v1/Opportunity');
    xhr2.setRequestHeader('Content-Type', 'application/json');
    xhr2.setRequestHeader('Authorizathion', 'Basic ' + localStorage.getItem('espo-user-auth'));
    xhr2.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                console.log('sucesso');
            }
        }
    })
    var oportunidade = JSON.stringify({
        "stage": "",
        "leadSource": "",
        "statusdeAtualizacao": "Atualizado",
        "statusDeOportunidade": "Quente",
        "buyerProfile": " ",
        "monthlyIncome": "  ",
        "assignedUserId": "1",
        "assignedUserName": userId,
        "probability": 10,
        "leadId": idLead,
    });
    xhr2.send(oportunidade);
});