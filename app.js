// ── DATA ─────────────────────────────────────────────────────────────────────

const WEEKS = [
  {
    id: 's1', color: 'accent', colorVar: 'var(--accent)',
    title: 'Semana 1 — Imersão e Mapeamento',
    period: '19 – 23 de Maio, 2026',
    startDate: '2026-05-19', endDate: '2026-05-23',
    objective: 'Entender o contexto da empresa, produtos e operação atual — sem realizar alterações estruturais.',
    deliverable: {
      title: 'Diagrama do Fluxo Operacional Atual',
      desc: 'Documento visual apresentando o fluxo atual de bugs, features e comunicação entre áreas.',
      link: 'relatorio-s1.html'
    },
    async: [
      { id: 's1a1', text: 'Navegar pelos produtos atuais da PIGZ' },
      { id: 's1a2', text: 'Ler documentações existentes' },
      { id: 's1a3', text: 'Observar o uso atual das ferramentas de gestão (Linear)' },
      { id: 's1a4', text: 'Identificar fluxos existentes de bugs, features e comunicação operacional' }
    ],
    sync: [
      { id: 's1s1', text: 'Reunião inicial com Estratégia e Produto — apresentação do contexto da empresa' },
      { id: 's1s2', text: 'Conversas rápidas com desenvolvedores para entendimento operacional' },
      { id: 's1s3', text: 'Observação dos rituais atuais sem interferência estrutural' }
    ]
  },
  {
    id: 's2', color: 'warning', colorVar: 'var(--warning)',
    title: 'Semana 2 — Diagnóstico Operacional e Governança',
    period: '26 – 30 de Maio, 2026',
    startDate: '2026-05-26', endDate: '2026-05-30',
    objective: 'Analisar profundamente o fluxo operacional atual e estruturar propostas de melhoria sustentáveis.',
    deliverable: {
      title: 'Plano de Ação + Template de Reporte Oficial',
      desc: 'Plano de ação operacional validado + template oficial do reporte operacional.',
      link: 'relatorio-s2.html'
    },
    async: [
      { id: 's2a1', text: 'Auditoria operacional no Linear' },
      { id: 's2a2', text: 'Identificação de gargalos, ruídos e inconsistências nos fluxos' },
      { id: 's2a3', text: 'Análise de fluxos, estados, ciclos e organização operacional' },
      { id: 's2a4', text: 'Construção inicial do template de Report Operacional' }
    ],
    sync: [
      { id: 's2s1', text: 'Apresentar hipóteses de melhoria (problema / impacto / risco / esforço)' },
      { id: 's2s2', text: 'Validar com Estratégia e Produto quais ajustes priorizar' },
      { id: 's2s3', text: 'Validar estrutura do reporte operacional' }
    ]
  },
  {
    id: 's3', color: 'danger', colorVar: 'var(--danger)',
    title: 'Semana 3 — Gestão da Esteira de Bugs',
    period: '02 – 06 de Junho, 2026',
    startDate: '2026-06-02', endDate: '2026-06-06',
    objective: 'Assumir gradualmente o acompanhamento operacional do fluxo contínuo de bugs e chamados.',
    deliverable: {
      title: 'Fluxo de Bugs + 1º Reporte Oficial',
      desc: 'Fluxo operacional de bugs com previsibilidade + primeiro reporte operacional oficial.',
      link: 'relatorio-s3.html'
    },
    async: [
      { id: 's3a1', text: 'Triagem diária do backlog de bugs' },
      { id: 's3a2', text: 'Organização de contexto, severidade e impacto operacional' },
      { id: 's3a3', text: 'Estruturação da fila de correção' },
      { id: 's3a4', text: 'Acompanhamento da evolução das correções' }
    ],
    sync: [
      { id: 's3s1', text: 'Alinhamento rápido com desenvolvedores responsáveis' },
      { id: 's3s2', text: 'Identificação de impedimentos operacionais' },
      { id: 's3s3', text: 'Validação com Produto nos casos críticos de experiência' }
    ]
  },
  {
    id: 's4', color: 'success', colorVar: 'var(--success)',
    title: 'Semana 4 — Consolidação da Operação',
    period: '09 – 13 de Junho, 2026',
    startDate: '2026-06-09', endDate: '2026-06-13',
    objective: 'Consolidar o acompanhamento operacional completo e garantir previsibilidade contínua.',
    deliverable: {
      title: 'Reporte Final + Rotina Consolidada',
      desc: 'Reporte operacional completo e consolidação do acompanhamento contínuo da esteira técnica.',
      link: 'relatorio-s4.html'
    },
    async: [
      { id: 's4a1', text: 'Aplicação das melhorias operacionais aprovadas' },
      { id: 's4a2', text: 'Organização operacional das features aprovadas por Estratégia e Produto' },
      { id: 's4a3', text: 'Quebra de demandas em tarefas menores e acompanhamento do fluxo de execução' }
    ],
    sync: [
      { id: 's4s1', text: 'Alinhamento rápido diário com desenvolvedores' },
      { id: 's4s2', text: 'Acompanhamento tático com lideranças' },
      { id: 's4s3', text: 'Destravamento de dependências operacionais' },
      { id: 's4s4', text: 'Alinhamentos operacionais críticos' }
    ]
  }
];

