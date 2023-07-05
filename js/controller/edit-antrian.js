export function isiData(results) {  
    const inputMapping = [
      { id: 'kode_poliklinik', path: 'poli._id' },
      { id: 'nama_poliklinik', path: 'poli.nama_poliklinik' },
      { id: 'nama_pasien', path: 'identitas_pasien._id' },
      { id: 'nomor_ktp', path: 'identitas_pasien.nomor_ktp' },
      { id: 'nomor_telepon', path: 'identitas_pasien.nomor_telepon' },
      { id: 'jenis_kelamin', path: 'identitas_pasien.jenis_kelamin' },
      { id: 'nomor_antrian', path: 'nomor_antrian' },
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