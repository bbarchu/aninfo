var {defineSupportCode} = require('cucumber');
 
defineSupportCode(function(context) {
 
    context.setDefaultTimeout(200 * 1000)
 
    var setWorldConstructor = context.setWorldConstructor;
    var Given = context.Given
    var When = context.When
    var Then = context.Then
 
    require('geckodriver')
    var expect=require('chai').expect
 
    var driver = require('selenium-webdriver');
    var browser = new driver.Builder()
        .forBrowser('firefox')
        .build();
    var by = driver.By;
 
    Given(/^I am on Codoid Home page$/, function () {
        return browser.get('http://localhost:3000/');
    });
 
    When(/^I click ([^"]*) link$/, function (text) {
        browser.wait(driver.until.elementLocated(by.name('clasificacion')), 10000);
        //browser.findElement(by.name('clasificacion')).click();
        return browser.findElement(by.name('s2')).click();
    });
 
    Then(/^I should see "([^"]*)"$/, function (arg1) {
        //var condition = driver.until.elementLocated(driver.By.name("clasificacion"));
        //browser.wait(condition, 5000);
 
        return browser.quit();
    });
 
})