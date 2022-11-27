import axios, {AxiosInstance} from 'axios';

export default class API {
    private readonly api: AxiosInstance;

    constructor(url: string | null) {
        if (!url) {
            url = "http://127.0.0.1:5000"
        }
        axios.defaults.baseURL = process.env.REACT_APP_URL;
        this.api = axios.create();
    }

    public get Api() {
        return this.api;
    }
}
