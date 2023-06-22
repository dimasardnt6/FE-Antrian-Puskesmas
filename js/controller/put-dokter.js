import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-dokter.js";

function pushData(){

    let namadokterValue = getValue("nama_dokter");
    let spesialisasiValue = getValue("spesialisasi");

    // Form validation
    if (namadokterValue === "" && spesialisasiValue === "") {
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
    

    let data = {    
        nama_dokter: namadokterValue,
        spesialisasi: spesialisasiValue 
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);