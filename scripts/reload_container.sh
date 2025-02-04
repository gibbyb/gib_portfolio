git pull
mv ~/Documents/Web/gib_portfolio/next.config.js ~/Documents/Web/gib_portfolio/scripts/next.config.default.js
cp ~/Documents/Web/gib_portfolio/scripts/next.config.build.js ~/Documents/Web/gib_portfolio/next.config.js
sudo docker compose -f docker/development/compose.yaml down
sudo docker compose -f docker/development/compose.yaml build
sudo docker compose -f docker/development/compose.yaml up -d
cp ~/Documents/Web/gib_portfolio/scripts/next.config.default.js ~/Documents/Web/gib_portfolio/next.config.js
