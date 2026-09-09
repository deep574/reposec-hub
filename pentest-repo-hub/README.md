# RepoSec Hub — Top Web Pentesting & OSINT GitHub Repositories

A curated, interactive web directory and resource portal indexing **42 of the most essential open-source security repositories on GitHub** for Web Penetration Testing, OSINT, Network Diagnostics, Password Auditing, Forensics, and Cloud Security.

---

## ⚡ Core Features

- **Direct GitHub Access**: One-click navigation to official repositories.
- **Instant Git Clone**: One-click copy for `git clone https://github.com/...`.
- **Quick-Start Commands**: Direct copy for official install syntax (`go install`, `pip install`, `make`, `docker`).
- **Real-Time Search (`⌘K`)**: Instant filtering by repository name, language, tag, or author.
- **Batch Clone Script Generator**: Select categories and generate a ready-to-run bash script to clone the entire tool suite in one command.
- **Modern Obsidian/Cyberpunk Theme**: Fast, responsive, dark-mode design with glowing accents and zero external runtime dependencies.

---

## 📋 Categories & Repositories (42 Total)

### 1. 🌐 Web Penetration Testing & APIs (12 Repositories)
- **OWASP ZAP** (`zaproxy/zaproxy`) — Full-featured intercepting proxy & automated scanner.
- **Nuclei** (`projectdiscovery/nuclei`) — Fast YAML template-based vulnerability scanner.
- **SQLMap** (`sqlmapproject/sqlmap`) — Automated SQL injection and database audit engine.
- **FFUF** (`ffuf/ffuf`) — Blazingly fast Go web fuzzer and directory brute-forcer.
- **Gobuster** (`OJ/gobuster`) — Directory, DNS, and vhost brute-forcer written in Go.
- **Nikto** (`sullo/nikto`) — Web server configuration and dangerous file scanner.
- **Wafw00f** (`EnableSecurity/wafw00f`) — Web Application Firewall (WAF) fingerprinting tool.
- **Arjun** (`s0md3v/Arjun`) — HTTP hidden parameter discovery suite.
- **Katana** (`projectdiscovery/katana`) — Next-generation crawler with headless browser engine.
- **HTTPX** (`projectdiscovery/httpx`) — Fast, multi-purpose HTTP probe and status grabber.
- **DalFox** (`hahwul/dalfox`) — Parameter analysis and XSS scanning engine.
- **Commix** (`commixproject/commix`) — Automated command injection testing tool.

### 2. 🔍 OSINT & Reconnaissance (10 Repositories)
- **OWASP Amass** (`owasp-amass/amass`) — In-depth attack surface mapping and DNS asset discovery.
- **Subfinder** (`projectdiscovery/subfinder`) — Fast passive subdomain discovery tool.
- **Sherlock** (`sherlock-project/sherlock`) — Hunt social media accounts across 400+ platforms.
- **theHarvester** (`laramies/theHarvester`) — Gather emails, names, subdomains from public search engines.
- **SpiderFoot** (`smicallef/spiderfoot`) — OSINT automation querying 200+ threat intel feeds.
- **GHunt** (`mxrch/GHunt`) — Modular Google account and metadata investigator.
- **Photon** (`s0md3v/Photon`) — Fast OSINT web crawler extracting keys, emails, and endpoints.
- **Social Analyzer** (`qeeqbox/social-analyzer`) — Profile analysis across 1000+ social platforms.
- **Masscan** (`robertdavidgraham/masscan`) — Asynchronous 10M packets/sec port scanner.
- **Recon-ng** (`lanmaster53/recon-ng`) — Modular web reconnaissance framework.

### 3. 📡 Network Diagnostics & Traffic Analysis (6 Repositories)
- **Nmap** (`nmap/nmap`) — Network exploration and port auditing tool.
- **Wireshark & TShark** (`wireshark/wireshark`) — Industry-standard packet analyzer.
- **Zeek** (`zeek/zeek`) — Network security monitoring and transaction logging.
- **RustScan** (`RustScan/RustScan`) — High-speed port scanner (65k ports in 3 seconds).
- **Bettercap** (`bettercap/bettercap`) — Extensible network debugging and reconnaissance.
- **Scapy** (`secdev/scapy`) — Python packet manipulation and crafting engine.

### 4. 🔑 Credential & Wordlists (5 Repositories)
- **SecLists** (`danielmiessler/SecLists`) — Security tester's collection of wordlists and payloads.
- **John the Ripper** (`openwall/john`) — Password policy auditing and hash verification.
- **Hashcat** (`hashcat/hashcat`) — GPU-accelerated hash benchmark and testing engine.
- **THC-Hydra** (`vanhauser-thc/thc-hydra`) — Parallel network logon authentication tester.
- **Hob0Rules** (`praetorian-inc/Hob0Rules`) — Statistical password mutation rules.

### 5. 🔬 DFIR & Forensics (5 Repositories)
- **Volatility 3** (`volatilityfoundation/volatility3`) — Advanced volatile RAM memory forensics.
- **The Sleuth Kit** (`sleuthkit/sleuthkit`) — Disk image forensics, partition tables, and file carving.
- **Velociraptor** (`Velocidex/velociraptor`) — Endpoint visibility and VQL hunting platform.
- **YARA** (`VirusTotal/yara`) — Rule-based pattern matching and signature classification.
- **Plaso** (`log2timeline/plaso`) — Unified forensic super timeline generation engine.

### 6. ☁️ Cloud & Container Security (4 Repositories)
- **Trivy** (`aquasecurity/trivy`) — Comprehensive container and IaC vulnerability scanner.
- **Prowler** (`prowler-cloud/prowler`) — AWS, Azure, and GCP security posture assessment.
- **ScoutSuite** (`nccgroup/ScoutSuite`) — Multi-cloud API security auditing tool.
- **Checkov** (`bridgecrewio/checkov`) — Static code analysis for Terraform, K8s, and IaC.

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch (macOS)
```bash
open /Users/gnanadeep/.gemini/antigravity/scratch/pentest-repo-hub/index.html
```

### Option 2: Local HTTP Server
```bash
cd /Users/gnanadeep/.gemini/antigravity/scratch/pentest-repo-hub
python3 -m http.server 8080
```
Then visit **`http://localhost:8080`** in your browser.
