export function isiData(results) {  
    const inputMapping = [
      { id: 'kode_poliklinik', path: 'poli.kode_poliklinik' },
      { id: 'nama_poliklinik', path: 'poli.nama_poliklinik' },
      { id: 'nama_dokter', path: 'poli.dokter.nama_dokter' },
      { id: 'spesialisasi', path: 'poli.dokter.spesialisasi' },
      { id: 'nama_pasien', path: 'identitas_pasien.nama_pasien' },
      { id: 'nomor_ktp', path: 'identitas_pasien.nomor_ktp' },
      { id: 'nomor_telepon', path: 'identitas_pasien.nomor_telepon' },
      { id: 'jenis_kelamin', path: 'identitas_pasien.jenis_kelamin' },
      { id: 'nomor_antrian', path: 'nomor_antrian' },
      { id: 'tanggal_pendaftaran', path: 'tanggal_pendaftaran' },
      { id: 'status_antrian', path: 'status_antrian' },
    ];
  
    inputMapping.forEach(({ id, path, index, property }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path, index, property);
      inputElement.value = value;
    });
  }
  
  function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
    // console.log(`Value at path ${path}:`, value);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
  }