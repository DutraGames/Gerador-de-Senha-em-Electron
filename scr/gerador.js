const pass = document.querySelector('#pass');
const newpass = document.querySelector('#newpass');

function gerarPass() {

    newpass.innerHTML = ''

    if (pass.value === ''){
        alert('Digite o tamanho de sua senha!');
        return;
    }

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_#&@$£€";
    let password = "";

    for (var i = 0, n = chars.length; i < pass.value; ++i) {
        password += chars.charAt( Math.floor(Math.random() * n));
    }

    console.log(password);

    let result = document.createTextNode(password);
    return newpass.appendChild(result);
};