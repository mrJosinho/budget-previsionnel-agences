const agencies = [
  { key: "steMarie", name: "Ste Marie" },
  { key: "bourgAchard", name: "Bourg Achard" },
  { key: "harfleur", name: "Harfleur" },
  { key: "maromme", name: "Maromme" },
];

const baseRevenue = {
  travaux: [3010081.2, 1003561.07208, 1003561.07208, 1002959.05584],
  annexes: [31828.75, 10611.70525, 10611.70525, 10605.3395],
};

const baseTotalRevenue = sum(baseRevenue.travaux) + sum(baseRevenue.annexes);

const directCostLines = [
  { id: "r18", label: "Achats matières premières", mode: "key", total: 1233446.43 },
  { id: "r19", label: "Achats matières consommables", mode: "key", total: 40255.11 },
  { id: "r20", label: "Sous-traitance (604)", mode: "key", total: 1391461.59 },
];

const chargeSections = [
  {
    label: "Achats & charges externes",
    lines: [
      ["r27", "Eau", "key", 1115.24],
      ["r28", "EDF", "key", 7813.96],
      ["r29", "Carburant", "key", 116410.43],
      ["r30", "Petit outillage", "key", 9390.03],
      ["r31", "Vêtements travail", "key", 7326.48],
      ["r32", "Fournitures administratives", "key", 8745.34],
      ["r33", "Sous-traitance (611)", "key", 36549.75],
      ["r34", "Location véhicule (selon ft)", "key", 197883.59],
      ["r35", "Loyer", "fixed", [42388.42, 9600, 6777.89, 1500]],
      ["r36", "Charges locatives", "fixed", [4455.35, 678, 993.75, 1087.17]],
      ["r37", "Location matériel", "key", 13088.24],
      ["r38", "Locations matériel transport", "key", 982.9],
      ["r39", "Location photocopieur", "key", 2482.68],
      ["r40", "Location téléphone", "key", 3895.84],
      ["r41", "Entretiens locaux", "key", 1290.45],
      ["r42", "Entretiens biens immob.", "key", 6166.59],
      ["r43", "Entretien matériel roulant", "key", 33467.46],
      ["r44", "Entretien divers", "key", 1888.03],
      ["r45", "Maintenance", "key", 31691.14],
      ["r46", "Assurances", "key", 1362.36],
      ["r47", "Assurances loc. véhicules", "key", 4851.81],
      ["r48", "Assurances RC", "key", 41850.78],
      ["r49", "Assurances véhicules", "key", 21055.63],
      ["r50", "Documentation", "key", 121.88],
      ["r51", "Autres services extérieurs", "key", 334.96],
      ["r52", "Rém. interméd. et hono.", "key", 3377.9],
      ["r53", "Honoraires comptables", "key", 24082.28],
      ["r54", "Autres honoraires juridique", "key", 4450],
      ["r55", "Honoraires AIC", "key", 1122],
      ["r56", "Honoraires divers", "key", 1800],
      ["r57", "Frais d'actes", "key", 6839.03],
      ["r58", "Publicité", "key", 13156.69],
      ["r59", "Publicités annonces", "key", 12628.69],
      ["r60", "Pub impression", "key", 30616.66],
      ["r61", "Cadeau à la clientèle", "key", 24982],
      ["r62", "Foires et expositions", "key", 48747.33],
      ["r63", "Transports sur achats", "key", 2097.38],
      ["r64", "Pourboires divers", "key", 1000],
      ["r65", "Voyages et déplacements", "key", 35312.86],
      ["r66", "Frais déplacement ouvrier", "key", 9307.52],
      ["r67", "Frais déplacement commerciaux", "key", 35013.45],
      ["r68", "Péages", "key", 34931.78],
      ["r69", "Réceptions", "key", 6984.36],
      ["r70", "Affranchissements", "key", 1904.73],
      ["r71", "Téléphone - internet", "key", 6380.06],
      ["r72", "Hébergement et nom domaine", "key", 6590.18],
      ["r73", "Loc comm veh quatrix", "key", 1636.89],
      ["r74", "Services bancaires", "key", 8819.57],
      ["r75", "Autres charges", "key", 14152.38],
      ["r76", "Cotisation", "key", 1784.28],
    ],
  },
  {
    label: "Impôts et taxes",
    lines: [
      ["r82", "Taxe d'apprentissage", "key", 6818.25],
      ["r83", "Formation professionnelle continue", "key", 11139.85],
      ["r84", "CFE - CVAE - TS", "key", 27448],
    ],
  },
  {
    label: "Salaires et charges sociales",
    lines: [
      ["r93", "Rémunération salariale", "key", 1124779.94],
      ["r94", "Frais de personnel", "key", 276000],
      ["r98", "Charges sociales salariales", "key", 411261.94],
      ["r99", "Frais de personnel", "key", 171436.8],
    ],
  },
  {
    label: "Dotations aux amortissements",
    lines: [
      ["r106", "Dot. amort. immos", "key", 8656.42],
      ["r107", "Dot. prov. risque transaction", "fixed", [33000, 0, 0, 0]],
      ["r108", "Reprise prov. ass. RC pro", "fixed", [-20000, 0, 0, 0]],
    ],
  },
  {
    label: "Autres produits et charges",
    lines: [
      ["r112", "Subvention", "fixed", [-7249.98, 0, 0, 0]],
      ["r113", "Charges financières", "fixed", [64.93, 0, 0, 0]],
      ["r114", "Divers produits financiers", "fixed", [-18.37, 0, 0, 0]],
      ["r115", "Autres produits exploitation", "fixed", [-6690.29, 0, 0, 0]],
    ],
  },
];

