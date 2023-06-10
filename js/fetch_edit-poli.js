import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-poli";
import { urlFetch } from "./config/url_get-poli";

get(urlFetch, isiData)