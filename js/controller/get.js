import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel,isiTabel2 } from "../temp/table.js";
export function isiTableAntrian(results) {
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

export function isiTablePasien(results) {
    results.forEach(isiRow2);
}
function isiRow2(value) {
    let content =
         isiTabel2.replace("#NAMAPASIEN#", value.nama_pasien)
            .replace("#NOKTP#", value.nomor_ktp)
            .replace("#ALAMAT#", value.nomor_ktp)
            .replace("#NOHP#", value.nomor_telepon)
            .replace("#LAHIR#", value.tanggal_lahir)
            .replace("#GENDER#", value.jenis_kelamin)
        addInner("iniTabel2", content);
}