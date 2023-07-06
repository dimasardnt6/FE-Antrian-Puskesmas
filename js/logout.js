document.getElementById("logoutButton").addEventListener("click", logout);

// Fungsi untuk logout
function logout() {
    // Menampilkan Sweet Alert konfirmasi
    Swal.fire({
        icon: 'question',
        title: 'Konfirmasi',
        text: 'Apakah Anda yakin ingin logout?',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Menghapus token dari local storage atau cookie
            localStorage.removeItem('token'); // Jika menggunakan local storage
            localStorage.removeItem('previousPageURL'); // Jika menggunakan local storage
            // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Jika menggunakan cookie

            // Redirect atau lakukan tindakan lain setelah logout
            const currentPath = window.location.pathname.split("/").pop();
              if (currentPath === "index.html") {
                window.location.href = "sign-in.html";
              } else if (currentPath === "antrian.html") {
                window.location.href = "index.html";
              } else {
                window.location.href = "../sign-in.html";
              }
        }
    });
}
