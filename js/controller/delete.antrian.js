function deleteData(IDHAPUS) {
    var antrianId = IDHAPUS;
    var target_url = "https://dimasardnt6-ulbi.herokuapp.com/delete-antrian/" + antrianId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
    .then(response => response.json())
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Data berhasil dihapus',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        location.reload();
      });
    })
    .catch(error => console.log('Error:', error));
}