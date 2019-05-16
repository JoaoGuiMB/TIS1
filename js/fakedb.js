// declara um conjunto fake de dados para contatos
var dbfake = {
    "data": [
        {
            "id": 1,
            "nome": "Jaqueta Giacca",
            "email": "3",
            "telefone": "Roupa",
            "website": "R$ 8.500,00"
        },
        {
            "id": 2,
            "nome": "Tênis Rhyton",
            "email": "12",
            "telefone": "Calçado",
            "website": "R$ 3.860,00"
        },
        {
            "id": 3,
            "nome": "Pochete GG Supreme",
            "email": "37",
            "telefone": "Acessório",
            "website": "R$ 2.820,00"
        },
        {
            "id": 4,
            "nome": "Cinto GG Supreme",
            "email": "16",
            "telefone": "Acessório",
            "website": "R$ 1.500,00"
        },
        {
            "id": 5,
            "nome": "Calça jogging",
            "email": "7",
            "telefone": "Roupa",
            "website": "R$ 4.480,00"
        },
        {
            "id": 6,
            "nome": "Mocassim Horsebit",
            "email": "13",
            "telefone": "Calçado",
            "website": "R$ 3.860,00"
        },
        {
            "id": 7,
            "nome": "Mocassim 'Kingsnake'",
            "email": "7",
            "telefone": "Calçado",
            "website": "R$ 3.620,00"
        },
        {
            "id": 8,
            "nome": "Moletom Mouth",
            "email": "3",
            "telefone": "Roupa",
            "website": "R$ 4.100,00"
        },
        {
            "id": 9,
            "nome": "Carteira Yankees",
            "email": "42",
            "telefone": "Acessório",
            "website": "R$ 1.570,00"
        },
        {
            "id": 10,
            "nome": "Relógio G-Timeless",
            "email": "5",
            "telefone": "Acessório",
            "website": "R$ 4.650,00"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('db'));
if (!db) {
    db = dbfake
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email": contato.email,
        "telefone": contato.telefone,
        "website": contato.website
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
        db.data[index].email = contato.email,
        db.data[index].telefone = contato.telefone,
        db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db', JSON.stringify(db));
}