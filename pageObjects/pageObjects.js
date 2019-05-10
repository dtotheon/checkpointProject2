module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        evenOddInput: 'input[name="evenOddInput"]',

        evenOddButton:'button[name="evenOddButton"]',

        evenResults:'span[name="evenResults"]',

        oddResults:'span[name="oddResults"]',

        evenOddTitle:{
        selector:'//*/h4[text()=" Evens and Odds "]',
        locateStrategy: 'xpath'},


        filterObjectInput: 'input[name="objectFilterInput"]',

        filterObjectButton:'button[name="objectFilterButton"]',

        filterObjectResults:'span[name="objectFilterResults"]',

        filterObjectTitle:{
            selector: '//*/h4[text()=" Filter String "]',
            locateStrategy: 'xpath'},



        filterStringtInput: '#nameFilterInput',

        filterStringButton: '#nameFilterButton',

        filterStringResults: 'span[name="nameFilterResults"]',

        filterStringTitle: {
            selector:'//*/h4[text()=" Filter Object "]',
            locateStrategy: 'xpath'},


        palindromeInput: 'input[name="palindromeInput"]',

        palindromeButton: 'button[name="palindromeButton"]',

        palindromeResults: 'span[name="palindromeResults"]',

        palindromeTitle:{
            selector: '//*/h4[text()=" Palindrome "]',
            locateStrategy: 'xpath'},



        sum1Input: 'input[name="sumInput1"]',

        sum2Input: 'input[name="sumInput2"]',

        sumButton: 'button[name="sumButton"]',

        sumResults: 'span[name="sumResults"]',

        sumTitle:{
            selector: '//*/h4[text()=" Sum "]',
            locateStrategy: 'xpath'},
    },
}