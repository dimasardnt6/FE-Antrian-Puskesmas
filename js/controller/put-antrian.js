import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put-antrian.js";

async function getpoliData(poliklinikId) {
  const response = await fetch(
    `https://dimasardnt6-ulbi.herokuapp.com/poliklinik/${poliklinikId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Gagal mengambil data poliklinik.");
  }
}

async function getpasienData(pasienId) {
  const response = await fetch(
    `https://dimasardnt6-ulbi.herokuapp.com/pasien/${pasienId}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Gagal mengambil data pasien.");
  }
}

function pushData() {
  let kodepoliklinikValue = getValue("kode_poliklinik");
  let namapoliklinikValue = getValue("nama_poliklinik");
  let namapasienValue = getValue("nama_pasien");
  let nomorktpValue = getValue("nomor_ktp");
  let nomorteleponValue = getValue("nomor_telepon");
  let nomorantrianValue = getValue("nomor_antrian");
  let statusantrianValue = getValue("status_antrian");

  // Validasi form
  if (
    kodepoliklinikValue === "" ||
    namapoliklinikValue === "" ||
    namapasienValue === "" ||
    nomorktpValue === "" ||
    statusantrianValue === ""
  ) {
    Swal.fire({
      icon: "error",
      title: "Data tidak boleh kosong!",
      text: "",
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  if (statusantrianValue === "") {
    Swal.fire({
      icon: "error",
      title: "Status Antrian tidak boleh kosong!",
      text: "",
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }

  Promise.all([
    getpoliData(kodepoliklinikValue),
    getpasienData(namapasienValue),
  ])
    .then(([poliData, pasienData]) => {
      let kodepoliText = poliData.kode_poliklinik;
      let namapoliValue = poliData.nama_poliklinik;

      let namapasienText = pasienData.nama_pasien;
      let noktpValue = pasienData.nomor_ktp;
      let noteleponValue = pasienData.nomor_telepon;

      let data = {
        poli: {
          _id: kodepoliklinikValue,
          kode_poliklinik: kodepoliText,
          nama_poliklinik: namapoliValue,
        },
        identitas_pasien: {
          _id: namapasienValue,
          nama_pasien: namapasienText,
          nomor_ktp: noktpValue,
          nomor_telepon: noteleponValue,
        },
        nomor_antrian: nomorantrianValue,
        status_antrian: statusantrianValue,
      };
      console.log(data);
      putData(urlPUT, data, AmbilResponse);
    })
    .catch((error) => {
      console.error(error);
    });
}

onClick("button", pushData);
