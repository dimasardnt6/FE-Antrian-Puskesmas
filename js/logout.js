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
        // document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Jika menggunakan cookie
        
        // Redirect atau lakukan tindakan lain setelah logout
        window.location.href = "../../build/sign-in.html"; // Misalnya, mengarahkan pengguna ke halaman login
      }
    });
  }
  