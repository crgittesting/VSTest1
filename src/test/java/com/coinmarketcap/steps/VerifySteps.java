package com.coinmarketcap.steps;

import com.coinmarketcap.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.concurrent.TimeUnit;

import static com.coinmarketcap.drivermanager.ManageDriver.driver;

public class VerifySteps {
    @Given("^User launches Coin market cap homepage$")
    public void userLaunchesCoinMarketCapHomepage() {
        new HomePage();

    }

    @And("^User accepts Alerts$")
    public void userAcceptsAlerts() {

        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        new HomePage().clickOnMayBeLaterCookie();
        driver.switchTo().alert().accept();
    }

    @When("^User selects hundred from show rows drop down$")
    public void userSelectsHundredFromShowRowsDropDown() {
        new HomePage().selectNumberOfRows();
    }

    @Then("^User verify that hundred rows are getting displayed on page$")
    public void userVerifyThatHundredRowsAreGettingDisplayedOnPage() {
        new HomePage().verifyNumberOfSearchPresent();
    }
}
