# 🚀 K6 Mobile Load Testing & Compiler Benchmarking Suite

<p align="center">
  <img src="https://img.shields.io/badge/Status-100%25%20SUCCESS-brightgreen?style=for-the-badge&logo=k6" alt="Status">
  <img src="https://img.shields.io/badge/Platform-Termux%20%2F%20Android-blue?style=for-the-badge&logo=android" alt="Platform">
  <img src="https://img.shields.io/badge/Engine-Golang-00ADD8?style=for-the-badge&logo=go" alt="Go">
</p>

An advanced performance testing and load-simulation project built directly on Android using **Termux, Go, and K6**, designed to stress-test web applications and online compilers (such as Judge0 API integrations).

---

## 🌟 Features

* **📱 Mobile-Native Setup:** Runs seamlessly on ARM64 Android devices via Termux without needing a PC.
* **⚡ API & Compiler Benchmarking:** Simulates multiple Virtual Users (VUs) to measure response times and server reliability.
* **🛡️ Threshold Validation:** Automated checks for request failures and latency limits ($p(95)$ thresholds).
* **📈 100% Success Rate:** Validated under concurrent load testing conditions.

---

## 🛠️ Tech Stack

* **Language:** Go (Golang)[span_0](start_span)[span_0](end_span)
* **Load Testing Engine:** Grafana K6[span_1](start_span)[span_1](end_span)
* **Environment:** Termux (Android ARM64)[span_2](start_span)[span_2](end_span)
* **Target Tested:** Online Compiler & Judge0 API[span_3](start_span)[span_3](end_span)[span_4](start_span)[span_4](end_span)

---

## ⚙️ Quick Start

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/rameshwarkharade001-byte/k6-compiler-load-test.git
   cd k6-compiler-load-test
   \`\`\`

2. **Run the compiler load test:**
   \`\`\`bash
   k6 run compiler-load-test.js
   \`\`\`

---

## 📊 Performance Results
* **Virtual Users (VUs):** 10 concurrent bots[span_5](start_span)[span_5](end_span)
* **Test Duration:** 15s[span_6](start_span)[span_6](end_span)
* **Request Success Rate:** 100.00% (`0.00% failed`)[span_7](start_span)[span_7](end_span)

---
*Created with ❤️ by Rameshwar Kharade*
