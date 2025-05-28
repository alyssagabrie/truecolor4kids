# TrueColor4Kids

An interactive educational web application designed to teach children about colors, objects, and activities through engaging cards and quizzes.

## Features

- Interactive color cards with myths, truths, and historical facts
- Object exploration with detailed information
- Activity cards with educational content
- Quiz functionality for each section
- Responsive design for all devices
- Dark/light theme support

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd truecolor4kids
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized production files.

## Deployment

### Option 1: Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

### Option 3: Deploy to GitHub Pages

1. Add homepage to package.json:
```json
{
  "homepage": "https://[your-username].github.io/truecolor4kids"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

No environment variables are required for basic functionality. If you need to add any in the future, create a `.env` file in the root directory.

## Project Structure

```
truecolor4kids/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── data/           # Data files
│   └── App.tsx         # Main App component
├── package.json        # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact [your-email].
