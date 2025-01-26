interface CurrencyResponse {
    time: Object;
    disclaimer: string;
    chartName: string;
    bpi: BpiObject
}

interface BpiObject {
    USD:CurrObject;
    EUR:CurrObject;
    GBP:CurrObject;
}

interface CurrObject {
    code: string;
    symbol:string,
    rate:string;
    description:string;
}

