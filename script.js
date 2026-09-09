/* ==========================================================================
   REPOSPEC HUB - GITHUB REPOSITORIES DATA & INTERACTIVE LOGIC
   Curated, active, open-source security tools directory
   ========================================================================== */

const REPOS_DATA = [
  // ==========================================
  // WEB PENTESTING & APIS (web-pentest)
  // ==========================================
  {
    id: 'owasp-zap',
    name: 'OWASP ZAP',
    avatar: '⚡',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'zaproxy/zaproxy',
    url: 'https://github.com/zaproxy/zaproxy',
    language: 'Java',
    desc: 'The world’s most widely used web application security scanner. Intercepting proxy, automated active/passive auditing, and API security assessment.',
    features: ['Intercepting Proxy', 'Automated Active Scanner', 'REST API Support', 'OWASP Top 10'],
    cloneCmd: 'git clone https://github.com/zaproxy/zaproxy.git',
    installCmd: 'docker run -u zap -p 8080:8080 -i ghcr.io/zaproxy/zaproxy:stable zap-webswing.sh'
  },
  {
    id: 'nuclei',
    name: 'Nuclei',
    avatar: '🎯',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'projectdiscovery/nuclei',
    url: 'https://github.com/projectdiscovery/nuclei',
    language: 'Go',
    desc: 'Fast and customizable vulnerability scanner based on simple YAML-based DSL templates for modern web perimeter auditing and zero-day detection.',
    features: ['YAML Template Engine', 'Protocol Agnostic (HTTP/DNS/TCP)', 'Zero False Positives Focus', 'CI/CD Ready'],
    cloneCmd: 'git clone https://github.com/projectdiscovery/nuclei.git',
    installCmd: 'go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest'
  },
  {
    id: 'sqlmap',
    name: 'SQLMap',
    avatar: '💉',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'sqlmapproject/sqlmap',
    url: 'https://github.com/sqlmapproject/sqlmap',
    language: 'Python',
    desc: 'Automatic SQL injection and database takeover tool supporting MySQL, Oracle, PostgreSQL, Microsoft SQL Server, and SQLite engines.',
    features: ['Boolean / Time / Error Injection', 'Database Fingerprinting', 'File Read / Write', 'WAF Tamper Bypass'],
    cloneCmd: 'git clone --depth 1 https://github.com/sqlmapproject/sqlmap.git sqlmap-dev',
    installCmd: 'python3 sqlmap.py --version'
  },
  {
    id: 'ffuf',
    name: 'FFUF',
    avatar: '🌪️',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'ffuf/ffuf',
    url: 'https://github.com/ffuf/ffuf',
    language: 'Go',
    desc: 'Blazingly fast web fuzzer written in Go for web application directory discovery, virtual host identification, and parameter brute-forcing.',
    features: ['Multi-Threaded Fuzzing', 'Status / Size / Word Filtering', 'Recursion Support', 'JSON / CSV Export'],
    cloneCmd: 'git clone https://github.com/ffuf/ffuf.git',
    installCmd: 'go install github.com/ffuf/ffuf/v2@latest'
  },
  {
    id: 'gobuster',
    name: 'Gobuster',
    avatar: '👻',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'OJ/gobuster',
    url: 'https://github.com/OJ/gobuster',
    language: 'Go',
    desc: 'Directory/file, DNS and VHost brute-forcing tool written in Go, optimized for speed and low CPU utilization during web audits.',
    features: ['URI Directory Bruteforce', 'DNS Subdomain Bruteforce', 'Virtual Host Enumeration', 'S3 Bucket Discovery'],
    cloneCmd: 'git clone https://github.com/OJ/gobuster.git',
    installCmd: 'go install github.com/OJ/gobuster/v3@latest'
  },
  {
    id: 'nikto',
    name: 'Nikto',
    avatar: '🛡️',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'sullo/nikto',
    url: 'https://github.com/sullo/nikto',
    language: 'Perl',
    desc: 'Open-source web server scanner that tests for over 6,700 dangerous files/programs, outdated versions, and server configuration problems.',
    features: ['Server Header Audit', 'Default File Check', 'SSL / TLS Diagnostic', 'Proxy & Evasion Flags'],
    cloneCmd: 'git clone https://github.com/sullo/nikto.git',
    installCmd: 'perl program/nikto.pl -H'
  },
  {
    id: 'wafw00f',
    name: 'Wafw00f',
    avatar: '🧱',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'EnableSecurity/wafw00f',
    url: 'https://github.com/EnableSecurity/wafw00f',
    language: 'Python',
    desc: 'The Web Application Firewall (WAF) fingerprinting utility. Detects and identifies hundreds of commercial and cloud WAF protections.',
    features: ['Cloudflare / AWS / Akamai Detection', 'HTTP Response Probing', 'Custom Header Analysis', 'Silent Auditing'],
    cloneCmd: 'git clone https://github.com/EnableSecurity/wafw00f.git',
    installCmd: 'pip install wafw00f'
  },
  {
    id: 'arjun',
    name: 'Arjun',
    avatar: '🏹',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 's0md3v/Arjun',
    url: 'https://github.com/s0md3v/Arjun',
    language: 'Python',
    desc: 'HTTP parameter discovery suite that finds hidden GET, POST, and JSON parameters without triggering noisy server errors.',
    features: ['Hidden Parameter Mining', 'GET / POST / JSON Support', 'Multi-Threaded Probing', 'Burp Suite Suite Export'],
    cloneCmd: 'git clone https://github.com/s0md3v/Arjun.git',
    installCmd: 'pip3 install arjun'
  },
  {
    id: 'katana',
    name: 'Katana',
    avatar: '🗡️',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'projectdiscovery/katana',
    url: 'https://github.com/projectdiscovery/katana',
    language: 'Go',
    desc: 'Next-generation crawling and spidering framework with headless browser support, API parsing, and customizable scope filtering.',
    features: ['Standard & Headless Crawling', 'JavaScript Endpoint Parsing', 'Custom Depth Control', 'Pipeline Integration'],
    cloneCmd: 'git clone https://github.com/projectdiscovery/katana.git',
    installCmd: 'go install github.com/projectdiscovery/katana/cmd/katana@latest'
  },
  {
    id: 'httpx',
    name: 'HTTPX',
    avatar: '🌐',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'projectdiscovery/httpx',
    url: 'https://github.com/projectdiscovery/httpx',
    language: 'Go',
    desc: 'Multi-purpose HTTP toolkit that allows running multiple probes using retryablehttp library for mass web probing and title grabbing.',
    features: ['Mass Subdomain Probing', 'Status Code & Title Grabbing', 'TLS Certificate Extraction', 'Tech Stack Detection'],
    cloneCmd: 'git clone https://github.com/projectdiscovery/httpx.git',
    installCmd: 'go install -v github.com/projectdiscovery/httpx/cmd/httpx@latest'
  },
  {
    id: 'dalfox',
    name: 'DalFox',
    avatar: '🦊',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'hahwul/dalfox',
    url: 'https://github.com/hahwul/dalfox',
    language: 'Go',
    desc: 'Powerful parameter analysis and XSS scanner engine designed for security audits and bug bounty automation.',
    features: ['DOM & Reflected XSS Audit', 'Parameter Analysis', 'Pipeline / Stdin Friendly', 'REST API Interface'],
    cloneCmd: 'git clone https://github.com/hahwul/dalfox.git',
    installCmd: 'go install github.com/hahwul/dalfox/v2@latest'
  },
  {
    id: 'commix',
    name: 'Commix',
    avatar: '💻',
    category: 'web-pentest',
    categoryLabel: 'Web Pentesting',
    repo: 'commixproject/commix',
    url: 'https://github.com/commixproject/commix',
    language: 'Python',
    desc: 'Automated all-in-one command injection exploitation and vulnerability detection environment for web application assessments.',
    features: ['Results-Based Injection', 'Blind Injection Modes', 'Pseudo-Shell Execution', 'WAF Tamper Scripts'],
    cloneCmd: 'git clone https://github.com/commixproject/commix.git commix',
    installCmd: 'python3 commix.py --version'
  },

  // ==========================================
  // OSINT & RECONNAISSANCE (osint)
  // ==========================================
  {
    id: 'amass',
    name: 'OWASP Amass',
    avatar: '🌐',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'owasp-amass/amass',
    url: 'https://github.com/owasp-amass/amass',
    language: 'Go',
    desc: 'In-depth attack surface mapping and external asset discovery using active/passive DNS, Certificate Transparency, and routing protocols.',
    features: ['Passive OSINT Aggregation', 'Active DNS Resolution', 'ASN Netblock Mapping', 'Graph Database Storage'],
    cloneCmd: 'git clone https://github.com/owasp-amass/amass.git',
    installCmd: 'go install -v github.com/owasp-amass/amass/v4/...@master'
  },
  {
    id: 'subfinder',
    name: 'Subfinder',
    avatar: '🔍',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'projectdiscovery/subfinder',
    url: 'https://github.com/projectdiscovery/subfinder',
    language: 'Go',
    desc: 'Subdomain discovery tool that discovers valid subdomains for websites by using passive online sources without touching target servers.',
    features: ['Passive OSINT Only', 'Fast Multi-Source Search', 'API Key Integration', 'Stream Output for Piping'],
    cloneCmd: 'git clone https://github.com/projectdiscovery/subfinder.git',
    installCmd: 'go install -v github.com/projectdiscovery/subfinder/v2/cmd/subfinder@latest'
  },
  {
    id: 'sherlock',
    name: 'Sherlock',
    avatar: '🔎',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'sherlock-project/sherlock',
    url: 'https://github.com/sherlock-project/sherlock',
    language: 'Python',
    desc: 'Hunt down social media accounts by username across over 400 social networks and online platforms in seconds.',
    features: ['400+ Social Platforms', 'Tor Proxy Routing Support', 'CSV / JSON Export', 'High-Speed Async Checks'],
    cloneCmd: 'git clone https://github.com/sherlock-project/sherlock.git',
    installCmd: 'pip3 install -r requirements.txt'
  },
  {
    id: 'theharvester',
    name: 'theHarvester',
    avatar: '🌾',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'laramies/theHarvester',
    url: 'https://github.com/laramies/theHarvester',
    language: 'Python',
    desc: 'Simple yet powerful tool designed for gathering emails, names, subdomains, open ports, and banners from public internet sources.',
    features: ['Email Harvesting', 'Employee Name Enumeration', 'Search Engine OSINT', 'Shodan API Integration'],
    cloneCmd: 'git clone https://github.com/laramies/theHarvester.git',
    installCmd: 'pip3 install -r requirements/base.txt'
  },
  {
    id: 'spiderfoot',
    name: 'SpiderFoot',
    avatar: '🕷️',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'smicallef/spiderfoot',
    url: 'https://github.com/smicallef/spiderfoot',
    language: 'Python',
    desc: 'Open-source intelligence (OSINT) automation tool that queries over 200 public data sources for IP addresses, domains, and phone numbers.',
    features: ['200+ Module Integrations', 'Interactive Web UI', 'Threat Intelligence Feeds', 'Graph Correlation Engine'],
    cloneCmd: 'git clone https://github.com/smicallef/spiderfoot.git',
    installCmd: 'pip3 install -r requirements.txt && python3 sf.py -l 127.0.0.1:5001'
  },
  {
    id: 'ghunt',
    name: 'GHunt',
    avatar: '🕶️',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'mxrch/GHunt',
    url: 'https://github.com/mxrch/GHunt',
    language: 'Python',
    desc: 'Modular Google OSINT suite to analyze Google accounts, Google Maps reviews, Google Calendar, and YouTube profile metadata.',
    features: ['Google ID Extraction', 'Google Maps History', 'Google Drive Permissions', 'CLI & GUI Support'],
    cloneCmd: 'git clone https://github.com/mxrch/GHunt.git',
    installCmd: 'pipx install ghunt'
  },
  {
    id: 'photon',
    name: 'Photon',
    avatar: '💡',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 's0md3v/Photon',
    url: 'https://github.com/s0md3v/Photon',
    language: 'Python',
    desc: 'Incredibly fast crawler designed for OSINT. Extracts URLs with parameters, secret keys, emails, social accounts, and subdomains.',
    features: ['Secret API Key Regex Search', 'Social Media Account Extraction', 'Custom Regex Matching', 'Multi-Threaded Crawler'],
    cloneCmd: 'git clone https://github.com/s0md3v/Photon.git',
    installCmd: 'pip3 install -r requirements.txt'
  },
  {
    id: 'social-analyzer',
    name: 'Social Analyzer',
    avatar: '👥',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'qeeqbox/social-analyzer',
    url: 'https://github.com/qeeqbox/social-analyzer',
    language: 'JavaScript',
    desc: 'API, CLI, and Web App for analyzing and finding a person\'s profile across 1000+ social media platforms and websites.',
    features: ['1000+ Websites Tested', 'Web GUI & CLI', 'Multi-Factor Pattern Matching', 'Metadata Extraction'],
    cloneCmd: 'git clone https://github.com/qeeqbox/social-analyzer.git',
    installCmd: 'npm install && npm start'
  },
  {
    id: 'masscan',
    name: 'Masscan',
    avatar: '🚀',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'robertdavidgraham/masscan',
    url: 'https://github.com/robertdavidgraham/masscan',
    language: 'C',
    desc: 'TCP port scanner that can scan the entire Internet in under 5 minutes, transmitting 10 million packets per second.',
    features: ['Asynchronous SYN Scanning', '10M Packets/Second', 'Custom Banner Grabbing', 'Subnet Scope Controls'],
    cloneCmd: 'git clone https://github.com/robertdavidgraham/masscan.git',
    installCmd: 'make && sudo make install'
  },
  {
    id: 'recon-ng',
    name: 'Recon-ng',
    avatar: '🧭',
    category: 'osint',
    categoryLabel: 'OSINT & Recon',
    repo: 'lanmaster53/recon-ng',
    url: 'https://github.com/lanmaster53/recon-ng',
    language: 'Python',
    desc: 'Full-featured web reconnaissance framework with independent modules, database interaction, and built-in convenience functions.',
    features: ['Modular Architecture', 'Database-Backed Findings', 'Interactive Shell', 'API Key Management'],
    cloneCmd: 'git clone https://github.com/lanmaster53/recon-ng.git',
    installCmd: 'pip3 install -r REQUIREMENTS'
  },

  // ==========================================
  // NETWORK DIAGNOSTICS & PROTOCOLS (network)
  // ==========================================
  {
    id: 'nmap',
    name: 'Nmap (Network Mapper)',
    avatar: '🔍',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'nmap/nmap',
    url: 'https://github.com/nmap/nmap',
    language: 'C',
    desc: 'The official source of Nmap, the foundational network exploration and security auditing tool used by system administrators worldwide.',
    features: ['Host Discovery & Ping Sweeps', 'Port & Service Fingerprinting', 'NSE Lua Script Engine', 'OS Architecture Detection'],
    cloneCmd: 'git clone https://github.com/nmap/nmap.git',
    installCmd: './configure && make && sudo make install'
  },
  {
    id: 'wireshark',
    name: 'Wireshark & TShark',
    avatar: '🦈',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'wireshark/wireshark',
    url: 'https://github.com/wireshark/wireshark',
    language: 'C',
    desc: 'The world\'s foremost and widely-used network protocol analyzer for live packet inspection, protocol troubleshooting, and PCAP analysis.',
    features: ['Deep Protocol Inspection', 'Live Packet Capture', 'TLS Decryption Support', 'Powerful Display Filters'],
    cloneCmd: 'git clone https://github.com/wireshark/wireshark.git',
    installCmd: 'mkdir build && cd build && cmake .. && make'
  },
  {
    id: 'zeek',
    name: 'Zeek Network Monitor',
    avatar: '🛡️',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'zeek/zeek',
    url: 'https://github.com/zeek/zeek',
    language: 'C++',
    desc: 'Powerful network analysis framework that provides comprehensive, structured transaction logs, file extraction, and protocol insights.',
    features: ['Protocol Transaction Logs', 'File Extraction from PCAP', 'Event-Driven Scripting', 'Enterprise Scale Analysis'],
    cloneCmd: 'git clone --recursive https://github.com/zeek/zeek.git',
    installCmd: './configure && make && sudo make install'
  },
  {
    id: 'rustscan',
    name: 'RustScan',
    avatar: '🦀',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'RustScan/RustScan',
    url: 'https://github.com/RustScan/RustScan',
    language: 'Rust',
    desc: 'Modern, high-performance port scanner that scans 65,535 ports in 3 seconds and automatically pipes open ports directly into Nmap.',
    features: ['Scans 65k Ports in 3s', 'Adaptive Timing Engine', 'Automated Nmap Script Pipe', 'Low False Positives'],
    cloneCmd: 'git clone https://github.com/RustScan/RustScan.git',
    installCmd: 'cargo install rustscan'
  },
  {
    id: 'bettercap',
    name: 'Bettercap',
    avatar: '📡',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'bettercap/bettercap',
    url: 'https://github.com/bettercap/bettercap',
    language: 'Go',
    desc: 'The complete, modular, and easily extensible tool for 802.11, BLE, and Ethernet network reconnaissance and protocol debugging.',
    features: ['Interactive Terminal & Web UI', 'BLE / 802.11 Recon', 'DNS / HTTP Proxy Debugger', 'Network Sniffing Engine'],
    cloneCmd: 'git clone https://github.com/bettercap/bettercap.git',
    installCmd: 'go install github.com/bettercap/bettercap@latest'
  },
  {
    id: 'scapy',
    name: 'Scapy',
    avatar: '🐍',
    category: 'network',
    categoryLabel: 'Network Diagnostics',
    repo: 'secdev/scapy',
    url: 'https://github.com/secdev/scapy',
    language: 'Python',
    desc: 'Python-based interactive packet manipulation program and library. Able to forge or decode packets of a vast number of protocols.',
    features: ['Packet Crafting & Injection', 'Protocol Fuzzing', 'PCAP Parsing & Decoding', 'Network Routing Probes'],
    cloneCmd: 'git clone https://github.com/secdev/scapy.git',
    installCmd: 'pip install scapy'
  },

  // ==========================================
  // CREDENTIAL & POLICY AUDITING (credential)
  // ==========================================
  {
    id: 'seclists',
    name: 'SecLists',
    avatar: '📚',
    category: 'credential',
    categoryLabel: 'Credential & Wordlists',
    repo: 'danielmiessler/SecLists',
    url: 'https://github.com/danielmiessler/SecLists',
    language: 'Text',
    desc: 'The security tester\'s companion. A collection of multiple types of lists used during security assessments (usernames, passwords, URLs, fuzz payloads).',
    features: ['RockYou & Password Dictionaries', 'Common Web Paths & Fuzz Payloads', 'DNS Subdomain Wordlists', 'HTTP Headers & User-Agents'],
    cloneCmd: 'git clone --depth 1 https://github.com/danielmiessler/SecLists.git',
    installCmd: 'ls -la SecLists/Passwords/'
  },
  {
    id: 'john',
    name: 'John the Ripper',
    avatar: '💀',
    category: 'credential',
    categoryLabel: 'Credential & Wordlists',
    repo: 'openwall/john',
    url: 'https://github.com/openwall/john',
    language: 'C',
    desc: 'Fast password cracker and security policy auditor supporting hundreds of hash and cipher types to identify weak enterprise credentials.',
    features: ['Single / Wordlist / Incremental Modes', 'Automated Rule Mangling', 'Multi-Core CPU Optimization', 'Hash Identification Engine'],
    cloneCmd: 'git clone https://github.com/openwall/john.git',
    installCmd: 'cd john/src && ./configure && make -s clean && make -sj4'
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    avatar: '⚡',
    category: 'credential',
    categoryLabel: 'Credential & Wordlists',
    repo: 'hashcat/hashcat',
    url: 'https://github.com/hashcat/hashcat',
    language: 'C',
    desc: 'World\'s fastest hash cracker and password security testing engine supporting GPU acceleration across NVIDIA, AMD, and Intel OpenCL/CUDA.',
    features: ['Hardware GPU Acceleration', 'Mask & Combinator Modes', 'Thermal Throttle Protections', 'Enterprise Hash Verification'],
    cloneCmd: 'git clone https://github.com/hashcat/hashcat.git',
    installCmd: 'make && sudo make install'
  },
  {
    id: 'thc-hydra',
    name: 'THC-Hydra',
    avatar: '🐉',
    category: 'credential',
    categoryLabel: 'Credential & Wordlists',
    repo: 'vanhauser-thc/thc-hydra',
    url: 'https://github.com/vanhauser-thc/thc-hydra',
    language: 'C',
    desc: 'Very fast network logon auditor which supports numerous protocols to attack (SSH, FTP, HTTP POST/Basic, RDP, MySQL, VNC).',
    features: ['50+ Network Protocols Supported', 'High Parallelism & Speed', 'SSL / TLS Connection Support', 'Module-Based Architecture'],
    cloneCmd: 'git clone https://github.com/vanhauser-thc/thc-hydra.git',
    installCmd: './configure && make && sudo make install'
  },
  {
    id: 'hob0rules',
    name: 'Hob0Rules',
    avatar: '📜',
    category: 'credential',
    categoryLabel: 'Credential & Wordlists',
    repo: 'praetorian-inc/Hob0Rules',
    url: 'https://github.com/praetorian-inc/Hob0Rules',
    language: 'Text',
    desc: 'Password cracking rules for Hashcat based on statistics and industry password pattern analysis for testing complexity policies.',
    features: ['Statistical Mutation Rules', 'Hashcat & John Compatible', 'Top Enterprise Passwords', 'Optimized Rule Files'],
    cloneCmd: 'git clone https://github.com/praetorian-inc/Hob0Rules.git',
    installCmd: 'cat Hob0Rules/hob064.rule | head -n 20'
  },

  // ==========================================
  // DFIR & FORENSICS (forensics)
  // ==========================================
  {
    id: 'volatility3',
    name: 'Volatility 3',
    avatar: '🧠',
    category: 'forensics',
    categoryLabel: 'DFIR & Forensics',
    repo: 'volatilityfoundation/volatility3',
    url: 'https://github.com/volatilityfoundation/volatility3',
    language: 'Python',
    desc: 'The world\'s most widely used memory forensics framework for extracting digital artifacts from volatile RAM memory dumps.',
    features: ['Windows / Linux / macOS RAM Analysis', 'Process Tree & Hook Detection', 'Network Socket Recovery', 'Injected Code Analysis (malfind)'],
    cloneCmd: 'git clone https://github.com/volatilityfoundation/volatility3.git',
    installCmd: 'pip3 install -r requirements.txt && python3 vol.py -h'
  },
  {
    id: 'sleuthkit',
    name: 'The Sleuth Kit (TSK)',
    avatar: '🔎',
    category: 'forensics',
    categoryLabel: 'DFIR & Forensics',
    repo: 'sleuthkit/sleuthkit',
    url: 'https://github.com/sleuthkit/sleuthkit',
    language: 'C',
    desc: 'Library and collection of command line digital forensics tools for examining disk images, analyzing volume filesystems, and carving deleted files.',
    features: ['RAW / E01 Disk Image Support', 'Deleted File Carving (icat / tsk_recover)', 'Timeline Construction (mactime)', 'NTFS / ext4 / FAT Analysis'],
    cloneCmd: 'git clone https://github.com/sleuthkit/sleuthkit.git',
    installCmd: './bootstrap && ./configure && make'
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    avatar: '🦖',
    category: 'forensics',
    categoryLabel: 'DFIR & Forensics',
    repo: 'Velocidex/velociraptor',
    url: 'https://github.com/Velocidex/velociraptor',
    language: 'Go',
    desc: 'Advanced digital forensic and incident response platform providing endpoint visibility, live threat hunting, and VQL query collection.',
    features: ['Velociraptor Query Language (VQL)', 'Enterprise Endpoint Hunting', 'Real-Time Evidence Collection', 'Centralized Web GUI'],
    cloneCmd: 'git clone https://github.com/Velocidex/velociraptor.git',
    installCmd: 'go build -o velociraptor .'
  },
  {
    id: 'yara',
    name: 'YARA',
    avatar: '🔬',
    category: 'forensics',
    categoryLabel: 'DFIR & Forensics',
    repo: 'VirusTotal/yara',
    url: 'https://github.com/VirusTotal/yara',
    language: 'C',
    desc: 'The pattern matching Swiss army knife for malware researchers, incident responders, and defenders to identify and classify threats.',
    features: ['Rule-Based Text & Binary Matching', 'Process Memory Scanning', 'Pre-Compiled Rule Files', 'Extensible Python Module API'],
    cloneCmd: 'git clone https://github.com/VirusTotal/yara.git',
    installCmd: './bootstrap.sh && ./configure && make && sudo make install'
  },
  {
    id: 'plaso',
    name: 'Plaso (log2timeline)',
    avatar: '⏳',
    category: 'forensics',
    categoryLabel: 'DFIR & Forensics',
    repo: 'log2timeline/plaso',
    url: 'https://github.com/log2timeline/plaso',
    language: 'Python',
    desc: 'Super timeline all the things tool designed to extract timestamps from various computer forensics artifact files into a single unified timeline.',
    features: ['Multi-Source Timeline Extraction', 'Browser History & Syslogs', 'Registry & Event Log Parser', 'Elasticsearch / CSV Export'],
    cloneCmd: 'git clone https://github.com/log2timeline/plaso.git',
    installCmd: 'docker run -t -i -v /data:/data log2timeline/plaso log2timeline.py --version'
  },

  // ==========================================
  // CLOUD & CONTAINER SECURITY (cloud)
  // ==========================================
  {
    id: 'trivy',
    name: 'Trivy',
    avatar: '🛡️',
    category: 'cloud',
    categoryLabel: 'Cloud & Containers',
    repo: 'aquasecurity/trivy',
    url: 'https://github.com/aquasecurity/trivy',
    language: 'Go',
    desc: 'Comprehensive and versatile security scanner for container images, file systems, Git repositories, Kubernetes, and AWS/Azure clouds.',
    features: ['Container Vulnerability Scanning', 'IaC Misconfiguration Check', 'SBOM Generation & Verification', 'CI/CD Pipeline Integration'],
    cloneCmd: 'git clone https://github.com/aquasecurity/trivy.git',
    installCmd: 'go install github.com/aquasecurity/trivy/cmd/trivy@latest'
  },
  {
    id: 'prowler',
    name: 'Prowler',
    avatar: '🐆',
    category: 'cloud',
    categoryLabel: 'Cloud & Containers',
    repo: 'prowler-cloud/prowler',
    url: 'https://github.com/prowler-cloud/prowler',
    language: 'Python',
    desc: 'Open-source security tool to perform cloud security posture assessment, auditing, and compliance monitoring across AWS, Azure, and GCP.',
    features: ['CIS Benchmark Verification', 'AWS / Azure / GCP Auditing', 'HTML / CSV / JSON Reporting', 'Automated Remediation Guidance'],
    cloneCmd: 'git clone https://github.com/prowler-cloud/prowler.git',
    installCmd: 'pip install prowler'
  },
  {
    id: 'scoutsuite',
    name: 'ScoutSuite',
    avatar: '🔭',
    category: 'cloud',
    categoryLabel: 'Cloud & Containers',
    repo: 'nccgroup/ScoutSuite',
    url: 'https://github.com/nccgroup/ScoutSuite',
    language: 'Python',
    desc: 'Open-source multi-cloud security-auditing tool that gathers configuration data via APIs and presents an interactive visual dashboard of risks.',
    features: ['Multi-Cloud (AWS/GCP/Azure/OCI)', 'API Read-Only Configuration Audit', 'Interactive HTML Risk Dashboard', 'Rule Customization'],
    cloneCmd: 'git clone https://github.com/nccgroup/ScoutSuite.git',
    installCmd: 'pip install scoutsuite'
  },
  {
    id: 'checkov',
    name: 'Checkov',
    avatar: '📋',
    category: 'cloud',
    categoryLabel: 'Cloud & Containers',
    repo: 'bridgecrewio/checkov',
    url: 'https://github.com/bridgecrewio/checkov',
    language: 'Python',
    desc: 'Static code analysis tool for infrastructure as code (IaC) files (Terraform, CloudFormation, Kubernetes, Helm, Dockerfile) to prevent misconfigurations.',
    features: ['1000+ Built-In Policy Rules', 'Terraform & Kubernetes Static Check', 'CI/CD Automated Gatekeeping', 'Secrets & API Key Detection'],
    cloneCmd: 'git clone https://github.com/bridgecrewio/checkov.git',
    installCmd: 'pip install checkov'
  }
];

