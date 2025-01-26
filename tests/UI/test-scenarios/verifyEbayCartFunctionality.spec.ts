import { test, expect } from '@playwright/test';
import EbayHomePage from '../pages/EbayHomePage';
import EbayBookPage from '../pages/EbayBookPage';
import EbayCartPage from '../pages/ebayCartPage';



test('verify whether cart is being updated correctly', async ({ page }) => {
  //declare class binding variables
  let ebayHome: EbayHomePage;
  let ebayBook: EbayBookPage;
  let ebayCart: EbayCartPage;

  //intialize all required class objects
  ebayHome = new EbayHomePage(page);
  ebayBook = new EbayBookPage(page);
  
  //going to ebay.com and searching word 'book'
  await ebayHome.goToEbay();
  await ebayHome.searchItem('book');

  //clicking on first book, clicking is resulting in another page which is handled through promise popup
  const bookPagePromise = page.waitForEvent('popup');
  await ebayBook.clickFirstBook();
  const bookPage = await bookPagePromise;

  //veriying whether cart have been uddated successfully
  ebayCart = new EbayCartPage(bookPage);

  await ebayCart.addToCart();
  await ebayCart.verifyCartNumber();

});