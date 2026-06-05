$git = "C:\Program Files\Git\bin\git.exe"
$data = Get-Date -Format "dd/MM/yyyy HH:mm"

Write-Host "══════════════════════════════════" -ForegroundColor Cyan
Write-Host "  PIGZ Coord — Publicar no GitHub" -ForegroundColor Cyan
Write-Host "══════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Adiciona todos os arquivos modificados
Write-Host "📦 Preparando arquivos..." -ForegroundColor Yellow
& $git add -A

# Verifica se há algo para commitar
$status = & $git status --porcelain
if (-not $status) {
    Write-Host ""
    Write-Host "✅ Nenhuma alteração detectada. Tudo já está atualizado!" -ForegroundColor Green
    Write-Host ""
    pause
    exit
}

# Faz o commit com data/hora automática
Write-Host "💾 Salvando alterações ($data)..." -ForegroundColor Yellow
& $git commit -m "update: publicacao automatica em $data"

# Envia para o GitHub
Write-Host "🚀 Publicando no GitHub..." -ForegroundColor Yellow
& $git push origin main

Write-Host ""
Write-Host "══════════════════════════════════" -ForegroundColor Green
Write-Host "  ✅ Site atualizado com sucesso!" -ForegroundColor Green
Write-Host "  🌐 kruegerengenheiro.github.io/pigz-coord/" -ForegroundColor Green
Write-Host "══════════════════════════════════" -ForegroundColor Green
Write-Host ""
Write-Host "Aguardando 2-3 minutos para o GitHub Pages atualizar..." -ForegroundColor Gray
Write-Host ""
pause
