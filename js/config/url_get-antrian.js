//mendapatkan parameter dari url

const urlParams = new URLSearchParams(window.location.search);
const antrianId = urlParams.get('antrianId');

export let urlFetch = 'https://dimasardnt6-ulbi.herokuapp.com/antrian/' + antrianId;