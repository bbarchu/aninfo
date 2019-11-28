var {defineSupportCode} = require('cucumber');
const assert = require('assert');

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
 
    Given(/^que soy un empleado de soporte que quiere atender una llamada$/, function () {
        return browser.get('http://localhost:3000/Soporte');
    });
 
    When(/^un cliente llama a soporte y lo atiendo$/, function () {
        return browser.findElement(by.name('submitAnswerCall')).click();
    });
 
    Then(/^debería ver la información del cliente que realiza la "([^"]*)".$/, function (arg1) {
        var condition = driver.until.elementLocated({xpath: "//h5[contains(text(),'" + arg1 + "')]"});
        browser.wait(condition, 2000);
        return browser.quit();
    });
 
})
