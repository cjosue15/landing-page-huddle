const checkbox = document.querySelector('#checkbox');
const telefonoBlanco = document.querySelector('#ligth');
const telefononegro = document.querySelector('#dark');

checkbox.addEventListener('change', function (event) {
    localStorage.setItem('dark', event.target.checked);
    document.body.classList.toggle('is-dark-mode');
    telefonoBlanco.classList.toggle('luna');
    telefononegro.classList.toggle('dia');
});

function getLocalSorage() {
    if (localStorage.getItem('dark')) {
        const dark = localStorage.getItem('dark');
        if (dark === 'true') {
            checkbox.setAttribute('checked', true);
            document.body.classList.add('is-dark-mode');
            telefononegro.classList.add('dia');
            telefonoBlanco.classList.add('luna');
        }
    }
}

getLocalSorage();