/* ==========================================================================
   APPLICATION LOGIC & STATE
   ========================================================================== */

let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';

document.addEventListener('DOMContentLoaded', () => {
  initCategoryCounts();
  renderRepos();
  initSearch();
  initCategoryFilters();
  initSort();
  initCopyActions();
  initBatchModal();
});

// Update category count numbers on filter buttons
function initCategoryCounts() {
  document.getElementById('count-all').textContent = REPOS_DATA.length;
  document.getElementById('statTotalRepos').textContent = `${REPOS_DATA.length}+`;

  const categories = ['web-pentest', 'osint', 'network', 'credential', 'forensics', 'cloud'];
  categories.forEach((cat) => {
    const count = REPOS_DATA.filter((r) => r.category === cat).length;
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  });
}

// Render filtered and sorted repository cards
function renderRepos() {
  const container = document.getElementById('reposGrid');
  const emptyState = document.getElementById('emptyState');
  const showingCount = document.getElementById('showingCount');
  const catLabel = document.getElementById('currentCategoryLabel');

  if (!container) return;

  // Filter
  let filtered = REPOS_DATA.filter((repo) => {
    const matchesCat = currentCategory === 'all' || repo.category === currentCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      repo.name.toLowerCase().includes(query) ||
      repo.repo.toLowerCase().includes(query) ||
      repo.desc.toLowerCase().includes(query) ||
      repo.language.toLowerCase().includes(query) ||
      repo.features.some((f) => f.toLowerCase().includes(query));

    return matchesCat && matchesSearch;
  });

  // Sort
  if (currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'language') {
    filtered.sort((a, b) => a.language.localeCompare(b.language));
  }

  showingCount.textContent = filtered.length;
  catLabel.textContent = formatCategoryLabel(currentCategory);

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  let html = '';
  filtered.forEach((repo) => {
    const featuresHtml = repo.features.map((f) => `<span class="feature-pill">${escapeHtml(f)}</span>`).join('');

    html += `
      <article class="repo-card" data-id="${repo.id}">
        <div>
          <div class="repo-header">
            <div class="repo-title-group">
              <span class="repo-avatar">${repo.avatar}</span>
              <div>
                <h3 class="repo-name">${escapeHtml(repo.name)}</h3>
                <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-slug">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  <span>${escapeHtml(repo.repo)}</span>
                </a>
              </div>
            </div>
            <div class="repo-meta-badges">
              <span class="category-tag tag-${repo.category}">${escapeHtml(repo.categoryLabel)}</span>
              <span class="lang-badge">${escapeHtml(repo.language)}</span>
            </div>
          </div>

          <p class="repo-desc">${escapeHtml(repo.desc)}</p>

          <div class="features-list">
            ${featuresHtml}
          </div>

          <div class="commands-container">
            <div class="cmd-box">
              <div class="cmd-label">
                <span>GIT CLONE COMMAND:</span>
              </div>
              <div class="cmd-line">
                <code class="cmd-code">${escapeHtml(repo.cloneCmd)}</code>
                <button class="copy-mini-btn" data-copy="${escapeQuotes(repo.cloneCmd)}">COPY</button>
              </div>
            </div>

            <div class="cmd-box">
              <div class="cmd-label">
                <span>QUICK INSTALL / RUN:</span>
              </div>
              <div class="cmd-line">
                <code class="cmd-code">${escapeHtml(repo.installCmd)}</code>
                <button class="copy-mini-btn" data-copy="${escapeQuotes(repo.installCmd)}">COPY</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card-actions">
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="btn-open-github">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>Open on GitHub</span>
          </a>
          <button class="btn-quick-clone" data-copy="${escapeQuotes(repo.cloneCmd)}">
            <span>Clone Repo</span>
          </button>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

// Search input handling & keyboard shortcut
function initSearch() {
  const input = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (input) {
    input.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderRepos();
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchQuery = '';
      currentCategory = 'all';
      if (input) input.value = '';

      document.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('active'));
      const allPill = document.querySelector('.filter-pill[data-category="all"]');
      if (allPill) allPill.classList.add('active');

      renderRepos();
    });
  }
}

// Category filter pills
function initCategoryFilters() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      renderRepos();
    });
  });
}

// Sort dropdown
function initSort() {
  const select = document.getElementById('sortSelect');
  if (!select) return;

  select.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderRepos();
  });
}

// Clipboard copy delegation
function initCopyActions() {
  const toast = document.getElementById('toastNotice');

  document.addEventListener('click', async (e) => {
    const copyBtn = e.target.closest('[data-copy]');
    if (!copyBtn) return;

    const text = copyBtn.dataset.copy;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      showToast(`[COPIED]: ${text.slice(0, 38)}...`);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = 'COPIED!';
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 1500);
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`[COPIED]: ${text.slice(0, 38)}...`);
    }
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
}

// Batch Clone Modal and Script Generator
function initBatchModal() {
  const btn = document.getElementById('batchScriptBtn');
  const modal = document.getElementById('batchModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const listContainer = document.getElementById('modalCategoriesList');
  const codeBlock = document.getElementById('batchScriptCode');
  const copyScriptBtn = document.getElementById('copyBatchScriptBtn');

  if (!btn || !modal) return;

  const categories = [
    { id: 'web-pentest', label: 'Web Pentesting & APIs' },
    { id: 'osint', label: 'OSINT & Reconnaissance' },
    { id: 'network', label: 'Network Diagnostics' },
    { id: 'credential', label: 'Credential & Wordlists' },
    { id: 'forensics', label: 'DFIR & Forensics' },
    { id: 'cloud', label: 'Cloud & Container Security' }
  ];

  listContainer.innerHTML = categories
    .map(
      (c) => `
      <label class="category-checkbox-label">
        <input type="checkbox" value="${c.id}" class="modal-cat-checkbox" checked>
        <span>${escapeHtml(c.label)}</span>
      </label>
    `
    )
    .join('');

  function updateGeneratedScript() {
    const selected = Array.from(document.querySelectorAll('.modal-cat-checkbox:checked')).map((cb) => cb.value);
    const selectedRepos = REPOS_DATA.filter((r) => selected.includes(r.category));

    let script = `#!/usr/bin/env bash\n# RepoSec Hub - Batch Security Arsenal Clone Script\n# Generated on ${new Date().toISOString().slice(0, 10)}\n\nmkdir -p ~/security-arsenal && cd ~/security-arsenal\n\n`;

    selected.forEach((catId) => {
      const catRepos = selectedRepos.filter((r) => r.category === catId);
      if (catRepos.length > 0) {
        script += `# --- ${catRepos[0].categoryLabel.toUpperCase()} ---\n`;
        catRepos.forEach((r) => {
          script += `git clone ${r.url}.git\n`;
        });
        script += `\n`;
      }
    });

    script += `echo "[+] All selected repositories cloned successfully to $(pwd)!"\n`;
    codeBlock.textContent = script;
  }

  btn.addEventListener('click', () => {
    updateGeneratedScript();
    modal.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });

  document.querySelectorAll('.modal-cat-checkbox').forEach((cb) => {
    cb.addEventListener('change', updateGeneratedScript);
  });

  copyScriptBtn.addEventListener('click', async () => {
    const text = codeBlock.textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyScriptBtn.textContent = 'COPIED!';
      setTimeout(() => {
        copyScriptBtn.textContent = 'COPY SCRIPT';
      }, 1600);
    } catch (e) {
      // fallback
    }
  });
}

function formatCategoryLabel(cat) {
  const map = {
    all: 'All Categories',
    'web-pentest': 'Web Pentesting & APIs',
    osint: 'OSINT & Recon',
    network: 'Network Diagnostics',
    credential: 'Credential & Wordlists',
    forensics: 'DFIR & Forensics',
    cloud: 'Cloud & Container Security'
  };
  return map[cat] || cat;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeQuotes(str) {
  return str.replace(/"/g, '&quot;');
}
