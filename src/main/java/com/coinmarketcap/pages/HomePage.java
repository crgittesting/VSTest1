package com.coinmarketcap.pages;

import com.coinmarketcap.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
//Stores element locators
public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath ="//button[normalize-space()='Maybe later']")
    WebElement mayBeLater;

    @CacheLookup
    //@FindBy(xpath ="//*[@id=\"__next\"]/div/div[1]/div[2]/div/div[1]/div[4]/div[2]/div[3]/div[1]/div")
    @FindBy(xpath ="//div[@display='flex']//div[contains(text(),'100')]//*[name()='svg']")
    WebElement numberOfRows;

    @CacheLookup
    @FindBy(xpath ="//tbody/tr")
    WebElement counter;


    public void clickOnMayBeLaterCookie(){
        clickOnElement(mayBeLater);
    }

    public void selectNumberOfRows(){
        clickOnElement((numberOfRows));
    }

    public void verifyNumberOfSearchPresent() {
        List<WebElement> counter = driver.findElements(By.xpath("//tbody/tr"));
        int numberOfRows = counter.size();
        System.out.println("Number of search elements on HomePage=" + numberOfRows);
       if(numberOfRows==100)
            System.out.println("100 records are present on homepage");
        else
            System.out.println("No records matching the number");
    }
}



