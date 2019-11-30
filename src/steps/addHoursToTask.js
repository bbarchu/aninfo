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

    Given(/^que soy un desarrollador que quiere actualizar las horas consumidas en una tarea$/, function () {
        return browser.get('http://localhost:3000/GestionDeHoras');
    });
 
    When(/^cuando accedo a la página de gestión de horas, modifico las horas consumidas de una tarea a ([^"]*) y accedo a otra página para regresar a la de gestión de horas$/, function (hours) {
        e = browser.wait(driver.until.elementLocated(by.name('campoHorasConsumidas')), 4000)
        e.clear()
        e.sendKeys(hours);

        browser.wait(driver.until.elementLocated(by.name('soporteButton')), 10000).click()
        browser.wait(driver.until.elementLocated(by.name('submitCreateTicket')), 4000);

        browser.wait(driver.until.elementLocated(by.name('gestionDeHorasButton')), 10000).click()
        return browser.wait(driver.until.elementLocated(by.name('campoHorasConsumidas')), 4000);
    });
 
    Then(/^debería ver que las horas consumidas por dicha tarea son ([^"]*).$/, function (hours) {
        var condition = driver.until.elementLocated({xpath:"//input[@value='" + hours + "']"});
        browser.wait(condition, 4000);
        return browser.quit();

    });
 
})
