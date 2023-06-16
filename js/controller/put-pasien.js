import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-pasien.js";


function pushData(){

    let data = {
        nama_pasien: getValue("nama_pasien"),
        nomor_ktp: getValue("nomor_ktp"),
        alamat: getValue("alamat"),
        nomor_telepon: getValue("nomor_telepon"),
        tanggal_lahir: getValue("tanggal_lahir"),
        jenis_kelamin: getValue("jenis_kelamin"),    
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);