import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('PC Part Picker');
  });
  
  it('should give a credential error', () => {
	browser.get("http://localhost:4200/view");
	expect(element(by.css("#error")).getText()).toBe("You don't have access to this feature");
  });
  
  it('should go to the login page', () => {
    page.navigateTo();
	element(by.name("login")).click();
	expect(browser.getCurrentUrl()).toBe('http://localhost:4200/login');
  });

  it('should fail to login', () => {
	element(by.name("username")).sendKeys("sean");
	element(by.name("password")).sendKeys("1234");
	element(by.name("btnS")).click();
	expect(browser.getCurrentUrl()).toBe('http://localhost:4200/login');
  });
  
  it('should successfully login', () => {
	element(by.name("username")).clear();
	element(by.name("username")).sendKeys("sean");
	element(by.name("password")).clear();
	element(by.name("password")).sendKeys("wood");
	element(by.name("btnS")).click();
	expect(element(by.css("#container > div.bgimg-1 > div > span")).getText()).toBe("Welcome to PC Part Picker");
  });
  
  it('should navigate to order page', () => {
    element(by.linkText("Order")).click();
	expect(element(by.css("#content > p")).getText()).toBe("Order your custom PC here!");
  });
  
  it('should navigate to view orders page', () => {
    element(by.linkText("View Builds")).click();
	expect(element(by.css("#container > table > caption")).getText()).toBe("My builds:");
  });
  
  it('should logout and send back to home page', () => {
    element(by.linkText('Logout')).click();
	expect(element(by.css("#container > div.bgimg-1 > div > span")).getText()).toBe("Welcome to PC Part Picker");
  });

  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
