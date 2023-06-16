function deleteData(IDHAPUS) {
    var antrianId = IDHAPUS;
    var target_url = "https://dimasardnt6-ulbi.herokuapp.com/delete-antrian/" + antrianId;

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