import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse} from "../config/url_post-poli.js";


function pushData(){

    let data = {
        kode_poliklinik: getValue("kode_poliklinik"),
        nama_poliklinik: getValue("nama_poliklinik"),
        deskripsi: getValue("deskripsi"),
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);