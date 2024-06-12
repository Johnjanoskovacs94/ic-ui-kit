/// <reference types="@cypress-audit/lighthouse" />

const customThresholds = {
    performance: 80,
    accessibility: 90,
    'best-practices': 80,
    'first-contentful-paint': 2000,
    'largest-contentful-paint': 3000,
    'speed-index': 2000,
}

const desktopConfig = {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
}

// const lighthouseConfig = {
//     settings: { output: "html" },
//     extends: "lighthouse:default",
// };

describe("Performance testing", () => { 
    it("should render buttons within performance threshold", () => {
        cy.visit("iframe.html?args=&id=react-components-button--size&viewMode=story");
        cy.lighthouse(customThresholds, desktopConfig);
    })

    it("should render multiple buttons within performance threshold", () => {
        cy.visit("iframe.html?args=&id=react-components-button--many-buttons&viewMode=story");
        cy.lighthouse(customThresholds, desktopConfig);
    })

    it.only('lighthouse', { baseUrl: null }, () => {
        cy.visit('http://localhost:1234');
        cy.lighthouse(customThresholds, desktopConfig);
    })

    // it("generates Lighthouse report", () => {
    //     cy.visit("iframe.html?args=&id=react-components-button--many-buttons&viewMode=story");
    //     cy.lighthouse(customThresholds, desktopConfig, lighthouseConfig);
    // })
})