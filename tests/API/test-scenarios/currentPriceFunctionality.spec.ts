import {test, request, expect} from "@playwright/test";
import { BASE_URL } from "../utils/config";

test.describe("Fetch characters from Marvel API Tests", async()=>{
let apiRequest;

test.beforeEach(async()=>{    
    apiRequest = await request.newContext({
        // eslint-disable-next-line no-undef
        baseURL: BASE_URL
    });
});

test("verify currency", async()=>{
    //sending GET request and desealizing it to response
    let response  = await apiRequest.get('/v1/bpi/currentprice.json');
    const responses :CurrencyResponse = await response.json();
    
    //verifying whther all three currecny exist
    expect(responses.bpi.USD).toBeTruthy();
    expect(responses.bpi.GBP).toBeTruthy();
    expect(responses.bpi.EUR).toBeTruthy();

    //verify GBP description
    expect(responses.bpi.GBP.description).toBe('British Pound Sterling');
});

});