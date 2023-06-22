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
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-dokter")
  .then((response) => response.json())
  .then((data) => {
    const dokterDropdown = document.getElementById("nama_dokter");
    const spesialisasiInput = document.getElementById("spesialisasi");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama_dokter;
      dokterDropdown.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    dokterDropdown.addEventListener("change", () => {
      const selectedId = dokterDropdown.value;
      const selectedDokter = data.find((item) => item._id === selectedId);

      if (selectedDokter) {
        spesialisasiInput.value = selectedDokter.spesialisasi;
      } else {
        spesialisasiInput.value = "";
      }
    });
  })
  .catch((error) => console.log(error));
