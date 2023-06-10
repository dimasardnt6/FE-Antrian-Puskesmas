function deletePoli(IDHAPUS) {
    var poliklinikId = IDHAPUS;
    var target_url = "https://dimasardnt6-ulbi.herokuapp.com/delete-poliklinik/" + poliklinikId;

    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(target_url, requestOptions)
        .then(response => response.json())
        .then(result => {
            alert(result.message);
            location.reload();
        })
        .catch(error => console.log('Error:', error));
}