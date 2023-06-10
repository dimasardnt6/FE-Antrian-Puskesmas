import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-poli.js";
import { urlFetch } from "./config/url_get-poli.js";

get(urlFetch, isiData)