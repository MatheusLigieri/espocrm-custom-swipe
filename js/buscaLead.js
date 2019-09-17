var nomeClass = document.querySelector('.nome');
var botao = document.querySelector('[data-toggle="modal"]')
var nomeId = document.querySelector('#TituloModalLongoExemplo');
var telefoneId = document.querySelector('#telefone');
var profissaoId = document.querySelector('#profissao');
var emailId = document.querySelector('#email');
var ids = new Array();
var idLead;
botao.addEventListener('click', function () {
    leadOfertaMais()
})

function checkinNaOferta() {
    
}

function leadOfertaMais() {
    console.log('em três segundos começa o primeiro request')
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://mais.anupam.com.br/api/v1/OfertaMais?select=salutationName%2CfirstName%2ClastName%2Cname%2CphoneNumber%2CphoneNumberData%2CemailAddressIsOptedOut%2CemailAddress%2CemailAddressData%2CrealEstatePropertyId%2CrealEstatePropertyName%2CassignedUserId%2CassignedUserName%2CleadScoring%2CcreatedAt&maxSize=20&offset=0&orderBy=createdAt&order=desc&where%5B0%5D%5Btype%5D=bool&where%5B0%5D%5Bvalue%5D%5B%5D=onlyMy');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorizathion', 'Basic ' + localStorage.getItem('espo-user-auth'))
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var data = this.responseText;
                var JSONdata = JSON.parse(data);
                // console.log(JSONdata.list)
                // console.log(JSONdata.list[0].id)
                ids.push(JSONdata.list[0].id)
                // for (var i = 0; i < JSONdata.list.length; i++) {
                //     console.log(i)
                //     var leadId = JSONdata.list[i].id
                //     ids.push(leadId);
                //     console.log(leadId)
                // }
            }
        }
    })
    xhr.send()
    setTimeout(function () {
        dadosLeadOfertaMais()
    }, 1000)
}
function dadosLeadOfertaMais() {
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://mais.anupam.com.br/api/v1/OfertaMais/' + ids[0]);
    xhr2.setRequestHeader('Content-Type', 'application/json');
    xhr2.setRequestHeader('Authorizathion', 'Basic ' + localStorage.getItem('espo-user-auth'));
    xhr2.addEventListener('readystatechange', function () {
        if (this.readyState === 4) {
            if (this.status == 200) {
                var JSONdata = JSON.parse(this.responseText);
                console.log(JSONdata);
                console.log(JSONdata.name);
                idLead = JSONdata.id;
                nomeId.textContent = JSONdata.name;
                emailId.textContent = JSONdata.emailAddress
                telefoneId.setAttribute('href', 'tel:5511' + JSONdata.phoneNumber)
                emailId.setAttribute('href', 'mailto:' + JSONdata.emailAddress)
                telefoneId.textContent = JSONdata.phoneNumber;
                profissaoId.textContent = JSONdata.title;
                telefoneId.setAttribute('href', 'tel:5511' + JSONdata.phoneNumber)
            }
        }
    })
    xhr2.send()
}