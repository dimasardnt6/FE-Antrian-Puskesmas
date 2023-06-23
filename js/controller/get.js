import { addInner } from "https://bukulapak.github.io/element/process.js";
import { isiTabel,isiTabel2,isiTabel3,isiTabel4, isiTabel5, isiTabelAntrianUser } from "../temp/table.js";
export function isiTableAntrian(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content =
         isiTabel.replace("#KODEPOLI#", value.poli.kode_poliklinik)
            .replace("#NAMAPOLI#", value.poli.nama_poliklinik)
            .replace("#NAMAPASIEN#", value.identitas_pasien.nama_pasien)
            .replace("#NOKTP#", value.identitas_pasien.nomor_ktp)
            .replace("#NOHP#", value.identitas_pasien.nomor_telepon)
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
            .replace("#NAMADOKTER#", value.dokter.nama_dokter)
            .replace("#SPESIALISASI#", value.dokter.spesialisasi)
        addInner("iniTabel3", content);
}

export function isiTableDokter(results) {
    results.forEach(isiRow4);
}
function isiRow4(value) {
    let content =
         isiTabel4.replace("#NAMADOKTER#", value.nama_dokter)
            .replace("#IDEDIT#", value._id)
            .replace("#IDHAPUS#", value._id)
            .replace("#SPESIALIS#", value.spesialisasi)
        addInner("iniTabel4", content);
}

export function isiTableUser(results) {
    results.forEach(isiRow5);
}
function isiRow5(value) {
    let content =
         isiTabel5.replace("#FNAME#", value.firstname)
            .replace("#LNAME#", value.lastname)
            .replace("#EMAIL#", value.email)
            .replace("#PASSWORD#", value.password)
        addInner("iniTabel5", content);
}

export function isiTableAntrianUser(results) {
    results.forEach(isiRow6);
}
function isiRow6(value) {
    let content =
         isiTabelAntrianUser.replace("#KODEPOLI#", value.poli.kode_poliklinik)
            .replace("#NAMAPOLI#", value.poli.nama_poliklinik)
            .replace("#NAMAPASIEN#", value.identitas_pasien.nama_pasien)
            .replace("#NOKTP#", value.identitas_pasien.nomor_ktp)
            .replace("#NOHP#", value.identitas_pasien.nomor_telepon)
            .replace("#NOANTRIAN#", value.nomor_antrian)
            .replace("#TANGGALDAFTAR#", value.tanggal_pendaftaran)
            .replace("#STATUS#", value.status_antrian)
        addInner("iniTabelAntrianUser", content);
}