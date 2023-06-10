import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-poli.js"


function pushData(){

    let data = {
        kode_poliklinik: getValue("kode_poliklinik"),
        nama_poliklinik: getValue("nama_poliklinik"),
        deskripsi: getValue("deskripsi")
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);