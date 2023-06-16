const urlParams = new URLSearchParams(window.location.search);
const pasienId = urlParams.get('pasienId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-pasien/" + pasienId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "tabel-pasien.html";
}