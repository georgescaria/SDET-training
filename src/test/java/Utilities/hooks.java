package Utilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class hooks {
    public static WebDriver driver; 
    
     @Before
        public void beforeScenario(){
    	 System.out.println("This will run before the Scenario");
    	 WebDriverManager.chromedriver().setup();
 	    driver = new ChromeDriver();
 	    
        } 
     
     @After
        public static void afterScenario(){
            System.out.println("This will run after the Scenario");
            driver.quit();
        }
     
}