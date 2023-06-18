import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-dokter.js";


function pushData(){

    let namadokterValue = getValue("nama_dokter");
    let spesialisasiValue = getValue("spesialisasi");
    let kodepoliValue = getValue("kode_poliklinik");
    let namapoliValue = getValue("nama_poliklinik");

    // form validation
    if (namadokterValue === "" && spesialisasiValue === "" && kodepoliValue === "" && namapoliValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Data tidak boleh kosong !</div>";
        return;
    }
    if (namadokterValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nama Dokter tidak boleh kosong !</div>";
        cek = false;
    }
    if (spesialisasiValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Spesialisasi tidak boleh kosong !</div>";
        cek = false;
    }
    if (kodepoliValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Kode Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }
    if (namapoliValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nama Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }

    let data = {
        nama_dokter: namadokterValue,
        spesialisasi: spesialisasiValue,
        kode_poliklinik: kodepoliValue,
        nama_poliklinik: namapoliValue
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);