const taxLines = [
  { id: "r126", label: "Impôts société 15 %", mode: "key", total: 6375 },
  { id: "r127", label: "Impôts société 25 %", mode: "key", total: 127024 },
];

const accountingLines = [
  ...directCostLines,
  ...chargeSections.flatMap((section) =>
    section.lines.map(([id, label, mode, amount]) => ({
      id,
      label,
      mode,
      total: mode === "key" ? amount : null,
      values: mode === "fixed" ? amount : null,
      section: section.label,
    })),
  ),
  ...taxLines,
];

const state = {
  schemaVersion: 3,
  revenue: {
    travaux: [...baseRevenue.travaux],
    annexes: [...baseRevenue.annexes],
  },
  split: [50, 16.67, 16.67, 16.66],
  targetRate: 7,
  dissociatePersonnel: false,
  lines: Object.fromEntries(
    accountingLines.map((line) => [
      line.id,
      line.mode === "key" ? { total: line.total } : { values: [...line.values] },
    ]),
  ),
};

const money = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const percent = new Intl.NumberFormat("fr-FR", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const ids = {
  globalRevenue: document.querySelector("#globalRevenue"),
  splitControls: document.querySelector("#splitControls"),
  rateGrid: document.querySelector("#rateGrid"),
  revenueBody: document.querySelector("#revenueTable tbody"),
  chargesBody: document.querySelector("#chargesTable tbody"),
  resultBody: document.querySelector("#resultTable tbody"),
  chart: document.querySelector("#resultChart"),
  kpiRevenue: document.querySelector("#kpiRevenue"),
  kpiGrossMargin: document.querySelector("#kpiGrossMargin"),
  kpiGrossMarginRate: document.querySelector("#kpiGrossMarginRate"),
  kpiPreTax: document.querySelector("#kpiPreTax"),
  kpiNet: document.querySelector("#kpiNet"),
  targetRate: document.querySelector("#targetRate"),
  targetCurrentRate: document.querySelector("#targetCurrentRate"),
  targetRevenue: document.querySelector("#targetRevenue"),
  targetMaxRate: document.querySelector("#targetMaxRate"),
  targetStepImpact: document.querySelector("#targetStepImpact"),
  applyTargetRevenue: document.querySelector("#applyTargetRevenue"),
  dissociatePersonnel: document.querySelector("#dissociatePersonnel"),
  welcomeModal: document.querySelector("#welcomeModal"),
  closeWelcome: document.querySelector("#closeWelcome"),
  hideWelcomeNextTime: document.querySelector("#hideWelcomeNextTime"),
  bestAgency: document.querySelector("#bestAgency"),
  scenarioStatus: document.querySelector("#scenarioStatus"),
};

function sum(values) {
  return values.reduce((total, value) => total + Number(value || 0), 0);
}

function fmt(value) {
  return money.format(Math.round(value || 0));
}

function fmtSigned(value) {
  const text = fmt(value);
  return value < 0 ? text.replace("-", "- ") : text;
}

function escapeCsvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function lineValues(line, keys, revenueScale = 1) {
  const saved = state.lines[line.id];
  if (line.mode === "key") {
    return keys.map((key) => Number(saved.total || 0) * revenueScale * key);
  }

  return agencies.map((_, index) => Number(saved.values[index] || 0));
}

function getRevenueTotals() {
  return agencies.map((_, index) => state.revenue.travaux[index] + state.revenue.annexes[index]);
}

function getKeys(revenueTotals = getRevenueTotals()) {
  const total = Math.max(sum(revenueTotals), 1);
  return revenueTotals.map((value) => value / total);
}

function buildResults(revenueOverride = null) {
  const revenue = revenueOverride || getRevenueTotals();
  const keys = getKeys(revenue);
  const revenueScale = sum(revenue) / Math.max(baseTotalRevenue, 1);
  const directCosts = agencies.map((_, index) => sum(directCostLines.map((line) => lineValues(line, keys, revenueScale)[index])));
  const grossMargin = revenue.map((value, index) => value - directCosts[index]);
  const chargeLines = chargeSections.flatMap((section) =>
    section.lines.map(([id, label, mode, amount]) => ({
      id,
      label,
      mode,
      total: mode === "key" ? amount : null,
      values: mode === "fixed" ? amount : null,
      section: section.label,
    })),
  );
  const charges = agencies.map((_, index) => sum(chargeLines.map((line) => lineValues(line, keys, revenueScale)[index])));
  const preTax = grossMargin.map((value, index) => value - charges[index]);
  const tax = agencies.map((_, index) => sum(taxLines.map((line) => lineValues(line, keys, revenueScale)[index])));
  const net = preTax.map((value, index) => value - tax[index]);

  return { revenue, keys, revenueScale, directCosts, grossMargin, charges, preTax, tax, net, chargeLines };
}

function getRevenueDistributionForTotal(total) {
  const splitTotal = sum(state.split) || 100;
  return agencies.map((_, index) => total * (state.split[index] / splitTotal));
}

function findRevenueForTargetRate(targetRate) {
  const currentTotal = sum(getRevenueTotals());
  const target = targetRate / 100;
  let low = 1;
  let high = Math.max(currentTotal, baseTotalRevenue, 100000);

  const marginAt = (total) => {
    const model = buildResults(getRevenueDistributionForTotal(total));
    return sum(model.preTax) / Math.max(sum(model.revenue), 1);
  };

  while (marginAt(high) < target && high < 200000000) {
    high *= 1.5;
  }

  if (marginAt(high) < target) return null;

  for (let i = 0; i < 60; i += 1) {
    const mid = (low + high) / 2;
    if (marginAt(mid) >= target) high = mid;
    else low = mid;
  }

  return high;
}

function getMaxPreTaxRate() {
  const veryHighRevenue = Math.max(baseTotalRevenue * 1000, 1);
  const model = buildResults(getRevenueDistributionForTotal(veryHighRevenue));
  return sum(model.preTax) / Math.max(sum(model.revenue), 1);
}

function renderSplitControls() {
  ids.splitControls.innerHTML = agencies
    .map(
      (agency, index) => `
        <div class="split-row">
          <label for="split-${agency.key}">${agency.name}</label>
          <div class="input-unit compact">
            <input id="split-${agency.key}" data-split-index="${index}" type="number" min="0" max="100" step="0.01" value="${state.split[index].toFixed(2)}" />
            <span>%</span>
          </div>
        </div>
      `,
    )
    .join("");

  ids.splitControls.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      state.split[Number(input.dataset.splitIndex)] = Number(input.value || 0);
      applyGlobalSplit();
    });
  });
}

