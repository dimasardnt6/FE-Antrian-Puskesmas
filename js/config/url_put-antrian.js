const urlParams = new URLSearchParams(window.location.search);
const antrianId = urlParams.get('antrianId');

export let urlPUT = "https://dimasardnt6-ulbi.herokuapp.com/upd-antrian/" + antrianId;

export function AmbilResponse(result) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: 'success',
      title: 'Data berhasil diubah',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = "tabel-antrian.html";
    });
  }
  
  // Menambahkan event listener pada tombol "Save"
  document.getElementById("button").addEventListener("click", function() {
    // Memanggil fungsi postData dengan callback AmbilResponse
    postData(urlPOST, data, AmbilResponse);
  });