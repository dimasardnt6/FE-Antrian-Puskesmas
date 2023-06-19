import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-dokter.js";

async function getpoliData(poliklinikId) {
    // Fetch school data based on the ID (replace with your API endpoint)
    const response = await fetch(`https://dimasardnt6-ulbi.herokuapp.com/poliklinik/${poliklinikId}`);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch poliklinik data.");
    }
  }

function pushData(){

    let namadokterValue = getValue("nama_dokter");
    let spesialisasiValue = getValue("spesialisasi");
    let kodepoliValue = getValue("kode_poliklinik");
    let namapoliValue = getValue("nama_poliklinik");

    // form validation
        if (namadokterValue === "" && spesialisasiValue === "" && kodepoliValue === "" && namapoliValue === "") {
            Swal.fire({
            icon: 'error',
            title: 'Data tidak boleh kosong!',
            text: '',
            showConfirmButton: false,
            timer: 2000
            });
            return;
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
        
        if (spesialisasiValue === "") {
            Swal.fire({
            icon: 'error',
            title: 'Spesialisasi tidak boleh kosong!',
            text: '',
            showConfirmButton: false,
            timer: 2000
            });
            cek = false;
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

    // Ambil data sekolah dan data jurusan secara bersamaan
    Promise.all([getpoliData(kodepoliValue,namapoliValue)])
    .then(([poliData]) => {
        // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
        let kodepoliklinikText = poliData.kode_poliklinik;
        let namapoliklinikValue = poliData.nama_poliklinik;

        // Bangun objek data
        let data = {
            nama_dokter: namadokterValue,
            spesialisasi: spesialisasiValue,
            poli:{
                _id: kodepoliValue,
                kode_poliklinik: kodepoliklinikText,
                nama_poliklinik: namapoliklinikValue,
            },
        };
        console.log(data);
        postData(urlPOST, data, AmbilResponse);
    })
    .catch((error) => {
        console.error(error);
        document.getElementById("status").textContent = "Failed to fetch data.";
    });
    }

onClick("button", pushData);