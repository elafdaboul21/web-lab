#!/bin/bash
# ============================================================
# سكريبت إعداد Git الكامل - LAB-1 & LAB-2
# شغّل هذا السكريبت داخل مجلد web-labs
# ============================================================

echo "=== Step 1: Git init ==="
git init
git config user.name "Eyllaf Dabboul"
git config user.email "elafdaboul21@github.com"

echo ""
echo "=== Step 2: First commit on main (LAB-1 initial setup) ==="
git add .
git commit -m "chore: initial project setup with Vite + React + TS"

echo ""
echo "=== Step 3: Open feature/personalize-ui branch (LAB-1) ==="
git checkout -b feature/personalize-ui

# App.tsx personalized version already in place
git add src/App.tsx src/App.css
git commit -m "feat: add personal details to homepage"

git add .
git commit -m "style: update page styling and layout"

git add .
git commit -m "docs: add comprehensive README"

echo ""
echo "=== Step 4: Back to main, merge LAB-1 feature ==="
git checkout main
git merge feature/personalize-ui --no-ff -m "merge: integrate personalized UI from LAB-1"

echo ""
echo "=== Step 5: Open feature/semantic-portfolio branch (LAB-2) ==="
git checkout -b feature/semantic-portfolio

git add src/portfolio/
git commit -m "feat: add semantic HTML portfolio structure"

git add .
git commit -m "feat: add accessible contact form with validation"

git add .
git commit -m "style: add base CSS and skip link for portfolio"

git add .
git commit -m "fix: improve a11y based on Lighthouse report"

echo ""
echo "=== Step 6: Back to main, merge LAB-2 feature ==="
git checkout main
git merge feature/semantic-portfolio --no-ff -m "merge: integrate semantic portfolio from LAB-2"

echo ""
echo "=== Done! Git log: ==="
git log --oneline --all --graph

echo ""
echo "=== Now push to GitHub ==="
echo "Run these commands:"
echo "  git remote add origin https://github.com/elafdaboul21/web-labs.git"
echo "  git push -u origin main"
echo "  git push -u origin feature/personalize-ui"
echo "  git push -u origin feature/semantic-portfolio"
