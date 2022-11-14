import axios from "axios";
import API from "./API";

export default class WeatherService extends API {
    async getData() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return res
        } catch (err) {
            console.log("error")
        }
    }
}