function renderAccountingSummary() {
  ids.rateGrid.innerHTML = `
    <div class="logic-card">
      <strong>Logique comptable</strong>
      <span>Clé = CA agence / CA total</span>
    </div>
    <div class="logic-card">
      <strong>Évolution CA</strong>
      <span id="revenueScaleLabel">x 1,00</span>
    </div>
    <div class="logic-card">
      <strong>Postes variables</strong>
      <span>Base x évolution CA x clé</span>
    </div>
    <div class="logic-card">
      <strong>Marge brute</strong>
      <span>Le taux bouge si les coûts directs changent</span>
    </div>
    <div class="logic-card">
      <strong>Postes affectés</strong>
      <span>Montants conservés par agence</span>
    </div>
  `;
}

function renderRevenueInputs() {
  ids.revenueBody.innerHTML = agencies
    .map((agency, index) => {
      const total = state.revenue.travaux[index] + state.revenue.annexes[index];
      return `
        <tr>
          <td>${agency.name}</td>
          <td><input data-revenue="travaux" data-index="${index}" type="number" min="0" step="1000" value="${state.revenue.travaux[index].toFixed(2)}" /></td>
          <td><input data-revenue="annexes" data-index="${index}" type="number" min="0" step="100" value="${state.revenue.annexes[index].toFixed(2)}" /></td>
          <td data-share="${index}">0,0 %</td>
          <td data-ca="${index}">${fmt(total)}</td>
        </tr>
      `;
    })
    .join("");

  ids.revenueBody.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      const field = input.dataset.revenue;
      const index = Number(input.dataset.index);
      state.revenue[field][index] = Number(input.value || 0);
      syncGlobalRevenue();
      recalc();
    });
  });
}

