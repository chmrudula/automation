describe('experitest.com page', () => { 
    it('should have the right title', () => { 
        browser.url('https://experitest.com.') 
        const title = browser.getTitle() 
        expect(browser).toHaveTitle('Experitest: Mobile App & Cross-Browser Testing End-to-End'); 
    }) 
})
