import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel,isiTabel2,isiTabel3,isiTabel4 } from "../temp/table.js";
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
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
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
            .replace("#ALAMAT#", value.alamat)
            .replace("#NOTELEPON#", value.nomor_telepon)
            .replace("#LAHIR#", value.tanggal_lahir)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#GENDER#", value.jenis_kelamin)
        addInner("iniTabel2", content);
}

export function isiTablePoliklinik(results) {
    results.forEach(isiRow3);
}
function isiRow3(value) {
    let content =
         isiTabel3.replace("#KODEPOLI#", value.kode_poliklinik)
            .replace("#NAMAPOLI#", value.nama_poliklinik)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#DESKRIPSI#", value.deskripsi)
        addInner("iniTabel3", content);
}

export function isiTableDokter(results) {
    results.forEach(isiRow4);
}
function isiRow4(value) {
    let content =
         isiTabel4.replace("#NAMADOKTER#", value.nama_dokter)
            .replace("#SPESIALIS#", value.spesialisasi)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#KODEPOLI#", value.poli.kode_poliklinik)
            .replace("#NAMAPOLI#", value.poli.nama_poliklinik)
        addInner("iniTabel4", content);
}