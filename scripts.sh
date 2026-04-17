# Limpar o terminal e mostrar apenas as últimas 20 linhas do processo de build para verificar se há erros ou avisos importantes.
cd /Users/teatec/Documents/GitHub/segundo_cerebro && npm run build 2>&1 | tail -20

# Limpar cache do projeto para garantir que as últimas mudanças sejam refletidas corretamente.
cd /Users/teatec/Documents/GitHub/segundo_cerebro && npm cache clean --force

# Iniciar projeto
cd /Users/teatec/Documents/GitHub/segundo_cerebro && npm start