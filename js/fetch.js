import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableAntrian,isiTableDokter,isiTablePasien, isiTablePoliklinik, isiTableUser } from "./controller/get.js";
import { urlAPIAntrian,urlAPIDokter,urlAPIPasien, urlAPIPolikolinik, urlAPIUser } from "./config/url.js";

get(urlAPIAntrian, isiTableAntrian);
get(urlAPIPasien, isiTablePasien);
get(urlAPIPolikolinik, isiTablePoliklinik);
get(urlAPIDokter, isiTableDokter);
get(urlAPIUser, isiTableUser);