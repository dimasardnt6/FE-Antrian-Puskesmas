// // Fetch data jurusan from the API for Pilih Jurusan
// fetch("https://dimasardnt6-ulbi.herokuapp.com/all-poliklinik")
//   .then((response) => response.json())
//   .then((data) => {
//     const poliDropdown = document.getElementById("kode_poliklinik");

//     // Generate options for each data item
//     data.forEach((item) => {
//       const option = document.createElement("option");
//       option.value = item._id;
//       option.text = item.kode_poliklinik;
//       poliDropdown.appendChild(option);
//     });
//   })
//   .catch((error) => console.log(error));
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-poliklinik")
  .then((response) => response.json())
  .then((data) => {
    const poliDropdown = document.getElementById("kode_poliklinik");
    const namaPoliInput = document.getElementById("nama_poliklinik");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.kode_poliklinik;
      poliDropdown.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    poliDropdown.addEventListener("change", () => {
      const selectedId = poliDropdown.value;
      const selectedPoli = data.find((item) => item._id === selectedId);

      if (selectedPoli) {
        namaPoliInput.value = selectedPoli.nama_poliklinik;
      } else {
        namaPoliInput.value = "";
      }
    });
  })
  .catch((error) => console.log(error));