const MILESTONES = [
  { label: 'Início', date: '2026-05-19', sub: '19 Mai' },
  { label: 'S1 ✓', date: '2026-05-23', sub: '23 Mai' },
  { label: 'S2 ✓', date: '2026-05-30', sub: '30 Mai' },
  { label: 'S3 ✓', date: '2026-06-06', sub: '06 Jun' },
  { label: 'S4 ✓', date: '2026-06-13', sub: '13 Jun' }
];

// ── STATE ─────────────────────────────────────────────────────────────────────

const state = {
  tab: 's1',
  tasks:        JSON.parse(localStorage.getItem('pigz-tasks')  || '{}'),
  notes:        JSON.parse(localStorage.getItem('pigz-notes')  || '{}'),
  impedimentos: JSON.parse(localStorage.getItem('pigz-imps')   || '[]')
};

function save() {
  localStorage.setItem('pigz-tasks', JSON.stringify(state.tasks));
  localStorage.setItem('pigz-notes', JSON.stringify(state.notes));
  localStorage.setItem('pigz-imps',  JSON.stringify(state.impedimentos));
}

// ── DATE UTILS ────────────────────────────────────────────────────────────────

const START = new Date('2026-05-19');
const END   = new Date('2026-06-13');

function today() { return new Date(new Date().toDateString()); }
function dayNum() {
  const d = Math.ceil((today() - START) / 86400000) + 1;
  return Math.max(1, Math.min(30, d));
}
function overallProgress() {
  const total = END - START;
  const elapsed = Math.min(today() - START, total);
  return Math.round((elapsed / total) * 100);
}
function isActive(w) {
  const t = today(), s = new Date(w.startDate), e = new Date(w.endDate);
  return t >= s && t <= e;
}

// ── PROGRESS HELPERS ──────────────────────────────────────────────────────────

function weekProgress(w) {
  const all = [...w.async, ...w.sync];
  const done = all.filter(t => state.tasks[t.id]).length;
  return { done, total: all.length, pct: all.length ? Math.round((done / all.length) * 100) : 0 };
}

// ── TIMELINE ──────────────────────────────────────────────────────────────────

function renderTimeline() {
  document.getElementById('dayNum').textContent = dayNum();
  document.getElementById('timelineFill').style.width = overallProgress() + '%';

  const t = today();
  document.getElementById('milestones').innerHTML = MILESTONES.map(m => {
    const d = new Date(m.date);
    const cls = d < t ? 'done' : d.toDateString() === t.toDateString() ? 'active' : '';
    return `<div class="milestone ${cls}">
      <div class="milestone-dot"></div>
      <span>${m.sub}</span>
    </div>`;
  }).join('');
}

// ── BADGES ────────────────────────────────────────────────────────────────────

function updateBadges() {
  WEEKS.forEach(w => {
    const { done, total } = weekProgress(w);
    const el = document.getElementById('badge-' + w.id);
    if (el) el.textContent = `${done}/${total}`;
  });
  const open = state.impedimentos.filter(i => i.status !== 'Resolvido').length;
  const bi = document.getElementById('badge-imp');
  if (bi) bi.textContent = open || '';
}

// ── TAB SWITCH ────────────────────────────────────────────────────────────────

function switchTab(id) {
  state.tab = id;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
  render();
}

// ── RENDER WEEK ───────────────────────────────────────────────────────────────

function renderTask(t) {
  const done = !!state.tasks[t.id];
  return `<div class="task-item ${done ? 'done' : ''}" onclick="toggle('${t.id}')">
    <div class="task-check">${done ? '✓' : ''}</div>
    <span class="task-text">${t.text}</span>
  </div>`;
}

