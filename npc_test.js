const email = 'individual@yopmail.com'
const pass = 'Password123123123!'
const fname = 'Hervon'

describe('Log In Test', function () {
    it('Loggin In', function () {
        cy.visit('https://npc.multidemos.com/')

        // Input an email address
        cy.get('[type="email"]').type(email).wait(1000)

        // Enter Password
        cy.get('[type="password"]').type(pass).wait(1000)

        // Click Log in button
        cy.get('[type="submit"]').click()
    })
})

describe('Register Test', function () {
    it('User Registration', function () {

        // Click log out button
        cy.contains('Register').click().wait(1000)
    })
})

describe('First Name Test', function () {
    it('Must able to input first name', function () {

        cy.get('.border-bottom > .form-row > :nth-child(1) > .full-input').type('Balong')
    })
})

describe('Middle Intinial Test', function () {
    it('Must able to input middle initial', function () {

        cy.get('.border-bottom > .form-row > :nth-child(2) > .full-input').type('B')
    })
})

describe('Last Name Test', function () {
    it('Must able to input last name', function () {

        cy.get('.border-bottom > .form-row > :nth-child(3) > .full-input').type('Romualdo')
    })
})


describe('Log out Test', function () {
    it('Log out', function () {

        // Click dropdown button to view log out button
        cy.get('[class="nav-link dropdown-toggle p-0"]').click().wait(1000)

        // Click log out button
        cy.contains('Logout').click().wait(1000)

        // Log out confirmation
        cy.contains('Yes').click()
    })
})

    // File Upload 
// describe('Log In Test', function () {
//     it('Loggin In', function () {
//         cy.visit('https://npc.multidemos.com/')

//         const fileName = 'data.json';

//         cy.fixture(fileName).then(fileContent => {
//             cy.get('[data-cy="file-input"]').upload({ fileContent, fileName, mimeType: 'application/json' });
//         });
//     })
// })