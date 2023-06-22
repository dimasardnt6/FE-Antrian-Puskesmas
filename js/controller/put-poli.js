import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-poli.js"

async function getdokterData(dokterId) {
    // Fetch school data based on the ID (replace with your API endpoint)
    const response = await fetch(`https://dimasardnt6-ulbi.herokuapp.com/dokter/${dokterId}`);
    if (response.ok) {
    return response.json();
    } else {
    throw new Error("Failed to fetch dokter data.");
    }
}

function pushData(){

    let kodepoliValue = getValue("kode_poliklinik");
    let namapoliValue = getValue("nama_poliklinik");
    let deskripsiValue = getValue("deskripsi");
    let namadokterValue = getValue("nama_dokter");
    let spesialisasiValue = getValue("spesialisasi");

     // form validation
     if (kodepoliValue === "" && namapoliValue === "" && deskripsiValue === "" && namadokterValue === "" && spesialisasiValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Data tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        return;
    }
    
    if (kodepoliValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Kode Poliklinik tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (namapoliValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Nama Poliklinik tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (deskripsiValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Deskripsi tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }

    if (namadokterValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Nama Dokter tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }      

    // Ambil data sekolah dan data jurusan secara bersamaan
    Promise.all([getdokterData(namadokterValue,spesialisasiValue)])
    .then(([dokterData]) => {
        // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
        let namadokterText = dokterData.nama_dokter;
        let spesialisasiValue = dokterData.spesialisasi;

        // Bangun objek data
        let data = {
            kode_poliklinik: kodepoliValue,
            nama_poliklinik: namapoliValue,
            deskripsi: deskripsiValue,
            dokter:{
                _id: namadokterValue,
                nama_dokter: namadokterText,
                spesialisasi: spesialisasiValue,
            },
        };
        console.log(data);
        putData(urlPUT, data, AmbilResponse);
    })
    .catch((error) => {
        console.error(error);
    });
    }

onClick("button", pushData);