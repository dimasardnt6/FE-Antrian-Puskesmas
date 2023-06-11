import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-dokter.js";


function pushData(){

    let data = {
        nama_dokter: getValue("nama_dokter"),
        spesialisasi: getValue("spesialisasi"),
        poli: {
            kode_poliklinik: getValue("kode_poliklinik"),
            nama_poliklinik: getValue("nama_poliklinik")
        }   
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);