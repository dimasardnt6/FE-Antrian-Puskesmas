import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-dokter.js";


function pushData(){

    let data = {
        nama_dokter: getValue("nama_dokter"),
        spesialis: getValue("nspesialis"),
        poliklinik: getValue("poliklinik")
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);