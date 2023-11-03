import Strapi from "strapi-sdk-js"
import { STRAPI_BASE_URL } from "./const"


export const strapi = new Strapi({
    url: STRAPI_BASE_URL,
    axiosOptions: {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            "Content-Type": "application/json"
        }
    }
})