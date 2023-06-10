//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const poliklinikId = urlParams.get('poliklinikId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/poliklinik/' + poliklinikId;