import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-pasien.js";
import { urlFetch } from "./config/url_get-pasien.js";

get(urlFetch, isiData)