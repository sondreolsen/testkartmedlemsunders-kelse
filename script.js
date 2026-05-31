const counties = [
  { name: "Finnmark", short: "Finnmark", now: -19.6, outlook: -30.0, path: "M236 16 L312 28 L334 92 L296 130 L236 116 L210 58 Z", label: [275, 76] },
  { name: "Troms", short: "Troms", now: 5.8, outlook: -13.7, path: "M176 92 L230 62 L238 126 L286 138 L262 190 L198 184 L160 140 Z", label: [218, 145] },
  { name: "Nordland", short: "Nordland", now: -0.7, outlook: -9.2, path: "M144 164 L202 194 L256 198 L240 276 L198 304 L144 268 L116 214 Z", label: [190, 240] },
  { name: "Trøndelag", short: "Trøndelag", now: -16.0, outlook: -20.0, path: "M128 286 L194 318 L238 298 L258 354 L228 404 L154 398 L108 344 Z", label: [184, 350] },
  { name: "Møre og Romsdal", short: "Møre", now: 2.5, outlook: -10.7, path: "M70 386 L136 408 L158 456 L118 502 L56 478 L42 424 Z", label: [103, 445] },
  { name: "Vestland", short: "Vestland", now: 9.9, outlook: -1.1, path: "M70 492 L124 512 L150 570 L124 650 L62 636 L34 560 Z", label: [91, 573] },
  { name: "Rogaland", short: "Rogaland", now: 18.8, outlook: -5.4, path: "M62 650 L126 662 L132 728 L66 736 L36 700 Z", label: [87, 696] },
  { name: "Agder", short: "Agder", now: -2.1, outlook: 0.7, path: "M134 666 L224 664 L244 724 L176 744 L132 728 Z", label: [183, 705] },
  { name: "Telemark", short: "Telemark", now: -19.6, outlook: -25.7, path: "M146 594 L206 570 L244 616 L224 664 L136 656 L122 626 Z", label: [187, 625] },
  { name: "Vestfold", short: "Vestfold", now: -10.6, outlook: -15.5, path: "M228 634 L278 632 L286 690 L242 720 L224 664 Z", label: [257, 671] },
  { name: "Østfold", short: "Østfold", now: -13.6, outlook: -26.8, path: "M282 604 L330 612 L334 684 L290 692 L278 632 Z", label: [306, 649] },
  { name: "Oslo", short: "Oslo", now: -11.6, outlook: -16.0, path: "M248 578 L282 580 L282 616 L246 616 Z", label: [265, 602] },
  { name: "Akershus", short: "Akershus", now: -15.4, outlook: -19.4, path: "M232 526 L302 522 L326 582 L284 604 L246 572 L214 574 Z", label: [272, 556] },
  { name: "Buskerud", short: "Buskerud", now: -18.0, outlook: -21.9, path: "M158 492 L222 504 L236 560 L206 586 L146 586 L126 526 Z", label: [184, 540] },
  { name: "Innlandet", short: "Innlandet", now: -6.4, outlook: -18.1, path: "M160 404 L232 414 L288 470 L300 518 L228 518 L156 486 L124 442 Z", label: [221, 466] }
];

