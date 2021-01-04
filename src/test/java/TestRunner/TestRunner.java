package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
	features = "src/test/java/Features/sdet1.feature",
	glue= {"StepDefinition", "Utilities"},
	tags = {"@smoke"},
	monochrome = true,
	plugin = { "pretty", "html:target/cucumber-pretty"})

public class TestRunner {
	

}
