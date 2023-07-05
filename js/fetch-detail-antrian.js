import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/detail-antrian.js";
import { urlFetch } from "./config/url_get-antrian.js";

get(urlFetch, isiData)