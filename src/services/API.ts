import axios, {AxiosInstance} from 'axios';

export default class API {
    private readonly api: AxiosInstance;

    constructor(url: string | null) {
        if (!url) {
            url = "http://localhost:3000"
        }

        this.api = axios.create();
        axios.defaults.baseURL = process.env.REACT_APP_URL
    }

    public get Api() {
        return this.api;
    }
}
