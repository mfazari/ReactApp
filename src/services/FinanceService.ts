import {AxiosResponse} from "axios";
import API from "./API";

export default class FinanceService extends API {
    constructor() {
        super(null);
    }

    async getData(): Promise<AxiosResponse> {
        return await this.Api.get("http://127.0.0.1:5000/v1/manager/search/tesla")
    }
}