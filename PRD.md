# PRD: Calculator Test App
**Item ID:** XM-MLE5WEGI  
**Author:** Beast (Hank McCoy)  
**Date:** 2026-02-08  
**Status:** Draft  
**Priority:** 5/5 (System Validation Test)  
**Complexity:** S (Small)

---

## 1. Summary

### What We're Building
A simple web-based calculator application with theme-switching capabilities. This serves as **TEST 1 of 3** for validating the X-Men agent workflow system.

### Why We're Building It
- **Primary Goal:** Validate agent collaboration workflow (Beast → Forge → Gambit)
- **Secondary Goal:** Establish baseline for testing deployment pipelines
- **Success Criteria:** Clean handoff between agents, successful deployment, functional product

### User Story
> "As a user, I want a simple calculator with a pleasant UI that I can theme to my preference, so I can perform basic arithmetic in a visually appealing environment."

---

## 2. Research

### Technology Landscape
**Framework Options:**
- **React + Vite:** Modern, fast, excellent DX, Vercel-optimized
- **Next.js:** Overkill for this scope, but Vercel's native framework
- **Vanilla JS:** Lightweight, no build step, simpler for small apps

**Recommendation:** React + Vite
- Balances simplicity with modern practices
- Familiar to most developers
- Fast HMR during development
- Vercel has first-class support

### UI/UX Patterns
**Calculator Layout Best Practices:**
- Standard 4x5 grid (numbers 0-9, operators, equals, clear)
- Large, touch-friendly buttons (min 44x44px)
- Display area at top showing current input/result
- Visual feedback on button press

**Theme Switching:**
- Toggle via button/dropdown in UI
- Persist preference in localStorage
- Smooth transitions between themes
- Accessible color contrast (WCAG AA minimum)

### Deployment
**Vercel:**
- Zero-config for React/Vite projects
- Automatic deploys from GitHub
- Environment previews on PR
- Free tier sufficient for testing

---

## 3. Definition of Done

### Functional Requirements
- ✅ Calculator performs addition, subtraction, multiplication, division
- ✅ Displays current input and calculation result
- ✅ Handles decimal numbers
- ✅ Clear/reset functionality
- ✅ At least 3 distinct color themes (e.g., Light, Dark, Blue)
- ✅ Theme selector accessible in UI
- ✅ Theme preference persists across sessions

### Technical Requirements
- ✅ Built with React + Vite
- ✅ Responsive design (mobile + desktop)
- ✅ No console errors
- ✅ Clean, commented code
- ✅ Deployed to Vercel with live URL
- ✅ GitHub repo contains source code
- ✅ README with setup instructions

### Quality Gates
- ✅ All calculator operations produce correct results
- ✅ Theme switching works without page reload
- ✅ UI is visually clean and professional
- ✅ Page loads in < 2 seconds
- ✅ Accessible via keyboard navigation

---

## 4. Tooling Choices

### Core Stack
| Tool | Purpose | Version |
|------|---------|---------|
| **React** | UI framework | ^18.3.0 |
| **Vite** | Build tool | ^6.0.0 |
| **CSS Modules** | Scoped styling | Built-in |
| **Vercel** | Hosting/deployment | Latest |

### Development Tools
- **ESLint:** Code quality
- **Prettier:** Code formatting (optional)
- **Git/GitHub:** Version control

### No External Libraries Needed
- Pure React state for calculator logic
- CSS for theming (no Tailwind/MUI for this scope)
- Native localStorage for persistence

---

## 5. Current System Context

### Existing Assets
- **GitHub Repo:** https://github.com/dave-melillo/test-calculator
- **Workdir:** `/Users/dave/clawd/test-calculator`
- **Status:** Greenfield project (starting from scratch)

### Integration Points
- **Agent Workflow:**
  1. **Beast (this PRD):** Define requirements
  2. **Forge:** Build the application
  3. **Gambit:** Deploy to production

### Dependencies
- None (standalone test project)

---

## 6. Phases

### Phase 1: Core Calculator (MVP)
**Goal:** Functional calculator with basic operations  
**Deliverables:**
- Calculator UI component
- State management for operations
- Display component
- Basic CSS styling