function renderChargesTable(model) {
  const keys = model.keys;
  const normalizeLine = (line) =>
    Array.isArray(line)
      ? {
          id: line[0],
          label: line[1],
          mode: line[2],
          total: line[2] === "key" ? line[3] : null,
          values: line[2] === "fixed" ? line[3] : null,
        }
      : line;

  const renderedSections = [
    {
      label: "Coûts directs",
      lines: directCostLines,
    },
    ...chargeSections.map((section) => ({
      label: section.label,
      lines: section.lines.map(([id, label, mode, amount]) => ({
        id,
        label,
        mode,
        total: mode === "key" ? amount : null,
        values: mode === "fixed" ? amount : null,
      })),
    })),
    {
      label: "Impôts société",
      lines: taxLines,
    },
  ];

  const sectionsHtml = renderedSections
    .map((section) => {
      const normalizedLines = section.lines.map(normalizeLine);
      const displayLines =
        section.label === "Salaires et charges sociales"
          ? state.dissociatePersonnel
            ? [
                {
                  id: "personnel-operational",
                  label: "Personnel opérationnel",
                  mode: "group",
                  sourceLines: normalizedLines.filter((line) => line.id === "r93" || line.id === "r98"),
                },
                {
                  id: "support-functions",
                  label: "Fonctions support",
                  mode: "group",
                  sourceLines: normalizedLines.filter((line) => line.id === "r94" || line.id === "r99"),
                },
              ]
            : [
              {
                id: "personnel-structure",
                label: "Frais de personnel",
                mode: "group",
                sourceLines: normalizedLines,
              },
            ]
          : normalizedLines;

      const rows = normalizedLines;

      const displayRows = displayLines
        .map((line) => {
          const values =
            line.mode === "group"
              ? agencies.map((_, index) => sum(line.sourceLines.map((sourceLine) => lineValues(sourceLine, keys, model.revenueScale)[index])))
              : lineValues(line, keys, model.revenueScale);
          const rule = line.mode === "key" ? "Clé CA" : "Affecté";
          const visibleRule = line.mode === "group" ? "Clé CA" : rule;
          const editable =
            line.mode === "key"
              ? `<input data-line-total="${line.id}" type="number" step="100" value="${Number(state.lines[line.id].total || 0).toFixed(2)}" />`
              : line.mode === "group"
                ? fmtSigned(sum(values))
                : "";
          const valueCells = agencies
            .map((_, index) => {
              if (line.mode === "fixed") {
                return `<td><input data-line-fixed="${line.id}" data-index="${index}" type="number" step="100" value="${Number(state.lines[line.id].values[index] || 0).toFixed(2)}" /></td>`;
              }
              return `<td>${fmtSigned(values[index])}</td>`;
            })
            .join("");

          return `
            <tr>
              <td>${line.label}</td>
              <td><span class="rule-pill">${visibleRule}</span></td>
              <td>${editable || fmtSigned(sum(values))}</td>
              ${valueCells}
              <td>${fmtSigned(sum(values))}</td>
            </tr>
          `;
        })
        .join("");

      const sectionTotals = agencies.map((_, index) => sum(rows.map((line) => lineValues(line, keys, model.revenueScale)[index])));
      return `
        <tr class="section-row"><td colspan="8">${section.label}</td></tr>
        ${displayRows}
        <tr class="charges-table-total">
          <td>Sous-total ${section.label}</td>
          <td></td>
          <td>${fmtSigned(sum(sectionTotals))}</td>
          ${sectionTotals.map((value) => `<td>${fmtSigned(value)}</td>`).join("")}
          <td>${fmtSigned(sum(sectionTotals))}</td>
        </tr>
      `;
    })
    .join("");

  ids.chargesBody.innerHTML = sectionsHtml;
  ids.chargesBody.querySelectorAll("[data-line-total]").forEach((input) => {
    input.addEventListener("input", () => {
      state.lines[input.dataset.lineTotal].total = Number(input.value || 0);
      recalc();
    });
  });
  ids.chargesBody.querySelectorAll("[data-line-fixed]").forEach((input) => {
    input.addEventListener("input", () => {
      state.lines[input.dataset.lineFixed].values[Number(input.dataset.index)] = Number(input.value || 0);
      recalc();
    });
  });
}

