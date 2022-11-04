import axios from "axios";

export default class WeatherService {
    async getData() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return res
        } catch (err) {
            console.log("error")
        }
    }
}