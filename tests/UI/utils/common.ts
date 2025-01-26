export default class Common {
	

	constructor(page){
		this.page = page;
	}

	/**
     * @param {string} url of page (i.e. https://ebay.com)
     */
	async goTo(url){
		await this.page.goto(url);
	}

	/**
	 * @param {page.locator} to input text into search box
	 * 
	 */
	async setInputValue(locator, value){
		await locator.fill(value);
	}

	/**
	 * @param {page.locator} locator the element selector
	 */
	async clickElement(locator){
		await locator.click();
	}
}