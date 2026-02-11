// healer.js
async function getHealedLocator(errorMessage, htmlSnapshot) {
    console.log("🤖 AI is analyzing the DOM...");
    
    const prompt = `Return ONLY the CSS selector for the login button. 
    Example: button[type='submit']
    HTML: ${htmlSnapshot.substring(0, 1000)}`;

    try {
        const response = await fetch('http://localhost:11434/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: "llama3.2:1b",
                prompt: prompt,
                stream: false,
                options: { temperature: 0.1 }
            })
        });

        const data = await response.json();
        const raw = data.response.trim();

        // 🔥 THE FIX: This looks for any text inside [] or anything starting with a . or #
        // It ignores all the "The correct selector is..." fluff.
        const matches = raw.match(/\[[^\]]+\]/) || raw.match(/\.[a-zA-Z0-9_-]+/) || raw.match(/#[a-zA-Z0-9_-]+/);
        
        // Fallback: If regex fails, use the very last word of the response (often the selector)
        let finalSelector = matches ? matches[0] : raw.split(/\s+/).pop();
        
        return finalSelector.replace(/['"`]/g, "").replace(/\.$/, ""); 
    } catch (err) {
        return "button[type='submit']"; // Final safety fallback
    }
}

module.exports = { getHealedLocator };