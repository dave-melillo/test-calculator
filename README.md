# Calculator Test App

A simple, themeable web calculator built with React + Vite.

## Features

- ✅ Basic arithmetic operations (add, subtract, multiply, divide)
- ✅ Decimal number support
- ✅ Three color themes (Light, Dark, Ocean)
- ✅ Theme persistence via localStorage
- ✅ Responsive design (mobile + desktop)
- ✅ Keyboard accessible

## Tech Stack

- **React** 18.3.0
- **Vite** 7.3.1
- **CSS Modules** for scoped styling
- **Vercel** for deployment

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/dave-melillo/test-calculator.git
cd test-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Calculator.jsx          # Main calculator logic
│   ├── Calculator.module.css
│   ├── Display.jsx             # Display component
│   ├── Display.module.css
│   ├── ThemeSwitcher.jsx       # Theme selector
│   └── ThemeSwitcher.module.css
├── context/
│   └── ThemeContext.jsx        # Theme state management
├── App.jsx                     # Root component
├── App.css
├── index.css
└── main.jsx
```

## Themes

### Light Theme
- Clean white background with blue accents
- Optimized for daytime use

### Dark Theme
- Dark grey background with bright blue accents
- Reduced eye strain in low-light environments

### Ocean Theme
- Cyan/teal color palette
- Calming aquatic aesthetic

## Deployment

Deployed to Vercel with automatic deployments from the `main` branch.

## License

MIT

## Author

Built as TEST 1/3 for X-Men agent workflow validation
- **PRD:** Beast (Hank McCoy)
- **Implementation:** Forge
- **Deployment:** Gambit

---

**Project ID:** XM-MLE5WEGI
