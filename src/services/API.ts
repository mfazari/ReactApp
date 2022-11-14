import axios, {AxiosInstance} from 'axios';

export default class API {
    private api: AxiosInstance;
    constructor() {
        this.api = axios.create();
        axios.defaults.baseURL = process.env.REACT_APP_URL
    }
}
