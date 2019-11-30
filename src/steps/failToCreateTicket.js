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
 
    Given(/^que soy un empleado de soporte que quiere generar un ticket pero no sabe como hacerlo$/, function () {
        return browser.get('http://localhost:3000/Soporte/CrearTicket');
    });
 
    When(/^introduzco los datos de un nuevo ticket, olvido llenar un campo y procedo a crearlo$/, function () {
        browser.wait(driver.until.elementLocated(by.name('submit')), 10000);
        browser.findElement(by.name('titulo')).sendKeys("La app deja de responder");
        browser.findElement(by.name('descripcion')).sendKeys("La app deja de responder si hay más de 127 usuarios registrados.");
        return browser.findElement(by.name('submit')).click();
    });
 
    Then(/^debería ser informado del siguiente error "([^"]*)".$/, function (arg1) {
        var condition = driver.until.elementLocated({xpath: "//h4[contains(text(),'" + arg1 + "')]"});
        browser.wait(condition, 2000);
        return browser.quit();
    });
 
})
