const urlParams = new URLSearchParams(window.location.search);
const dokterId = urlParams.get('dokterId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-dokter/" + dokterId;

export function AmbilResponse(result) {
    console.log(result);
    alert(result.message);
    window.location.href = "tabel-dokter.html";
}