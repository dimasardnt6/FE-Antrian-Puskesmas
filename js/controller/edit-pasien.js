export function isiData(results) {  
    const inputMapping = [
      { id: 'nama_pasien', path: 'nama_pasien' },
      { id: 'nomor_ktp', path: 'nomor_ktp' },
      { id: 'alamat', path: 'alamat' },
      { id: 'nomor_telepon', path: 'nomor_telepon' },
      { id: 'tanggal_lahir', path: 'tanggal_lahir' },
      { id: 'jenis_kelamin', path: 'jenis_kelamin' },
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