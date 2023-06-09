import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://dimasardnt6-ulbi.herokuapp.com/all-antrian";
get(urlAPI, isiTableAntrian);
function isiTableAntrian(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("#KODEPOLI#", value.poli.kode_poliklinik)
            .replace("#NAMAPOLI#", value.poli.nama_poliklinik)
            .replace("#NAMAPASIEN#", value.identitas_pasien.nama_pasien)
            .replace("#NOKTP#", value.identitas_pasien.nomor_ktp)
            .replace("#NOANTRIAN#", value.nomor_antrian)
            .replace("#TANGGALDAFTAR#", value.tanggal_pendaftaran)
            .replace("#STATUS#", value.status_antrian)
        addInner("iniTabel", content);
}