function syncGlobalRevenue() {
  ids.globalRevenue.value = Math.round(sum(state.revenue.travaux) + sum(state.revenue.annexes));
}

function applyGlobalSplit() {
  const total = Number(ids.globalRevenue.value || 0);
  const splitTotal = sum(state.split) || 100;
  const annexRate = sum(state.revenue.annexes) / Math.max(sum(state.revenue.travaux) + sum(state.revenue.annexes), 1);

  agencies.forEach((_, index) => {
    const agencyTotal = total * (state.split[index] / splitTotal);
    state.revenue.annexes[index] = agencyTotal * annexRate;
    state.revenue.travaux[index] = agencyTotal - state.revenue.annexes[index];
  });

  renderRevenueInputs();
  recalc();
}

function renderResults(model) {
  const rows = [
    ["Chiffre d'affaires", model.revenue, "subtotal"],
    ["Coûts directs", model.directCosts.map((value) => -value), ""],
    ["Marge brute", model.grossMargin, "subtotal"],
    ["Taux marge brute", model.grossMargin.map((value, index) => value / Math.max(model.revenue[index], 1)), "rate"],
    ["Charges selon logique comptable", model.charges.map((value) => -value), ""],
    ["Résultat avant impôt", model.preTax, "total"],
    ["Impôt société comptable", model.tax.map((value) => -value), ""],
    ["Résultat comptable", model.net, "total"],
  ];

  ids.resultBody.innerHTML = rows
    .map(([label, values, className]) => {
      if (className === "rate") {
        const cells = values.map((value) => `<td>${percent.format(value)}</td>`).join("");
        const totalRate = sum(model.grossMargin) / Math.max(sum(model.revenue), 1);
        return `<tr class="rate-row-table"><td>${label}</td>${cells}<td>${percent.format(totalRate)}</td></tr>`;
      }
      const cells = values
        .map((value) => `<td class="${value < 0 ? "negative" : "positive"}">${fmtSigned(value)}</td>`)
        .join("");
      const total = sum(values);
      return `<tr class="${className}"><td>${label}</td>${cells}<td class="${total < 0 ? "negative" : "positive"}">${fmtSigned(total)}</td></tr>`;
    })
    .join("");
}

