import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-pasien.js";


function pushData(){

    let data = {
        pasien: {
            nama_pasien: getValue("nama_pasien"),
            no_ktp: getValue("no_ktp")
        },
        alamat: getValue("alamat"),
        nomor_telepon: getValue("nomor_telepon"),
        lahir: getValue("lahir"),
        gender: getValue("gender"),   
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);