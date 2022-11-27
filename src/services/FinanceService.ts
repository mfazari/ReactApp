import {AxiosResponse} from "axios";
import API from "./API";

export default class FinanceService extends API {
    constructor() {
        super(null);
    }

    async getSymbolsByName(): Promise<AxiosResponse> {
        const request = {url: "/v1/manager/search/apple"}
        const response: AxiosResponse = await this.Api.get(request.url);
        return response;
    }

    async getChartDataBySymbol(): Promise<AxiosResponse> {
        const request = {url: "/v1/manager/stock/aapl"}
        const response: AxiosResponse = await this.Api.get(request.url);
        return response;
    }
}