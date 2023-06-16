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
<<<<<<< HEAD
            nomor_ktp: getValue("nomor_ktp")
        },                
        nomor_antrian: getValue("nomor_antrian"),
        status_antrian: getValue("status_antrian"),
                
=======
            nomor_ktp: getValue("nomor_ktp"),
            },
            nomor_antrian: parseInt(getValue("nomor_antrian")),
            status_antrian: getValue("status_antrian"),
>>>>>>> 926ea7cc686ecc719006acbc5ce11b9f0f867a25
    }
    postData(urlPOST, data, AmbilResponse);

}

onClick("button", pushData);