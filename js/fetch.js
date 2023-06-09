import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTableAntrian } from "./controller/get.js";
import { urlAPIAntrian } from "./config/url.js";
get(urlAPIAntrian, isiTableAntrian);