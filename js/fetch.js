import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableAntrian,isiTablePasien } from "./controller/get.js";
import { urlAPIAntrian,urlAPIPasien } from "./config/url.js";

get(urlAPIAntrian, isiTableAntrian);
get(urlAPIPasien, isiTablePasien);