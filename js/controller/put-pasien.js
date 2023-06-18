import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-pasien.js";


function pushData(){

    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let alamatValue = getValue("alamat");
    let nomorteleponValue = getValue("nomor_telepon");
    let tanggallahirValue = getValue("tanggal_lahir");
    let jeniskelaminValue = getValue("jenis_kelamin");

     // Form validation
    if (nomorktpValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nomor KTP tidak boleh kosong !</div>";
        cek = false;
    }
    if (alamatValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Alamat tidak boleh kosong !</div>";
        cek = false;
    }
    if (nomorteleponValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nomor Telepon tidak boleh kosong !</div>";
        cek = false;
    }
    if (tanggallahirValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Tanggal Lahir tidak boleh kosong !</div>";
        cek = false;
    }
    if (jeniskelaminValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Jenis Kelamin tidak boleh kosong !</div>";
        cek = false;
    }

    let data = {    
        nama_pasien: namapasienValue,
        nomor_ktp: nomorktpValue,
        alamat: alamatValue,
        nomor_telepon: nomorteleponValue,
        tanggal_lahir: tanggallahirValue,
        jenis_kelamin: jeniskelaminValue   
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);