**Estimated Effort:** 2-3 hours

---

### Phase 2: Theme System
**Goal:** Multiple color themes with persistence  
**Deliverables:**
- Theme context/state
- At least 3 color schemes (Light, Dark, Blue/Accent)
- Theme switcher UI component
- localStorage integration

**Estimated Effort:** 1-2 hours

---

### Phase 3: Polish & Deploy
**Goal:** Production-ready application  
**Deliverables:**
- Responsive design refinements
- README documentation
- Vercel deployment configuration
- Live URL

**Estimated Effort:** 1 hour

---

## 7. Feature Specifications

### Calculator Operations
```
Supported Operations:
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Clear (C)
- Equals (=)
- Decimal point (.)
```

### Theme Specifications
**Minimum 3 Themes Required:**

1. **Light Theme**
   - Background: #FFFFFF
   - Text: #000000
   - Button: #F0F0F0
   - Accent: #007AFF

2. **Dark Theme**
   - Background: #1C1C1E
   - Text: #FFFFFF
   - Button: #2C2C2E
   - Accent: #0A84FF

3. **Ocean Theme** (example third theme)
   - Background: #E0F7FA
   - Text: #006064
   - Button: #B2EBF2
   - Accent: #00ACC1

### UI Layout
```
┌─────────────────────────┐
│  [Theme Selector ▼]     │
├─────────────────────────┤
│                         │
│    [Display: 0]         │
│                         │
├─────────────────────────┤
│  [7] [8] [9] [÷]        │
│  [4] [5] [6] [×]        │
│  [1] [2] [3] [-]        │
│  [0] [.] [=] [+]        │
│       [C]               │
└─────────────────────────┘
```

---

## 8. Non-Functional Requirements

### Performance
- First Contentful Paint < 1.5s
- Time to Interactive < 2s
- Lighthouse score > 90

### Accessibility
- WCAG AA color contrast
- Keyboard navigable
- Semantic HTML
- Screen reader friendly

### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 9. Out of Scope

The following are **explicitly excluded** from this test:
- Scientific calculator functions
- History/memory functions
- Multiple calculator instances
- Backend/API integration
- User authentication
- Analytics/tracking
- Advanced animations
- PWA features
- Offline support
- Internationalization

---

## 10. Success Metrics

### Agent Workflow Validation
- ✅ PRD → Build → Deploy pipeline completes
- ✅ Clear handoffs between agents
- ✅ No blocking issues requiring human intervention

### Technical Validation
- ✅ App deploys successfully to Vercel
- ✅ All calculator functions work correctly
- ✅ Themes switch without errors
- ✅ Code is maintainable and well-structured

### Timeline
- **Total Estimated Effort:** 4-6 hours
- **Target Completion:** Within 1 working day

---

## 11. Handoff to Forge

### What Forge Needs to Know
1. Use React + Vite for fast setup
2. Keep it simple—no over-engineering
3. Focus on clean, readable code
4. Ensure Vercel deployment config is included
5. Write a brief README with setup steps

### Files to Create
- `src/App.jsx` - Main app component
- `src/components/Calculator.jsx` - Calculator logic
- `src/components/Display.jsx` - Display component
- `src/components/ThemeSwitcher.jsx` - Theme selector
- `src/styles/` - CSS modules for each component
- `src/context/ThemeContext.jsx` - Theme state management
- `README.md` - Setup and deployment instructions
- `vercel.json` - Deployment config (if needed)

### Repository
- **URL:** https://github.com/dave-melillo/test-calculator
- **Branch Strategy:** `main` for production, `dev` for active work
- **Commit Message Style:** Conventional commits preferred

---

## 12. Open Questions

None at this time. All requirements are clear and scoped.

---

## 13. Appendix

### Useful References
- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vercel React Deployment](https://vercel.com/docs/frameworks/vite)
- [WCAG Color Contrast](https://webaim.org/resources/contrastchecker/)

### Calculator Logic Reference
```javascript
// Example state structure
{
  display: "0",
  currentValue: 0,
  previousValue: null,
  operation: null,
  waitingForOperand: false
}
```

---

**End of PRD**  
*Ready for handoff to Forge (Agent: Build & Implementation)*
