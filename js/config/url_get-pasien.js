//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const pasienId = urlParams.get('pasienId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/pasien/' + pasienId;