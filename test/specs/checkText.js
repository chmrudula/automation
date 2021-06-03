describe('volvocars.com page', () => {

    it('should have the right title', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more') 
        const title = browser.getTitle() 
        expect(browser).toHaveTitle('volvo'); 
    }) 

    it('should have the right name Cars', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more') 
        const elem = $('#Cars')
        expect(elem).toExist()
    })

    it('should have the right heading1', () => { 
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more') 
        const elem = $('#Ideas that change the world are often the most controversial.')
        expect(elem).toExist()
    })
})
