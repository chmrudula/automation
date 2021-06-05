describe('volvocars.com page', function(){

    it('should have the right title', function(){ 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more') 
        browser.maximizeWindow();
        let title=browser.getTitle();
        console.log(title+'*****')
    });
});