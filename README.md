# 🧠 Deadlock Build Advisor

> An adaptive mid-game build advisor that recommends items based on enemy heroes and their itemization — because one build never fits all.

---

## 🚀 Features

### 🎯 Enemy-Based Recommendations
Select up to 6 enemy heroes and receive tailored item suggestions based on their composition.

### 🧩 Dynamic Item Countering
The system analyzes enemy builds and recommends items across all three categories:
- **Weapon** — damage, penetration, scaling
- **Vitality** — survivability, sustain, anti-heal
- **Spirit** — utility, cooldowns, debuffs

### ⚔️ Mid-Game Focus
Optimized specifically for mid-game decision-making — where builds start to matter most.

### 💡 Explanation System
Each recommendation includes a **"Why"** section explaining:
- What it counters
- Why it's effective
- When to prioritize it

### 🖥️ Clean UI / UX
- Fast item selection
- Hero selection grid
- Interactive recommendation cards

---

## 🧠 How It Works

1. **Select Enemy Heroes** — Choose the opposing team composition (up to 6 heroes).
2. **Add Their Items** — Assign known or expected items to each enemy.
3. **Get Recommendations** — The system generates counter-build suggestions based on:
   - Damage types (weapon vs spirit)
   - Sustain and healing
   - Mobility and burst
   - Scaling threats
4. **Adapt Your Build** — Use the recommendations to adjust your mid-game strategy.

---

## 📦 Project Structure

```
/project-root
│── index.html     # Main UI layout
│── styles.css     # Styling and visual design
│── script.js      # Core logic (selection + recommendations)
│── README.md      # Project documentation
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | UI layout and structure |
| CSS3 | Custom visual design system |
| Vanilla JavaScript | Core logic and recommendations |

> No frameworks — lightweight and fast.

---

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. No build steps, no dependencies, no installation required.

```bash
git clone https://github.com/your-username/deadlock-counter-builder.git
cd deadlock-counter-builder
open index.html
```

---

## 🎯 Goal

This project moves away from **"one build fits all"** static guides and instead promotes **situational, intelligent itemization** — encouraging players to adapt their builds based on what the enemy team is doing.

---

## ⚠️ Limitations

### 🔄 Incomplete Item Coverage
Not all items are currently included in the system. The item pool will continue to expand over time to better reflect the full Deadlock meta.

### 🔌 No Live Data (Yet)
The tool currently relies on manual input. It does not connect to any live game data or official API.

---

## 🔮 Roadmap

| Status | Feature |
|--------|---------|
| 🔍 Planned | Smarter recommendation engine (weight-based scoring) |
| 📊 Planned | Early-game and late-game build phases |
| 🤖 Planned | AI-based build suggestions |
| 🌐 Planned | Online database for live meta updates |
| 💾 Planned | Save/load builds |
| 🔌 Future | Official API integration for real-time recommendations |

### 🔌 Potential API Integration
If Deadlock releases an official API, this project could evolve into a **real-time build advisor** that:
- Tracks live match data
- Detects enemy items as they are built
- Provides instant recommendations during the game

### ⚡ Real-Time Decision Engine
With API support, the tool could:
- Adapt continuously instead of relying on static input
- Suggest item pivots mid-fight or mid-phase
- Function as a live strategic assistant

---

## ⚠️ Disclaimer

This tool is designed as a **decision-support system**, not a strict guide. Player skill, team coordination, and in-game context still matter. Use it as a starting point, not a rulebook.

---

## 📄 License

This project is open source. Feel free to fork, contribute, or adapt it for your own use.

---

*Built for players who think before they buy.*