const associations = [
  { name: "Offshore Norge", now: 40.0, better: 30.0, unchanged: 70.0, worse: 0.0, outlook: 30.0 },
  { name: "Finans Norge", now: 34.7, better: 6.6, unchanged: 73.7, worse: 18.4, outlook: -12.0 },
  { name: "NHO Transport", now: 21.1, better: 21.1, unchanged: 63.2, worse: 15.8, outlook: 5.3 },
  { name: "NHO Mat og Drikke", now: 16.8, better: 10.5, unchanged: 73.7, worse: 14.0, outlook: -3.6 },
  { name: "Fornybar Norge", now: 10.6, better: 13.4, unchanged: 74.6, worse: 10.4, outlook: 3.0 },
  { name: "Sjømat Norge", now: 8.8, better: 17.5, unchanged: 45.6, worse: 36.8, outlook: -19.3 },
  { name: "Mediebedriftenes Landsforening", now: 5.7, better: 11.4, unchanged: 51.4, worse: 34.3, outlook: -23.5 },
  { name: "Abelia", now: 2.1, better: 13.9, unchanged: 61.6, worse: 22.0, outlook: -8.4 },
  { name: "NHO Logistikk og Transport", now: 1.8, better: 14.0, unchanged: 59.6, worse: 26.3, outlook: -12.3 },
  { name: "NHO Geneo", now: 0.0, better: 12.8, unchanged: 65.4, worse: 19.2, outlook: -6.6 },
  { name: "NHO Service og Handel", now: -1.1, better: 13.3, unchanged: 59.8, worse: 25.8, outlook: -12.7 },
  { name: "NHO Reiseliv", now: -5.0, better: 18.6, unchanged: 48.9, worse: 29.1, outlook: -10.9 },
  { name: "NHO Elektro", now: -5.1, better: 16.1, unchanged: 50.7, worse: 31.9, outlook: -16.0 },
  { name: "Norsk Industri", now: -7.6, better: 14.1, unchanged: 56.3, worse: 28.7, outlook: -14.7 },
  { name: "Norges Bilbransjeforbund (NBF)", now: -7.7, better: 12.3, unchanged: 55.5, worse: 32.3, outlook: -20.0 },
  { name: "NHO Luftfart", now: -16.7, better: 0.0, unchanged: 83.3, worse: 16.7, outlook: -16.7 },
  { name: "NHO Sjøfart", now: -16.7, better: 0.0, unchanged: 100.0, worse: 0.0, outlook: 0.0 },
  { name: "NHO Byggenæringen", now: -35.1, better: 10.1, unchanged: 52.4, worse: 37.5, outlook: -27.4 }
];

