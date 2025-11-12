# Qusino – Full Project Breakdown

## 1. Core Vision
> **"The first player-owned, on-chain casino on QUBIC"**

- **Dual-domain legal strategy**:
  - `qusino.com` → **Global real-money casino** (Isle of Man OGRA license, Q4 2025)
  - `qusino.us` → **US sweepstakes casino** (48-state compliant, no purchase necessary)

- **Same UX, shared social layer** (buddies, chat, profile, wall) via **smart IP geo-routing** (Cloudflare Workers).

---

## 2. Token Triad (v1.4 – 1:1 QST/QSC Peg)

| Token | Role | Supply | Peg / Redemption |
|-------|------|--------|------------------|
| **QST** | Prize token (global) | 1.8B total | 1 QST = 1 QSC |
| **QSC** | Sweepstakes coin (US-only) | Virtual | 100 QSC → QST → QUBIC |
| **STAR** | Utility / play chip | ∞ (1 STAR = 1,000 QUBIC) | Voting, staking, free play |

#### Bonus Structure
- `.com`: Match up to **1,000 QST + 1,000 STAR**
- `.us`: **1,000 STAR + 50 QSC**

> **STAR staking earns QSC** (US model incentivized play)

---

## 3. Game Launch Portal (Phase 2 – Q1 2026)  
**First-ever on-chain game submission + governance system**

#### Submission Flow
1. Mint game as **NFT** (QUBIC-native)
2. Upload to **IPFS**
3. Pay entry:  
   - **Both .com and .us**: Burn **1,000 STAR** to vote
4. **7-day community vote**
5. **50.01% approval** → auto-deploy to casino floor

#### Developer Royalties
- Set **1%–5%** perpetual royalty
- Paid in **QST daily**
- **No expiration** — true ownership

#### Deflation Mechanism
- After **18 months**, if game loses >50% vote share → **NFT burned** → supply deflation

---

## 4. Tech Stack (Lean & Fast)

| Layer | Tech |
|------|------|
| Frontend | **HTMX + Socket.IO** (no framework bloat) |
| Backend | **Node.js dual APIs** (.com / .us) |
| Auth | Public-key + 2FA (.com) |
| Admin | KYC, token minting, user impersonation |
| Edge | **Cloudflare Workers** (geo-routing) |
| Blockchain | **QUBIC-only** (smart contracts, computors for RNG) |

> **No cross-chain interoperability. All assets, logic, and execution are 100% native to QUBIC.**

---

## 5. Provably Fair RNG

We are actively developing a provably fair RNG system leveraging QUBIC computors for seed generation and on-chain verification.

---

## 6. Game Contract Re-Distribution (100% On-Chain)

All rake and fees from every game are automatically re-distributed via the **Game Contract**:

- **Treasury (ops)**: 25%  
- **Community Contribution Fund (CCF)**: 15%  
- **Liquidity Pool**: 25%  
- **QST Stakers & Game Creators**: 35%

> **Every rake & fee → transparent, on-chain, player-aligned**

---

## 7. Qusino Smart Contract (SC) Re-Distribution

In addition to game-level rake, **all platform fees** (e.g. deposits, withdrawals, STAR purchases, bonus claims) are routed through the **Qusino SC** and re-distributed as follows:

- **QST Buyback & Burn**: 40%  
- **STAR Staker Rewards (QSC emissions)**: 30%  
- **Game Launch Portal Fund**: 20%  
- **Security & Audit Reserve**: 10%

> **100% of platform revenue fuels deflation, staking, and ecosystem growth**

---

## 8. Voting & Governance

- **Universal Voting Token**: **STAR**  
  - **All users** (both .com and .us) **burn 1,000 STAR** to submit a vote on game proposals  
  - **1 STAR = 1 vote** (weighted by stake duration in future upgrades)

---

## 9. Launch Games
- **Texas Hold’em & Pot Limit Omaha**
  - 2–9 players
  - 15–30s clock
  - Rebuy, sit-out, auto-deal
  - In-game chat (emoji, @mentions, dealer notes, auto-mod)

---

## 10. Roadmap

| Timeline | Milestone |
|--------|---------|
| **Q4 2025** | `qusino.com` poker launch (real stakes) |
| **Q1 2026** | `qusino.us` + Game Portal live |
| **Q3 2026** | Mobile apps, marketplace, 10+ community games |

---

### Devs: This is Your Casino
build → submit → vote → play → **earn royalties forever**  

♠️♦️♣️♥️ **Qusino – Play. Vote. Build. Own. Win.**  
Star this repo. Build the next hit game. See you at the tables.