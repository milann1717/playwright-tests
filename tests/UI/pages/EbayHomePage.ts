import { Locator } from "@playwright/test";
import Common from "../utils/common.js";
import { EBAY_URL } from "../utils/config.ts";

export default class EbayHomePage extends Common {
    ebayURL: string;
    searchBox: any;
    searchButton: any;
    /**
    * constructor to initialize page and required locators
    */
    constructor(page){
        super(page);
        //Locators and URL
        this.ebayURL=EBAY_URL;
        this.searchBox=page.getByRole('combobox', { name: 'Search for anything' })
        this.searchButton= page.getByRole('button', { name: 'Search', exact: true })
    }

    //go to ebay url
	async goToEbay(){
		await super.goTo(EBAY_URL);
	}

    //serach any item on ebay
	async searchItem(item: any){
		await super.clickElement(this.searchBox)
        await super.setInputValue(this.searchBox,item)
        await super.clickElement(this.searchButton)
	}



}