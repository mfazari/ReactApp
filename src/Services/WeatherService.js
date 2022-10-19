import axios from "axios";

export default class WeatherService {
    async getData(config, callback, errorcallback) {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts", config)
            return res
        } catch (err) {
            console.log("error")
        }
    }
}