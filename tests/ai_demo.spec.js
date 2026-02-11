// tests/ai_demo.spec.js
const { test, expect } = require('@playwright/test');
const { getHealedLocator } = require('../healer');

test('Self-Healing AI Test Demo', async ({ page }) => {
    test.setTimeout(120000); // 2 minutes to account for AI processing

    await page.goto('https://the-internet.herokuapp.com/login');

    const brokenSelector = '#completely-wrong-selector-id'; 

    try {
        // Trigger the error quickly
        await page.click(brokenSelector, { timeout: 3000 });
    } catch (error) {
        console.log("⚠️ Selector Failed. Booting AI Recovery...");
        
        const html = await page.content();
        const healedSelector = await getHealedLocator(error.message, html);
        
        console.log(`✅ AI Extracted Selector: ${healedSelector}`);
        
        // We use a 20s timeout here just in case the page is slow
        await page.click(healedSelector, { timeout: 20000 });
    }

    // Success check
    await expect(page.locator('h2')).toContainText('Login Page');
    console.log("🎉 SUCCESS: Test passed after AI healing!");
});