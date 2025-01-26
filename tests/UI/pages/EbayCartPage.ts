import { expect, Locator } from "@playwright/test";
import Common from "../utils/common.js";

export default class EbayCartPage extends Common {
    ebayURL: string;
    addCart: Locator;
    verifyCart: any;
    /**
    * constructor to initialize page and required locators
    */
    constructor(page){
        super(page);
        //Locators and URL
        this.addCart = page.getByTestId('x-atc-action').getByTestId('ux-call-to-action');
        this.verifyCart =page.getByLabel('Your shopping cart contains 1');

    }

    //click to add item in the cart
    async addToCart(){
        await super.clickElement(this.addCart);
    }

    async verifyCartNumber(){
        expect(this.verifyCart).toBeTruthy();
    }

}