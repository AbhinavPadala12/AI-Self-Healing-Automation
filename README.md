#  AI-Driven Self-Healing Automation Framework

[![Playwright Test](https://img.shields.io/badge/Testing-Playwright-green)](https://playwright.dev/)
[![AI-Model](https://img.shields.io/badge/AI-Ollama--Llama3.2-blue)](https://ollama.com/)

##  The Vision
As a Computer Science Master's student focused on DevOps and AI, I developed this framework to solve the #1 bottleneck in software testing: **Flaky Selectors.** This engine doesn't just report failures; it repairs itself in real-time.

##  Key Features
* **Autonomous Recovery:** Uses a local **Llama 3.2 LLM** to analyze DOM snapshots when a locator fails.
* **Sanitized Inference:** Implements Regex-based extraction to filter AI "hallucinations" and extract valid CSS selectors.
* **Cross-Browser Resilience:** Successfully validated across **Chromium, Firefox, and WebKit** engines.
* **Privacy-First:** Utilizes local inference via **Ollama**, ensuring sensitive HTML data never leaves the local environment.

##  Live Results
> **[VIEW LIVE TEST REPORT HERE](https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/)**

### Performance Snapshot
| Browser | Status | Healing Time |
| :--- | :--- | :--- |
| Chromium | ✅ Passed | ~5.6s |
| Firefox | ✅ Passed | ~7.6s |
| WebKit | ✅ Passed | ~7.3s |

##  Tech Stack
* **Language:** JavaScript (Node.js)
* **Automation:** Playwright
* **AI Engine:** Ollama (Local Llama 3.2:1b)
* **Logic:** Custom Regex-based AI Response Sanitizer

##  Project Structure
* `healer.js`: The AI interaction layer and response parser.
* `tests/ai_demo.spec.js`: E2E test suite with embedded self-healing try-catch blocks.
* `playwright.config.js`: Optimized for sequential AI inference (1 worker).