//"build-and-deploy": "npm run build && bash deploy.sh"

#!/bin/bash

# Adicione os arquivos ao git
git add -A

# Commit com uma mensagem indicando que é um deploy para o GitHub Pages
git commit -m "Deploy to GitHub Pages"

# Faça o push para a branch gh-pages
git push origin gh-pages

# Volte para a branch principal (ou a branch que você estava antes)
git checkout -

