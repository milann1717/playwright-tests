import { Locator } from "@playwright/test";
import Common from "../utils/common.js";

export default class EbayBookPage extends Common {
	firtBook: Locator;
	/**
   	* constructor to initialize page and required locators
   	*/
	constructor(page){
		super(page);
		//Locators and URL
		this.firtBook =page.locator('xpath=//div[@id="srp-river-results"]//ul[@class="srp-results srp-list clearfix"]/li[1]//div//a//span[@role="heading"]')
	}

	/**
   	* click on first book - as it will open new page we have used page promise
   	*/
	async clickFirstBook(){
		await super.clickElement(this.firtBook);
	}

}