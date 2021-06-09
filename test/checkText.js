
describe('volvocars.com page', () => {
    it('should open the URL and verify the title', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more'); 
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');        
        
    });
    it('should verify the selector', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more'); 
        const text = $('#ModelIntro-1').getText();
        console.log(text);        
        
    });

    it('should click on the car image and verify the new url', () => {
        const carclick = $('https://www.volvocars.com/images/v/intl/v/-/media/project/contentplatform/data/media/my22/car-images/xc90-recharge-my22-responsive.jpg?h=300&iar=0');
        carclick.click();
        expect(browser).toHaveUrl('https://www.volvocars.com/intl/v/cars/xc90-hybrid');
    });

    it('should click on the volvo logo and verify the new url', () => {
        const volvobtn = $('nav:siteNavLogoSmall');
        volvobtn.click();
        expect(browser).toHaveUrl('https://www.volvocars.com/intl');
    });
        
    
});



