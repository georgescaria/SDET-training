package StepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Utilities.hooks;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {

	WebDriver driver = hooks.driver;
	
	@Given("^User navigates to google$")
	public void user_navigates_to_google() throws Throwable {
	    System.out.println("BG step");
	}

	
	@Given("^User navigates to Google Page$")
	public void user_navigates_to_Google_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://google.com");
		
	    //throw new PendingException();
	}
/*
	
	@When("^Enter search string as \"([^\"]*)\"$")
	public void enter_search_string_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.name("q")).sendKeys(arg1);
	}

	@Then("^Results are displayed$")
	public void results_are_displayed() throws Throwable {
		driver.findElement(By.name("btnK")).click();
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

*/
}
