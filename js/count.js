// Count Pasien
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-pasien")
  .then(response => response.json())
  .then(data => {
    const count = data.length;
    const countText = document.getElementById("countPasien");
    countText.textContent = count;
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Count Antrian
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-antrian")
  .then(response => response.json())
  .then(data => {
    const count = data.length;
    const countText = document.getElementById("countAntrian");
    countText.textContent = count;
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Count Poliklinik
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-poliklinik")
  .then(response => response.json())
  .then(data => {
    const count = data.length;
    const countText = document.getElementById("countPoli");
    countText.textContent = count;
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Count Poliklinik
fetch("https://dimasardnt6-ulbi.herokuapp.com/all-dokter")
  .then(response => response.json())
  .then(data => {
    const count = data.length;
    const countText = document.getElementById("countDokter");
    countText.textContent = count;
  })
  .catch(error => {
    console.log("Error:", error);
  });
