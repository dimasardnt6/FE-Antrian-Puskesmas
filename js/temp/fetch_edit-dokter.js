import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit-dokter.js";
import { urlFetch } from "./config/url_get-dokter.js";

get(urlFetch, isiData)