function renderWeek(w) {
  const { done, total, pct } = weekProgress(w);
  const active = isActive(w);
  const colorCls = `color-${w.color}`;

  return `
  <div class="week-grid">
    <!-- Header -->
    <div class="card week-header-card">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
          <h2 class="week-title">${w.title}</h2>
          ${active ? '<span class="current-week-tag">● Semana atual</span>' : ''}
        </div>
        <div class="week-period">📅 ${w.period}</div>
        <div class="week-objective" style="margin-bottom:16px">${w.objective}</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap">
          ${w.id === 's2' ? `
          <a href="reporte-executivo.html" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px">
            ⭐ Reporte Executivo
          </a>` : `
          <a href="${w.deliverable.link}" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px">
            📦 Acessar Entregável
          </a>`}
          ${w.id === 's1' ? `
          <a href="apresentacao.html" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px;background:rgba(250,100,30,0.08);color:var(--accent);border:1px solid rgba(250,100,30,0.15)">
            🖥️ Ver Slides
          </a>` : ''}
          ${w.id === 's2' ? `
          <a href="relatorio-s2.html" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px;background:rgba(245,158,11,0.08);color:var(--warning);border:1px solid rgba(245,158,11,0.20)">
            📋 Formulário S2
          </a>
          <a href="plano-s2.html" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px;background:rgba(139,92,246,0.08);color:#8B5CF6;border:1px solid rgba(139,92,246,0.20)">
            🗓️ Plano de Ação
          </a>
          <a href="resumo-semana2.html" target="_blank" class="btn-primary" style="font-size:12px;padding:8px 18px;background:rgba(59,130,246,0.08);color:#3B82F6;border:1px solid rgba(59,130,246,0.20)">
            ⬇️ Resumo PDF
          </a>` : ''}
        </div>
      </div>
      <div class="progress-ring-wrap">
        <div class="progress-ring-pct ${colorCls}">${pct}%</div>
        <div class="progress-ring-lbl">${done} de ${total} tarefas</div>
      </div>
    </div>

    <!-- Async tasks -->
    <div class="card">
      <div class="card-title">🏠 Trabalho Assíncrono (Remoto)</div>
      <div class="task-list">${w.async.map(renderTask).join('')}</div>
    </div>

    <!-- Sync tasks -->
    <div class="card">
      <div class="card-title">🏢 Trabalho Síncrono (Presencial)</div>
      <div class="task-list">${w.sync.map(renderTask).join('')}</div>
    </div>

    <!-- Notes -->
    <div class="card" style="grid-column:1/-1">
      <div class="card-title">📝 Notas e Observações</div>
      <textarea class="notes-area" id="notes-${w.id}"
        placeholder="Registre insights, descobertas, contextos importantes desta semana..."
        oninput="saveNote('${w.id}', this.value)">${state.notes[w.id] || ''}</textarea>
    </div>
  </div>`;
}

// ── RENDER IMPEDIMENTOS ───────────────────────────────────────────────────────

function renderImpedimentos() {
  const rows = state.impedimentos.length
    ? state.impedimentos.map((imp, i) => `
      <tr>
        <td>${imp.descricao}</td>
        <td>${imp.area}</td>
        <td><span class="status-pill status-${imp.status === 'Aberto' ? 'open' : imp.status === 'Em andamento' ? 'progress' : 'done'}">${imp.status}</span></td>
        <td>${imp.data}</td>
        <td><button class="btn-danger-sm" onclick="removeImp(${i})">Remover</button></td>
      </tr>`).join('')
    : `<tr><td colspan="5"><div class="empty-state">Nenhum impedimento registrado ✓</div></td></tr>`;

  return `
  <div style="display:flex;flex-direction:column;gap:16px">
    <div class="card">
      <div class="card-title">➕ Registrar Impedimento</div>
      <div class="imp-form">
        <div class="form-group">
          <label>Descrição do impedimento</label>
          <input class="form-input" id="imp-desc" placeholder="Descreva o bloqueio ou gargalo..." />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Área responsável</label>
            <select class="form-select" id="imp-area">
              <option>Estratégia</option>
              <option>Produto</option>
              <option>Desenvolvimento</option>
              <option>Operações</option>
              <option>Externo</option>
            </select>
          </div>
          <div class="form-group">
            <label>Status</label>
            <select class="form-select" id="imp-status">
              <option>Aberto</option>
              <option>Em andamento</option>
              <option>Resolvido</option>
            </select>
          </div>
        </div>
        <button class="btn-primary" onclick="addImp()" style="align-self:flex-start">Registrar Impedimento</button>
      </div>
    </div>

    <div class="card">
      <div class="card-title">⚠️ Impedimentos Registrados</div>
      <table class="imp-table">
        <thead><tr>
          <th>Descrição</th><th>Área</th><th>Status</th><th>Data</th><th></th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  </div>`;
}

// ── ACTIONS ───────────────────────────────────────────────────────────────────

function toggle(id) {
  state.tasks[id] = !state.tasks[id];
  save();
  render();
}

function saveNote(weekId, val) {
  state.notes[weekId] = val;
  save();
}

function addImp() {
  const desc = document.getElementById('imp-desc').value.trim();
  if (!desc) return;
  state.impedimentos.unshift({
    descricao: desc,
    area: document.getElementById('imp-area').value,
    status: document.getElementById('imp-status').value,
    data: today().toLocaleDateString('pt-BR')
  });
  save();
  render();
}

function removeImp(i) {
  state.impedimentos.splice(i, 1);
  save();
  render();
}

// ── RENDER ────────────────────────────────────────────────────────────────────

function render() {
  const main = document.getElementById('mainContent');
  const w = WEEKS.find(x => x.id === state.tab);
  main.innerHTML = w ? renderWeek(w) : renderImpedimentos();
  updateBadges();
}

// ── INIT ──────────────────────────────────────────────────────────────────────

renderTimeline();
render();
