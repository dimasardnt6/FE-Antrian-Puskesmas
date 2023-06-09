import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://dimasardnt6-ulbi.herokuapp.com/all-antrian";
get(urlAPI,isiTableAntrian);
function isiTableAntrian(results){
    console.log(results);
}