# ⚡ CI/CD without Docker (React + Vite)

This is a **demo project** built with **React + Vite** to practice **CI/CD pipeline setup without Docker**.  
The focus here is on **GitHub Pages deployment** using automated workflows instead of containerization.

---

## 🚀 Tech Stack

- ⚛️ **React 19** – Frontend library  
- ⚡ **Vite 7** – Build tool  
- 🎨 **Tailwind CSS 4** – Styling  
- 🌐 **GitHub Pages** – Hosting  
- ⚡ **GitHub Actions** – CI/CD pipeline  

---

## 📂 Project Setup

### Clone the Repository
```bash
git clone https://github.com/VansitaGajjar/CI_CD_without_Docker.git
cd CI_CD_without_Docker
npm install
npm run dev
```
The app will be available at: http://localhost:5173/

---

## 🌐 Deployment (GitHub Pages)
This project is set up to deploy automatically to GitHub Pages.

### Manual Deployment
Run:
```bash
npm run deploy
```
This will build the project and push the output to the gh-pages branch.

---

## ⚡ CI/CD Goal
- This repo demonstrates:
  - ✅ Automated builds with Vite
  - ✅ Deployment to GitHub Pages
  - ✅ CI/CD without Docker
