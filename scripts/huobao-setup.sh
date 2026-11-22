#!/usr/bin/env bash
# Install and start Huobao Drama (AI short-drama studio) in the cloud VM.
# Usage: bash scripts/huobao-setup.sh   → UI + API on http://localhost:5679
set -e
DIR=${HUOBAO_DIR:-/home/user/huobao-drama}
if [ ! -d "$DIR/.git" ]; then GIT_LFS_SKIP_SMUDGE=1 git clone -q --depth 1 https://github.com/chatfire-AI/huobao-drama "$DIR"; fi
cd "$DIR/backend" && [ -d node_modules ] || npm install --no-audit --no-fund
cd "$DIR/frontend"
# the lockfile points to a private aliyun mirror the cloud proxy blocks → use the public npm registry
sed -i -E 's#https://packages\.aliyun\.com/[^"/]+/npm/npm-registry/#https://registry.npmjs.org/#g' package-lock.json
[ -d node_modules ] || npm install --no-audit --no-fund
[ -f .output/public/index.html ] || npm run generate
if ! curl -s -m 2 localhost:5679/api/v1/health >/dev/null; then
  cd "$DIR/backend" && FRONTEND_DIST="$DIR/frontend/.output/public" nohup npm start > /tmp/huobao.log 2>&1 &
  for i in $(seq 1 30); do curl -s -m 2 localhost:5679/api/v1/health >/dev/null && break; sleep 2; done
fi
curl -s localhost:5679/api/v1/health && echo && echo "Huobao Drama: http://localhost:5679 (log /tmp/huobao.log, data $DIR/data)"
