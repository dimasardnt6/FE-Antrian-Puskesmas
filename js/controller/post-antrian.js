import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-antrian.js";


function pushData(){

    let data = {
        poli: {
            kode_poliklinik: getValue("kode_poliklinik"),
            nama_poliklinik: getValue("nama_poliklinik"),
            },
            identitas_pasien: {
            nama_pasien: getValue("nama_pasien"),
            nomor_ktp: getValue("nomor_ktp")
            },                
            nomor_antrian: parseInt(getValue("nomor_antrian")),
            status_antrian: getValue("status_antrian"),

    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);