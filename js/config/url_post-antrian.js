export let urlPOST = "https://dimasardnt6-ulbi.herokuapp.com/ins-antrian"

export function AmbilResponse(result) {
    console.log(result); //menampilkan response API pada console
    alert(result.message); //menampilkan response API pada alert
    window.location.href = "tabel-antrian.html";
}