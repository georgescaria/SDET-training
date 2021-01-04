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

public class OlaContactFormSteps {

	WebDriver driver = hooks.driver;
	

	
	
	@Given("^User navigates to Ola$")
	public void user_navigates_to_Ola() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://corporate.olacabs.com/#/home");
	}


	@Given("^Click on Contact Us$")
	public void click_on_Contact_Us() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(2000);
	    driver.findElement(By.xpath("(//a[@href='#contact'])[3]")).click();
	    Thread.sleep(2000);
	}
	
	@When("^Enter search string as \"([^\"]*)\"$")
	public void enter_search_string_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@ng-model='contact.name']")).sendKeys(arg1);
		
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@value='Submit']")).click();
	}

	@Then("^Results are displayed$")
	public void results_are_displayed() throws Throwable {
		
		Thread.sleep(2000);
		if(driver.findElement(By.xpath("//small[text()='Please correct the highlighted fields']")).isDisplayed())
		{
			System.out.println("Error message is displayed");
		}
	    
	}


}
