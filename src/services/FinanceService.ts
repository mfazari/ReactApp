import {AxiosResponse} from "axios";
import API from "./API";

export default class FinanceService extends API {
    constructor() {
        super(null);
    }

    async getSymbolsByName(searchName: string): Promise<AxiosResponse>  {
        const request = {url: "/v1/manager/search/" + searchName}
        const response: AxiosResponse = await this.Api.get(request.url);
        return response;
    }

    async getChartDataBySymbol(searchName: string): Promise<AxiosResponse> {
        const request = {url: "/v1/manager/stock/" + searchName}
        const response: AxiosResponse = await this.Api.get(request.url);
        return response;
    }
}