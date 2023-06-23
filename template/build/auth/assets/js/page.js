// JavaScript untuk mengatur transisi antar halaman form
const nextPageButton = document.getElementById('nextPage');
const prevPageButton = document.getElementById('prevPage');
const pages = document.getElementsByClassName('page');

let currentPage = 0;
showPage(currentPage);

nextPageButton.addEventListener('click', function () {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
});

prevPageButton.addEventListener('click', function () {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
});

function showPage(pageIndex) {
    // Menyembunyikan semua halaman
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    // Menampilkan halaman yang aktif
    pages[pageIndex].classList.add('active');
}
