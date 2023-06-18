import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-poli.js"


function pushData(){

    let kodepoliValue = getValue("kode_poliklinik");
    let namapoliValue = getValue("nama_poliklinik");
    let deskripsiValue = getValue("deskripsi");

     // form validation
     if (kodepoliValue === "" && namapoliValue === "" && deskripsiValue === "") {
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

    let data = {
        kode_poliklinik: kodepoliValue,
        nama_poliklinik: namapoliValue,
        deskripsi: deskripsiValue
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);