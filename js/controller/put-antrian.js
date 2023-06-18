import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-antrian.js";


function pushData(){

    let kodepoliklinikValue = getValue("kode_poliklinik");
    let namapoliklinikValue = getValue("nama_poliklinik");
    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let nomorantrianValue = parseInt(getValue("nomor_antrian"));
    let statusantrianValue = getValue("status_antrian");

   // Form validation
    if (kodepoliklinikValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Kode Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }
    if (namapoliklinikValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nama Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }
    if (namapasienValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nama Pasien tidak boleh kosong !</div>";
        cek = false;
    }
    if (nomorktpValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nomor KTP tidak boleh kosong !</div>";
        cek = false;
    }
    if (nomorantrianValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nomor Antrian tidak boleh kosong !</div>";
        cek = false;
    }
    if (statusantrianValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Status Antrian tidak boleh kosong !</div>";
        cek = false;
    }

    let data = {
        kode_poliklinik: kodepoliklinikValue,
        nama_poliklinik: namapoliklinikValue,
        nama_pasien: namapasienValue,
        nomor_ktp: nomorktpValue,                
        nomor_antrian: nomorantrianValue,
        status_antrian: statusantrianValue
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);