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

// Pasien 
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-pasien")
  .then((response) => response.json())
  .then((data) => {
    const pasienDropdown = document.getElementById("nama_pasien");
    const nomorktpInput = document.getElementById("nomor_ktp");
    const nomorteleponInput = document.getElementById("nomor_telepon");

    // Generate options for each data item
    data.forEach((item) => {
      const option = document.createElement("option");
      option.value = item._id;
      option.text = item.nama_pasien;
      pasienDropdown.appendChild(option);
    });

    // Event listener for polyclinic code dropdown change
    pasienDropdown.addEventListener("change", () => {
      const selectedId = pasienDropdown.value;
      const selectedPasien = data.find((item) => item._id === selectedId);

      if (selectedPasien) {
        nomorktpInput.value = selectedPasien.nomor_ktp;
        nomorteleponInput.value = selectedPasien.nomor_telepon;
      } else {
        nomorktpInput.value = "";
        nomorteleponInput.value = "";
      }
    });
  })
  .catch((error) => console.log(error));

