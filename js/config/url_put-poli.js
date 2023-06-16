const urlParams = new URLSearchParams(window.location.search);
const poliklinikId = urlParams.get('poliklinikId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-poliklinik/" + poliklinikId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "tabel-poliklinik.html";
}