function updateRevenueDerived(model) {
  model.revenue.forEach((value, index) => {
    const shareCell = ids.revenueBody.querySelector(`[data-share="${index}"]`);
    const caCell = ids.revenueBody.querySelector(`[data-ca="${index}"]`);
    if (shareCell) shareCell.textContent = percent.format(model.keys[index]);
    if (caCell) caCell.textContent = fmt(value);
  });
}

function updateKpis(model) {
  ids.kpiRevenue.textContent = fmt(sum(model.revenue));
  ids.kpiGrossMargin.textContent = fmt(sum(model.grossMargin));
  ids.kpiGrossMarginRate.textContent = `${percent.format(sum(model.grossMargin) / Math.max(sum(model.revenue), 1))} du CA`;
  ids.kpiPreTax.textContent = fmt(sum(model.preTax));
  ids.kpiNet.textContent = fmt(sum(model.net));

  ids.kpiPreTax.className = sum(model.preTax) < 0 ? "negative" : "positive";
  ids.kpiNet.className = sum(model.net) < 0 ? "negative" : "positive";

  const bestIndex = model.preTax.indexOf(Math.max(...model.preTax));
  ids.bestAgency.textContent = `${agencies[bestIndex].name} ${fmt(model.preTax[bestIndex])}`;

  const scaleLabel = document.querySelector("#revenueScaleLabel");
  if (scaleLabel) scaleLabel.textContent = `x ${model.revenueScale.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const preTaxRate = sum(model.preTax) / Math.max(sum(model.revenue), 1);
  ids.targetCurrentRate.textContent = percent.format(preTaxRate);
  const targetRevenue = findRevenueForTargetRate(state.targetRate);
  const nextTargetRevenue = findRevenueForTargetRate(state.targetRate + 0.1);
  ids.targetRevenue.textContent = targetRevenue === null ? "Non atteignable" : fmt(targetRevenue);
  ids.applyTargetRevenue.disabled = targetRevenue === null;
  ids.applyTargetRevenue.dataset.targetRevenue = targetRevenue === null ? "" : String(Math.round(targetRevenue));
  ids.targetMaxRate.textContent = percent.format(getMaxPreTaxRate());
  ids.targetStepImpact.textContent =
    targetRevenue === null || nextTargetRevenue === null
      ? "Non atteignable"
      : `+ ${fmt(nextTargetRevenue - targetRevenue)}`;
}

function drawChart(model) {
  const canvas = ids.chart;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.floor(rect.height * dpr);
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = rect.height;
  ctx.clearRect(0, 0, width, height);

  const padding = { top: 28, right: 22, bottom: 44, left: 54 };
  const values = model.preTax;
  const maxAbs = Math.max(...values.map((value) => Math.abs(value)), 1);
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const zeroY = padding.top + chartH / 2;
  const barW = Math.max(34, chartW / agencies.length - 32);

  ctx.strokeStyle = "#d9dfd7";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, zeroY);
  ctx.lineTo(width - padding.right, zeroY);
  ctx.stroke();

  values.forEach((value, index) => {
    const x = padding.left + index * (chartW / agencies.length) + (chartW / agencies.length - barW) / 2;
    const barH = Math.abs(value / maxAbs) * (chartH / 2 - 12);
    const y = value >= 0 ? zeroY - barH : zeroY;
    const fill = value >= 0 ? "#19715a" : "#b64343";

    ctx.fillStyle = fill;
    ctx.fillRect(x, y, barW, barH);
    ctx.fillStyle = "#18211f";
    ctx.font = "700 12px system-ui";
    ctx.textAlign = "center";
    ctx.fillText(fmt(value), x + barW / 2, value >= 0 ? y - 8 : y + barH + 16);
    ctx.fillStyle = "#66716b";
    ctx.font = "700 12px system-ui";
    ctx.fillText(agencies[index].name, x + barW / 2, height - 16);
  });
}

function recalc() {
  const model = buildResults();
  updateRevenueDerived(model);
  updateKpis(model);
  renderResults(model);
  renderChargesTable(model);
  drawChart(model);
}

function saveScenario() {
  localStorage.setItem("budgetAgenceScenario", JSON.stringify(state));
  ids.scenarioStatus.textContent = "Scénario enregistré";
}

function loadScenario() {
  const saved = localStorage.getItem("budgetAgenceScenario");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (parsed.schemaVersion !== 2) {
      localStorage.removeItem("budgetAgenceScenario");
      return;
    }
    Object.assign(state, parsed);
    ids.scenarioStatus.textContent = "Scénario chargé";
  } catch {
    localStorage.removeItem("budgetAgenceScenario");
  }
}

function resetScenario() {
  localStorage.removeItem("budgetAgenceScenario");
  state.revenue = { travaux: [...baseRevenue.travaux], annexes: [...baseRevenue.annexes] };
  state.split = [50, 16.67, 16.67, 16.66];
  state.targetRate = 7;
  state.dissociatePersonnel = false;
  state.lines = Object.fromEntries(
    accountingLines.map((line) => [
      line.id,
      line.mode === "key" ? { total: line.total } : { values: [...line.values] },
    ]),
  );
  ids.scenarioStatus.textContent = "Base Excel";
  boot();
}

function exportCsv() {
  const model = buildResults();
  const lines = [
    ["Ligne", ...agencies.map((agency) => agency.name), "Total"],
    ["Chiffre d'affaires", ...model.revenue, sum(model.revenue)],
    ["Coûts directs", ...model.directCosts.map((value) => -value), -sum(model.directCosts)],
    ["Marge brute", ...model.grossMargin, sum(model.grossMargin)],
    ["Charges selon logique comptable", ...model.charges.map((value) => -value), -sum(model.charges)],
    ["Résultat avant impôt", ...model.preTax, sum(model.preTax)],
    ["Impôt société comptable", ...model.tax.map((value) => -value), -sum(model.tax)],
    ["Résultat comptable", ...model.net, sum(model.net)],
  ];

  const csv = lines.map((line) => line.map(escapeCsvCell).join(";")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "previsionnel-par-agence.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

function bindControls() {
  ids.globalRevenue.addEventListener("input", applyGlobalSplit);
  ids.targetRate.addEventListener("input", () => {
    state.targetRate = Number(ids.targetRate.value || 0);
    recalc();
  });
  ids.applyTargetRevenue.addEventListener("click", () => {
    const target = Number(ids.applyTargetRevenue.dataset.targetRevenue || 0);
    if (!target) return;
    ids.globalRevenue.value = target;
    applyGlobalSplit();
  });
  ids.dissociatePersonnel.addEventListener("change", () => {
    state.dissociatePersonnel = ids.dissociatePersonnel.checked;
    recalc();
  });
  document.querySelector("#saveScenario").addEventListener("click", saveScenario);
  document.querySelector("#resetScenario").addEventListener("click", resetScenario);
  document.querySelector("#exportCsv").addEventListener("click", exportCsv);
  ids.closeWelcome.addEventListener("click", closeWelcomeModal);
  ids.welcomeModal.addEventListener("click", (event) => {
    if (event.target === ids.welcomeModal) closeWelcomeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && ids.welcomeModal.classList.contains("open")) closeWelcomeModal();
  });
  window.addEventListener("resize", () => drawChart(buildResults()));
}

function showWelcomeModal() {
  if (localStorage.getItem("budgetAgenceHideWelcome") === "true") return;
  ids.welcomeModal.classList.add("open");
}

function closeWelcomeModal() {
  if (ids.hideWelcomeNextTime.checked) {
    localStorage.setItem("budgetAgenceHideWelcome", "true");
  }
  ids.welcomeModal.classList.remove("open");
}

function boot() {
  ids.targetRate.value = Number(state.targetRate || 0).toFixed(1);
  ids.dissociatePersonnel.checked = Boolean(state.dissociatePersonnel);
  renderSplitControls();
  renderAccountingSummary();
  renderRevenueInputs();
  syncGlobalRevenue();
  recalc();
}

loadScenario();
bindControls();
boot();
showWelcomeModal();
