git pull
mv ~/Documents/Web/completeuphoria/next.config.js ~/Documents/Web/completeuphoria/scripts/next.config.default.js
cp ~/Documents/Web/completeuphoria/scripts/next.config.build.js ~/Documents/Web/completeuphoria/next.config.js
sudo docker compose -f docker/development/compose.yaml down
sudo docker compose -f docker/development/compose.yaml build
sudo docker compose -f docker/development/compose.yaml up -d
cp ~/Documents/Web/completeuphoria/scripts/next.config.default.js ~/Documents/Web/completeuphoria/next.config.js
