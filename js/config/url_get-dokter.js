//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const dokterId = urlParams.get('dokterId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/dokter/' + dokterId;