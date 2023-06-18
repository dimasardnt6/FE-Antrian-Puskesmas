import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-poli.js"


function pushData(){

    let kodepoliValue = getValue("kode_poliklinik");
    let namapoliValue = getValue("nama_poliklinik");
    let deskripsiValue = getValue("deskripsi");

     // Form validation
    if (kodepoliValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Kode Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }
    if (namapoliValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Nama Poliklinik tidak boleh kosong !</div>";
        cek = false;
    }
    if (deskripsiValue === "") {
        document.getElementById("hasil").innerHTML = "<div alert class='text-center relative w-full p-4 mb-4 text-white border border-solid rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 border-fuchsia-300'>Deskripsi tidak boleh kosong !</div>";
        cek = false;
    }

    let data = {
        kode_poliklinik: kodepoliValue,
        nama_poliklinik: namapoliValue,
        deskripsi: deskripsiValue
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);