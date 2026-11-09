# K6 Mobile Load Testing & Compiler Benchmarking Suite

An advanced performance testing and load-simulation project built directly on Android using **Termux, Go, and K6**, designed to stress-test web applications and online compilers (such as Judge0 API integrations).

## 🚀 Features
- **Mobile-Native Setup:** Runs seamlessly on ARM64 Android devices via Termux.
- **API & Compiler Benchmarking:** Simulates multiple Virtual Users (VUs) to measure response times and server reliability.
- **Threshold Validation:** Automated checks for request failures and latency limits ($p(95)$ thresholds).
- **100% Success Rate:** Validated under concurrent load testing conditions.

## 🛠️ Tech Stack
- **Engine:** Go (Golang)
- **Tool:** Grafana K6
- **Environment:** Termux (Android ARM64)

## 📊 Quick Start
Run the performance test script:
\`\`\`bash
k6 run compiler-load-test.js
\`\`\`
