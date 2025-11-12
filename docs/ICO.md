**QUBIC ICO Portal – Summary**  
`Version 1.1`

---

### **Project Summary**

The **QUBIC ICO Portal (QIP)** is a **fully automated, trustless smart contract** that enables **any project** to launch an ICO on QUBIC with **zero voting, zero consensus, and zero delays**.

---

### **Core Function**
- **Anyone** can launch a token by calling the contract with:  
  - Token name, symbol, supply, logo (IPFS CID)  
  - **Minimum 10M QUBIC**  
- **Instant execution** — no approval, no gatekeepers  

---

### **Revenue Share (Automated Disbursement)**

| Recipient | Share | Notes |
|---------|-------|-------|
| **CCF Treasury** | **95%** | Immutable address — funds sent immediately |
| **Smart Contract Holders** | **5%** | Pro-rata distribution to all holders of the **SC ownership token** |

> **No voting. No governance. No control.**  
> **Disbursement is 100% on-chain and automatic.**

---

### **Key Features**
- **No staking**  
- **No governance token**  
- **No pause or admin override**  
- **CCF address is hardcoded and final**  
- **5% share is distributed to SC token holders via on-chain logic**  

---

### **Smart Contract Holders**
- Hold the **QIP SC Token** (ownership token)  
- **Automatically receive 5% of every ICO raise**  
- **Pro-rata based on holdings**  
- **No voting rights** — only revenue share  

---

### **Deployment**
1. Deploy with:  
   - `CCF_TREASURY = [immutable]`  
   - `SC_TOKEN_ADDRESS = [ownership token]`  
2. Projects call `launch()`  
3. Funds split **95% → CCF**, **5% → SC holders** — instantly  

---

**Automation only. Revenue only. Done.**