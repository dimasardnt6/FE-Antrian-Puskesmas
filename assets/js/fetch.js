import { get } from "https://bukulapak.github.io/api/process.js";
import { setInner } from "https://bukulapak.github.io/element/process.js";
let urlAPI = "https://dimasardnt6-ulbi.herokuapp.com/all-antrian";
get(urlAPI,isiTableAntrian);
function isiTableAntrian(results){
    console.log(results);
    results.forEach(isiRow);
}
function isiRow(value){
    console.log(value)
}