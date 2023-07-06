import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse} from "../config/url_put-pasien.js";


function pushData(){

    let namapasienValue = getValue("nama_pasien");
    let nomorktpValue = getValue("nomor_ktp");
    let alamatValue = getValue("alamat");
    let nomorteleponValue = getValue("nomor_telepon");
    let tanggallahirValue = getValue("tanggal_lahir");
    let jeniskelaminValue = getValue("jenis_kelamin");

     // Form validation
     if (namapasienValue === "" && nomorktpValue === "" && alamatValue === "" && nomorteleponValue === "" && tanggallahirValue === "" && jeniskelaminValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Data tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        return;
    }
    
    if (namapasienValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Nama Pasien tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }

    if (nomorktpValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Nomor KTP tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (alamatValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Alamat tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (nomorteleponValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Nomor Telepon tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (tanggallahirValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Tanggal Lahir tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }
    
    if (jeniskelaminValue === "") {
        Swal.fire({
        icon: 'error',
        title: 'Jenis Kelamin tidak boleh kosong!',
        text: '',
        showConfirmButton: false,
        timer: 2000
        });
        cek = false;
    }

    let data = {    
        nama_pasien: namapasienValue,
        nomor_ktp: nomorktpValue,
        alamat: alamatValue,
        nomor_telepon: nomorteleponValue,
        tanggal_lahir: tanggallahirValue,
        jenis_kelamin: jeniskelaminValue   
    }
    putData(urlPUT, data, AmbilResponse);

}

onClick("button", pushData);