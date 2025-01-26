# Automation Playwright


1. A UI automation :
    1. Opens up ebay website
    2. Searches keyword 'book'
    3. CLicks on first book and adds it in the cart
    4. Verify whether cart is updated

  
2. An API automation 
   1. GET response of currency
   2. Verifies the currency USD, GBP and EUR
   3. Verifies the currency description against GBP

## Tools and technologies

- [Playwright](https://playwright.dev/)
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Allure reports](https://allurereport.org/docs/)

## Setting up

### Dependencies

1. Make sure you have:
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/package/npm)

3. Before you start, remember to run the command to install the dependencies:

```bash
npm install
```

### Running

To run the test, you can use the following custom commands: 

Headless
```bash
npx playwright test
```
Open the playwright UI mode
```bash
npx playwright test --headed
```
After running the test, you can generate the Allure report with the following custom command:
```bash
npm run generate-report
```

## Collaboration

### Naming Conventions

- Use `lowerCamelCase`for variables, properties, files and folder names.
- Use `UpperCamelCase` for class names. 
- Use self explanatory names for variables.
