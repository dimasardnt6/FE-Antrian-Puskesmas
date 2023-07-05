import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-antrian.js";

async function fetchWithTimeout(url, options, timeout = 6000) {
    const controller = new AbortController();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), timeout)
    );
  
    const responsePromise = fetch(url, { ...options, signal: controller.signal });
  
    return Promise.race([responsePromise, timeoutPromise])
      .then((response) => {
        controller.abort();
        return response;
      });
  }
  
  async function getpoliData(poliklinikId) {
    const url = `https://dimasardnt6-ulbi.herokuapp.com/poliklinik/${poliklinikId}`;
    const response = await fetchWithTimeout(url);
    
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch poliklinik data.");
    }
  }
  
  async function getpasienData(pasienId) {
    const url = `https://dimasardnt6-ulbi.herokuapp.com/pasien/${pasienId}`;
    const response = await fetchWithTimeout(url);
    
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch pasien data.");
    }
  }
  

function pushData(){
    let kodepoliklinikValue = getValue("kode_poliklinik");
    let namapoliklinikValue = getValue("nama_poliklinik");
    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let nomorteleponValue = getValue("nomor_telepon");
    let nomorantrianValue = parseInt(getValue("nomor_antrian"));
    let statusantrianValue = getValue("status_antrian");

   // form validation
    if (kodepoliklinikValue === "" && namapoliklinikValue === "" && namapasienValue === "" && nomorktpValue === "" && statusantrianValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Data tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        return;
    }
    
    if (statusantrianValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Status Antrian tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }  

    Promise.all([getpoliData(kodepoliklinikValue,namapoliklinikValue), getpasienData(namapasienValue,nomorktpValue,nomorteleponValue)])
    .then(([poliData, pasienData]) => {
      // Ekstrak nilai-nilai yang diperlukan dari data yang diambil
        let kodepoliText = poliData.kode_poliklinik;
        let namapoliValue = poliData.nama_poliklinik;

        let namapasienText = pasienData.nama_pasien;
        let noktpValue = pasienData.nomor_ktp;
        let noteleponValue = pasienData.nomor_telepon;

        // Bangun objek data
        let data = {
            poli:{
                _id: kodepoliklinikValue,
                kode_poliklinik: kodepoliText,
                nama_poliklinik: namapoliValue,
            },
            identitas_pasien:{
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