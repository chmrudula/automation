describe('experitest.com page', () => { 
    it('should have the right title', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more') 
        const title = browser.getTitle() 
        expect(browser).toHaveTitle('volvo'); 
    }) 
})
