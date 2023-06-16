const urlParams = new URLSearchParams(window.location.search);
const antrianId = urlParams.get('antrianId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-antrian/" + antrianId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "tabel-antrian.html";
}