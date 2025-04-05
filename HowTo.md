Youtube: [Build and Deploy an Amazing 3D Web Developer Portfolio in React JS](https://www.youtube.com/watch?v=0fYi8SGA20k)

# 1. Create new project:
```bash
npm create vite@latest ./ -- --template react
```

# 2. Install tailwindcss:
```bash
npm install -D tailwindcss
```

# 3. Initialize tailwindcss:
```bash
npx tailwindcss init
```

# 4. Install additional packages:
```bash
npm install gh-pages three @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom prop-types
```

# 5. Install postcss and autoprefixer:
```bash
npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p
```

# 6. Run the web server for testing purposes:
```bash
npm run dev
```

# 7. Upload and deploy the web application:
(Youtube: [How To Deploy A React Vite App To Github Pages (Simple)](https://www.youtube.com/watch?v=hn1IkJk24ow))
#### - Add the following line to defineConfig in vite.config.js
```js
base: process.env.NODE_ENV === "production" ? "/<repos-name>/" : "/",
```
#### - Add the "homepage" url to package.json
```json
"homepage": "https://<your-username>.github.io/<repos-name>/",
```
#### - Add the scripts to "scripts" in package.json
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
#### - Do regular commands to push all files/changes to GitHub Repos
```bash
git add .
git commit -m "your message"
git push
```
#### - Run the following command to deploy the Web Application
```bash
npm run deploy
```
