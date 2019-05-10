var pageObjects = {}

module.exports = {
    beforeEach: browser => {
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Evens and Odds Test': browser => {
        pageObjects
            .waitForElementVisible('@evenOddTitle')
            .waitForElementVisible('@evenOddInput')
            .setValue('@evenOddInput', ["1,2,3,4"])
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain('2,4')
        pageObjects
            .expect.element('@oddResults').text.to.contain('1,3')
    },
    'Filter Object Test Catagory: Age': browser => {
        pageObjects
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .setValue('@filterObjectInput', ["age"])
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('12')
        pageObjects
            .expect.element('@filterObjectResults').text.to.contain('24')
    },
    'Filter String Test: James': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["James"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('James')
    },
    'Palindrome Test True': browser => {
        pageObjects
            .waitForElementVisible('@palindromeTitle')
            .waitForElementVisible('@palindromeInput')
            .setValue('@palindromeInput', ["racecar"])
            .waitForElementVisible('@palindromeButton')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('true')
    },
    'Sum Test': browser => {
        pageObjects
            .waitForElementVisible('@sumTitle')
            .waitForElementVisible('@sum1Input')
            .setValue('@sum1Input', ["10"])
            .setValue('@sum2Input', ["15"])
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('25')
    },
    'Evens and Odds Null Test': browser => {
        pageObjects
            .waitForElementVisible('@evenOddTitle')
            .waitForElementVisible('@evenOddInput')
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain('[null]')
    },
    'Filter Object Test Catagory: Tite': browser => {
        pageObjects
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .setValue('@filterObjectInput', ["title"])
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('"Hack0r"')
        pageObjects
            .expect.element('@filterObjectResults').text.to.contain('"CEO"')
    },
    'Filter Object Test Catagory: Name': browser => {
        pageObjects
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .setValue('@filterObjectInput', ["name"])
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('"Jimmy Joe"')
        pageObjects
            .expect.element('@filterObjectResults').text.to.contain('"Jeremy Schrader"')
        pageObjects
            .expect.element('@filterObjectResults').text.to.contain('"Carly Armstrong"')
    },
    'Filter Object Test Catagory: Hair Color': browser => {
        pageObjects
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .setValue('@filterObjectInput', ["hairColor"])
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('"brown"')
    },
    'Filter String Test: Jessica': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Jessica"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Jessica')
    },
    'Filter String Test: Melody': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Melody"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Melody')
    },
    'Filter String Test: Tyler': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Tyler"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Tyler')
    },
    'Filter String Test: Blake': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Blake"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Blake')
    },
    'Filter String Test: Jennifer': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Jennifer"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Jennifer')
    },
    'Filter String Test: Mark': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Mark"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Mark')
    },
    'Filter String Test: Maddy': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["Maddy"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('Maddy')
    },
    'Palindrome Test: False': browser => {
        pageObjects
            .waitForElementVisible('@palindromeTitle')
            .waitForElementVisible('@palindromeInput')
            .setValue('@palindromeInput', ["test"])
            .waitForElementVisible('@palindromeButton')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('false')
    },
    'Filter Object Test Catagory: Blank': browser => {
        pageObjects
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('[]')
    },
    'Filter String Test: Blank': browser => {
        pageObjects
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('James')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Jessica')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Melody')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Tyler')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Blake')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Jennifer')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Mark')
        pageObjects
            .expect.element('@filterStringResults').text.to.contain('Maddy')
    },
    'Palindrome Test Blank': browser => {
        pageObjects
            .waitForElementVisible('@palindromeTitle')
            .waitForElementVisible('@palindromeInput')
            .waitForElementVisible('@palindromeButton')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('true')
    },
    'Sum Test Doubmel Blank': browser => {
        pageObjects
            .waitForElementVisible('@sumTitle')
            .waitForElementVisible('@sum1Input')
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('0')
    },
    'Sum Test First Blank': browser => {
        pageObjects
            .waitForElementVisible('@sumTitle')
            .waitForElementVisible('@sum1Input')
            .setValue('@sum1Input', ["30"])
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('30')
    },
    'Sum Test Second Blank': browser => {
        pageObjects
            .waitForElementVisible('@sumTitle')
            .waitForElementVisible('@sum1Input')
            .setValue('@sum2Input', ["20"])
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('20')
    },
    'All In One Test': browser => {
        pageObjects //evens and odds test
            .waitForElementVisible('@evenOddTitle')
            .waitForElementVisible('@evenOddInput')
            .setValue('@evenOddInput', ["1,2,3,4,5,6,7,8,9,10"])
            .click('@evenOddButton')
            .expect.element('@evenResults').text.to.contain('2,4,6,8,10')
        pageObjects
            .expect.element('@oddResults').text.to.contain('1,3,5,7,9')
        pageObjects //Filter Object Test
            .waitForElementVisible('@filterObjectTitle')
            .waitForElementVisible('@filterObjectInput')
            .setValue('@filterObjectInput', ["age"])
            .click('@filterObjectButton')
            .expect.element('@filterObjectResults').text.to.contain('12')
        pageObjects
            .expect.element('@filterObjectResults').text.to.contain('24')
        pageObjects //Filter String
            .waitForElementVisible('@filterStringTitle')
            .waitForElementVisible('@filterStringtInput')
            .setValue('@filterStringtInput', ["James, Jessica"])
            .click('@filterStringButton')
            .expect.element('@filterStringResults').text.to.contain('[]')
        pageObjects //Palindrome
            .waitForElementVisible('@palindromeTitle')
            .waitForElementVisible('@palindromeInput')
            .setValue('palindromeInput' , ['level'])
            .waitForElementVisible('@palindromeButton')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('true')
        pageObjects //Sums Test
            .waitForElementVisible('@sumTitle')
            .waitForElementVisible('@sum1Input')
            .setValue('@sum1Input' , ["30"])
            .setValue('@sum2Input', ["20"])
            .click('@sumButton')
            .expect.element('@sumResults').text.to.contain('50')
    },
    'Palindrome Test - Palindrome With Spaces': browser => {
        pageObjects
            .waitForElementVisible('@palindromeTitle')
            .waitForElementVisible('@palindromeInput')
            .setValue('@palindromeInput' , ['was it a rat i saw'])
            .waitForElementVisible('@palindromeButton')
            .click('@palindromeButton')
            .expect.element('@palindromeResults').text.to.contain('false')
    }
}