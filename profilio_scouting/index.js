var name = document.getElementById('amodh').value;
var btn = document.getElementById('btn');
if (name === '') {
    btn.innerHTML = 'type message'
} else {
    btn.innerHTML = 'send'

}

function create_message() {
    window.location.href = 'https://api.whatsapp.com/send/?phone=%2B94712231939&text=Hellow+ I am ' + name + '%21&app_absent=0';

};