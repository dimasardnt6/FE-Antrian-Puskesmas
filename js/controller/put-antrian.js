import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-antrian.js";


function pushData(){

    let kodepoliklinikValue = getValue("kode_poliklinik");
    let namapoliklinikValue = getValue("nama_poliklinik");
    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let nomorteleponValue = getValue("nomor_telepon");
    let nomorantrianValue = parseInt(getValue("nomor_antrian"));
    let statusantrianValue = getValue("status_antrian");

   // Form validation
   if (kodepoliklinikValue === "" && namapoliklinikValue === "" && namapasienValue === "" && nomorktpValue === "" && nomorantrianValue === "" && statusantrianValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Data tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    return;
}

if (kodepoliklinikValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Kode Poliklinik tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    cek = false;
}

if (namapoliklinikValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Nama Poliklinik tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    cek = false;
}

if (namapasienValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Nama Pasien tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    cek = false;
}

if (nomorktpValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Nomor KTP tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    cek = false;
}

if (nomorantrianValue === "") {
    Swal.fire({
    icon: 'error',
    title: 'Nomor Antrian tidak boleh kosong!',
    text: '',
    showConfirmButton: false,
    timer: 2000
    });
    cek = false;
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

    let data = {
        poli :{
            kode_poliklinik: kodepoliklinikValue,
            nama_poliklinik: namapoliklinikValue,
        },
        identitas_pasien :{
            nama_pasien: namapasienValue,
            nomor_ktp: nomorktpValue, 
            nomor_telepon: nomorteleponValue, 
        },               
        nomor_antrian: nomorantrianValue,
        status_antrian: statusantrianValue
    };
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);