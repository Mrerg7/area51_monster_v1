#!/bin/bash
# sync.sh — pull latest, stage all, commit, push, build, deploy
set -e

PROJECT_DIR="$HOME/area51_monster_v1"
cd "$PROJECT_DIR"

echo "📥  Pulling latest from origin/main..."
git pull origin main

echo "📋  Status before staging:"
git status

echo ""
echo "➕  Staging all changes..."
git add -A

# Only commit if there's something staged
if git diff --cached --quiet; then
  echo "✅  Nothing new to commit — working tree clean."
else
  TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
  git commit -m "chore: local sync $TIMESTAMP"
  echo "⬆️   Pushing to GitHub..."
  git push origin main
fi

echo ""
echo "🔨  Building..."
npm run build

echo ""
echo "🚀  Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name=area51-monster-v1a

echo ""
echo "✅  Done! https://area51.monster"