function formatNumber(value, decimals = 1) {
  return value.toLocaleString("no-NO", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}

function signed(value, decimals = 1) {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatNumber(value, decimals)}`;
}

function colorFor(value, min, max) {
  if (Math.abs(value) < 0.6) return "#d4d8dc";
  const red = [143, 22, 38];
  const grey = [212, 216, 220];
  const blue = [0, 58, 117];
  const t = value < 0 ? Math.min(Math.abs(value / min), 1) : Math.min(value / max, 1);
  const from = grey;
  const to = value < 0 ? red : blue;
  const rgb = from.map((channel, index) => Math.round(channel + (to[index] - channel) * t));
  return `rgb(${rgb.join(",")})`;
}

const countyLabelAnchors = {
  "Finnmark": [25.2, 70.1],
  "Troms": [19.0, 69.0],
  "Nordland": [14.6, 66.8],
  "Trøndelag": [11.4, 63.9],
  "Møre og Romsdal": [7.7, 62.5],
  "Vestland": [6.2, 61.0],
  "Rogaland": [5.9, 59.1],
  "Agder": [8.2, 58.1],
  "Telemark": [7.7, 59.1],
  "Vestfold": [10.1, 58.75],
  "Østfold": [12.2, 59.0],
  "Oslo": [12.05, 59.75],
  "Akershus": [12.55, 60.45],
  "Buskerud": [8.25, 60.55],
  "Innlandet": [10.9, 61.9]
};

const countyLabelPositions = {
  "Finnmark": [430, 124],
  "Troms": [315, 154],
  "Nordland": [246, 256],
  "Trøndelag": [174, 408],
  "Møre og Romsdal": [86, 452],
  "Vestland": [62, 528],
  "Rogaland": [42, 620],
  "Agder": [80, 674],
  "Telemark": [164, 676],
  "Vestfold": [236, 666],
  "Østfold": [270, 622],
  "Oslo": [270, 586],
  "Akershus": [278, 548],
  "Buskerud": [226, 522],
  "Innlandet": [148, 522]
};

const countyCalloutTargets = {
  "Akershus": [162, 580],
  "Oslo": [153, 583],
  "Østfold": [163, 613],
  "Vestfold": [138, 612],
  "Telemark": [100, 602],
  "Buskerud": [115, 567],
  "Agder": [81, 628]
};

let countyGeoJsonPromise;

function loadCountyGeoJson() {
  if (!countyGeoJsonPromise) {
    countyGeoJsonPromise = fetch("assets/maps/fylker-2024.geojson").then((response) => {
      if (!response.ok) throw new Error("Kunne ikke laste fylkeskart");
      return response.json();
    });
  }
  return countyGeoJsonPromise;
}

function countyName(feature) {
  return feature.properties.name || feature.properties.navn || feature.properties.fylkesnavn.split(" - ")[0];
}

function projectRaw(coord) {
  const [lon, lat] = coord;
  const a = 6378137;
  const e2 = 0.00669438;
  const k0 = 0.9996;
  const lon0 = 15 * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda = lon * Math.PI / 180;
  const ep2 = e2 / (1 - e2);
  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);
  const tanPhi = Math.tan(phi);
  const n = a / Math.sqrt(1 - e2 * sinPhi * sinPhi);
  const t = tanPhi * tanPhi;
  const c = ep2 * cosPhi * cosPhi;
  const aa = (lambda - lon0) * cosPhi;
  const m = a * (
    (1 - e2 / 4 - 3 * e2 ** 2 / 64 - 5 * e2 ** 3 / 256) * phi
    - (3 * e2 / 8 + 3 * e2 ** 2 / 32 + 45 * e2 ** 3 / 1024) * Math.sin(2 * phi)
    + (15 * e2 ** 2 / 256 + 45 * e2 ** 3 / 1024) * Math.sin(4 * phi)
    - (35 * e2 ** 3 / 3072) * Math.sin(6 * phi)
  );
  const x = k0 * n * (aa + (1 - t + c) * aa ** 3 / 6 + (5 - 18 * t + t ** 2 + 72 * c - 58 * ep2) * aa ** 5 / 120);
  const y = k0 * (m + n * tanPhi * (aa ** 2 / 2 + (5 - t + 9 * c + 4 * c ** 2) * aa ** 4 / 24 + (61 - 58 * t + t ** 2 + 600 * c - 330 * ep2) * aa ** 6 / 720));
  return [x, -y];
}

function walkCoordinates(coordinates, visit) {
  if (typeof coordinates[0] === "number") {
    visit(coordinates);
    return;
  }
  coordinates.forEach((child) => walkCoordinates(child, visit));
}

function createProjection(features, width, height, padding) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  features.forEach((feature) => {
    walkCoordinates(feature.geometry.coordinates, (coord) => {
      const [x, y] = projectRaw(coord);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    });
  });

  const scale = Math.min((width - padding * 2) / (maxX - minX), (height - padding * 2) / (maxY - minY));
  const offsetX = (width - (maxX - minX) * scale) / 2;
  const offsetY = (height - (maxY - minY) * scale) / 2;

  return (coord) => {
    const [x, y] = projectRaw(coord);
    return [
      offsetX + (x - minX) * scale,
      offsetY + (y - minY) * scale
    ];
  };
}

function ringToPath(ring, project) {
  return ring.map((coord, index) => {
    const [x, y] = project(coord);
    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";
}

function geometryToPath(geometry, project) {
  if (geometry.type === "Polygon") {
    return geometry.coordinates.map((ring) => ringToPath(ring, project)).join(" ");
  }
  if (geometry.type === "MultiPolygon") {
    return geometry.coordinates.flatMap((polygon) => polygon.map((ring) => ringToPath(ring, project))).join(" ");
  }
  return "";
}

async function renderMap(svgId, metric) {
  const svg = document.getElementById(svgId);
  const geoJson = await loadCountyGeoJson();
  const values = counties.map((county) => county[metric]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const project = createProjection(geoJson.features, 520, 720, 14);

  svg.innerHTML = "";
  geoJson.features.forEach((feature) => {
    const name = countyName(feature);
    const county = counties.find((item) => item.name === name);
    if (!county) return;
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    const callout = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const box = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const value = document.createElementNS("http://www.w3.org/2000/svg", "text");
    const [labelX, labelY] = countyLabelPositions[name] || project(countyLabelAnchors[name]);
    const boxWidth = name.length > 12 ? 92 : 74;

    title.textContent = `${county.name}: ${signed(county[metric])}`;
    path.setAttribute("class", "county");
    path.setAttribute("d", geometryToPath(feature.geometry, project));
    path.setAttribute("fill", colorFor(county[metric], min, max));
    path.setAttribute("tabindex", "0");

    if (countyCalloutTargets[name]) {
      const [targetX, targetY] = countyCalloutTargets[name];
      callout.setAttribute("class", "county-callout");
      callout.setAttribute("x1", targetX);
      callout.setAttribute("y1", targetY);
      callout.setAttribute("x2", labelX);
      callout.setAttribute("y2", labelY);
    }

    box.setAttribute("class", "county-label-box");
    box.setAttribute("x", labelX - boxWidth / 2);
    box.setAttribute("y", labelY - 18);
    box.setAttribute("width", boxWidth);
    box.setAttribute("height", 34);
    box.setAttribute("rx", 5);

    label.setAttribute("class", "county-label");
    label.setAttribute("x", labelX);
    label.setAttribute("y", labelY - 4);
    label.textContent = county.short || county.name;

    value.setAttribute("class", "county-value");
    value.setAttribute("x", labelX);
    value.setAttribute("y", labelY + 10);
    value.textContent = signed(county[metric]);

    group.append(title, path);
    if (countyCalloutTargets[name]) group.appendChild(callout);
    group.append(box, label, value);
    svg.appendChild(group);
  });
}

function renderMetrics() {
  const bestNow = counties.reduce((best, item) => item.now > best.now ? item : best);
  const worstNow = counties.reduce((worst, item) => item.now < worst.now ? item : worst);
  const bestOutlook = counties.reduce((best, item) => item.outlook > best.outlook ? item : best);
  const worstOutlook = counties.reduce((worst, item) => item.outlook < worst.outlook ? item : worst);

  document.getElementById("bestNow").textContent = `${bestNow.name} ${signed(bestNow.now)}`;
  document.getElementById("worstNow").textContent = `${worstNow.name} ${signed(worstNow.now)}`;
  document.getElementById("bestOutlook").textContent = `${bestOutlook.name} ${signed(bestOutlook.outlook)}`;
  document.getElementById("worstOutlook").textContent = `${worstOutlook.name} ${signed(worstOutlook.outlook)}`;
}

function renderAssociationBars() {
  renderNetBars("associationBars", "now", 40);
}

function renderOutlookBars() {
  renderNetBars("outlookBars", "outlook", 32);
}

function renderNetBars(containerId, metric, scaleMax) {
  const sorted = [...associations].sort((a, b) => b.now - a.now);
  if (metric === "outlook") sorted.sort((a, b) => b.outlook - a.outlook);
  const container = document.getElementById(containerId);
  const chart = document.createElement("div");
  chart.className = "horizontal-chart";

  sorted.forEach((item) => {
    const metricValue = item[metric];
    const row = document.createElement("div");
    row.className = "horizontal-row";

    const name = document.createElement("span");
    name.className = "association-name";
    name.textContent = associationDisplayName(item.name);

    const track = document.createElement("div");
    track.className = "horizontal-track";

    const bar = document.createElement("span");
    bar.className = metricValue >= 0 ? "horizontal-bar positive" : "horizontal-bar negative";
    bar.style.width = `${Math.min(Math.abs(metricValue) / scaleMax, 1) * 50}%`;

    const value = document.createElement("span");
    value.className = "horizontal-value";
    value.textContent = signed(metricValue);

    track.append(bar);
    row.append(name, track, value);
    chart.appendChild(row);
  });

  container.appendChild(chart);
}

function logoMark(name) {
  if (name.includes("Offshore")) return "ON";
  if (name.includes("Finans")) return "FN";
  if (name.includes("Fornybar")) return "FOR";
  if (name.includes("Sjømat")) return "SJ";
  if (name.includes("Medie")) return "MBL";
  if (name.includes("Bilbransje")) return "NBF";
  if (name.includes("Norsk Industri")) return "NI";
  if (name.startsWith("NHO")) return "NHO";
  return name.slice(0, 3).toUpperCase();
}

function logoLabel(name) {
  return name
    .replace("Norges Bilbransjeforbund (NBF)", "Bilbransjen")
    .replace("Mediebedriftenes Landsforening", "Mediebedriftene")
    .replace("NHO Logistikk og Transport", "Logistikk")
    .replace("NHO Service og Handel", "Service/Handel")
    .replace("NHO Mat og Drikke", "Mat/Drikke")
    .replace("NHO ", "");
}

function associationDisplayName(name) {
  if (name === "Mediebedriftenes Landsforening") return "Mediebedriftenes Landsforening (MBL)";
  return name;
}

renderMetrics();
renderMap("mapNow", "now");
renderMap("mapOutlook", "outlook");
renderAssociationBars();
renderOutlookBars();
