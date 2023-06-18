export let urlPOST = "https://dimasardnt6-ulbi.herokuapp.com/ins-antrian"

export function AmbilResponse(result) {
    console.log(result); // menampilkan response API pada console
    Swal.fire({
      icon: 'success',
      title: 'Data berhasil disimpan',
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