import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-antrian.js";

async function getpoliData(poliklinikId) {
    // Fetch school data based on the ID (replace with your API endpoint)
    const response = await fetch(`https://dimasardnt6-ulbi.herokuapp.com/poliklinik/${poliklinikId}`);
    if (response.ok) {
    return response.json();
    } else {
    throw new Error("Failed to fetch poliklinik data.");
    }
}

async function getpasienData(pasienId) {
    // Fetch school data based on the ID (replace with your API endpoint)
    const response = await fetch(`https://dimasardnt6-ulbi.herokuapp.com/pasien/${pasienId}`);
    if (response.ok) {
    return response.json();
    } else {
    throw new Error("Failed to fetch pasien data.");
    }
}

function pushData(){

    let kodepoliklinikValue = getValue("kode_poliklinik");
    let namapoliklinikValue = getValue("nama_poliklinik");
    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let nomorteleponValue = getValue("nomor_telepon");
    let statusantrianValue = getValue("status_antrian");

   // form validation
    if (kodepoliklinikValue === "" && namapoliklinikValue === "" && namapasienValue === "" && nomorktpValue === "" && statusantrianValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Data tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        return;
    }
    
    if (statusantrianValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Status Antrian tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }  

    Promise.all([getpoliData(kodepoliklinikValue,namapoliklinikValue), getpasienData(namapasienValue,nomorktpValue,nomorteleponValue)])
    .then(([poliData, pasienData]) => {
      // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
        let kodepoliText = poliData.kode_poliklinik;
        let namapoliValue = poliData.nama_poliklinik;

        let namapasienText = pasienData.nama_pasien;
        let noktpValue = pasienData.nomor_ktp;
        let noteleponValue = pasienData.nomor_telepon;
        let jeniskelaminValue = pasienData.jenis_kelamin;

        // Bangun objek data
        let data = {
            poli:{
                _id: kodepoliklinikValue,
                kode_poliklinik: kodepoliText,
                nama_poliklinik: namapoliValue,
            },
            identitas_pasien:{
                _id: namapasienValue,
                nama_pasien: namapasienText,
                nomor_ktp: noktpValue,
                nomor_telepon: noteleponValue,
                alamat: alamatValue,
            },
            status_antrian: statusantrianValue,
        };
        console.log(data);
        postData(urlPOST, data, AmbilResponse);
    })
    .catch((error) => {
    console.error(error);
    });
    }

onClick("buttonAntrian", pushData);