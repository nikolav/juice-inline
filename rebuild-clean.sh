#!/usr/bin/env bash
set -euo pipefail

echo "🧹 Cleaning dependencies and build artifacts..."

rm -rf \
  node_modules \
  package-lock.json \
  pnpm-lock.yaml \
  yarn.lock

echo "🗑️  Clearing npm cache..."
npm cache clean --force

echo "📦 Installing dependencies..."
npm install --no-audit --no-fund

echo "✅ Done."
