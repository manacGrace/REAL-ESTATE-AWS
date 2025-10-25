package com.wam.projimmo;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/* Aymen */
public class LoginTest {

    private WebDriver driver = null;

    @BeforeEach
    public void setUp(){
        System.setProperty("webdriver.gecko.driver", "./data/geckodriver.exe");
        driver = new FirefoxDriver();
    }

    @Test
    public void testLogin(){
        driver.get("http://localhost:9090/signIn");

        WebElement emailInput = driver.findElement(By.name("email"));
        WebElement passwordInput = driver.findElement(By.name("password"));
        WebElement loginButton = driver.findElement(By.name("login"));


        emailInput.sendKeys("aymen@test.com");
        passwordInput.sendKeys("123");
        loginButton.click();
    }

}