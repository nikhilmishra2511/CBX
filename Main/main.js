const coins = [
  { symbol: 'btcusdt', name: 'Bitcoin', image: 'CoinImg/btc.png' },
  { symbol: 'ethusdt', name: 'Ethereum', image: 'CoinImg/eth.png' },
  { symbol: 'bnbusdt', name: 'BNB', image: 'CoinImg/bnb.png' },
  { symbol: 'xrpusdt', name: 'XRP', image: 'CoinImg/xrp.png' },
  { symbol: 'solusdt', name: 'Solana', image: 'CoinImg/sol.png' },
  { symbol: 'adausdt', name: 'Cardano', image: 'CoinImg/ada.png' },
  { symbol: 'dogeusdt', name: 'Dogecoin', image: 'CoinImg/doge.png' },
  { symbol: 'tonusdt', name: 'Ton', image: 'CoinImg/ton.png' },
  { symbol: 'ltcusdt', name: 'Litecoin', image: 'CoinImg/ltc.png' },
  { symbol: 'dotusdt', name: 'Polkadot', image: 'CoinImg/dot.png' },
  { symbol: 'suiusdt', name: 'Sui', image: 'CoinImg/sui.png' },
  { symbol: 'trxusdt', name: 'TRON', image: 'CoinImg/trx.png' },
  { symbol: 'avaxusdt', name: 'Avalanche', image: 'CoinImg/avax.png' },
  { symbol: 'uniusdt', name: 'Uniswap', image: 'CoinImg/uni.png' },
  { symbol: 'linkusdt', name: 'Chainlink', image: 'CoinImg/link.png' },
  { symbol: 'slfusdt', name: 'SLF', image: 'CoinImg/slf.png' },
  { symbol: 'trumpusdt', name: 'TRUMP', image: 'CoinImg/trump.png' },
  { symbol: 'wctusdt', name: 'WalletConnect', image: 'CoinImg/wct.png' },
  { symbol: 'wifusdt', name: 'DogWifHat', image: 'CoinImg/wif.png' },
  { symbol: 'nxpcusdt', name: 'NexPace', image: 'CoinImg/nxpc.png' },
  { symbol: 'sxtusdt', name: 'Space and Time', image: 'CoinImg/sxt.png' },
  { symbol: 'nexousdt', name: 'NEXO', image: 'CoinImg/nexo.png' },
  { symbol: 'solvusdt', name: 'Solv Protocol', image: 'CoinImg/solv.png' },
  { symbol: 'trbusdt', name: 'Tellor Tributes', image: 'CoinImg/trb.png' },
  { symbol: 'phausdt', name: 'Phala Network', image: 'CoinImg/pha.png' },
  { symbol: 'actusdt', name: 'Act I : The AI Prophecy', image: 'CoinImg/act.png' },
  { symbol: 'pnutusdt', name: 'Peanut the Squirrel', image: 'CoinImg/pnut.png' },
  { symbol: 'algousdt', name: 'Algorand', image: 'CoinImg/algo.png' },
  { symbol: 'filusdt', name: 'FileCoin', image: 'CoinImg/fil.png' },
  { symbol: 'qtumusdt', name: 'QTUM', image: 'CoinImg/qtum.png' },
  { symbol: 'vanausdt', name: 'VANA', image: 'CoinImg/vana.png' },
  { symbol: 'opusdt', name: 'Optimism', image: 'CoinImg/op.png' },
  { symbol: 'jupusdt', name: 'Jupiter', image: 'CoinImg/jup.png' },
  { symbol: 'lumiausdt', name: 'LUMIA', image: 'CoinImg/lumia.png' },
  { symbol: 'initusdt', name: 'Initia', image: 'CoinImg/init.png' },
  { symbol: 'portalusdt', name: 'Portal', image: 'CoinImg/portal.png' },
  { symbol: 'catiusdt', name: 'Catizen', image: 'CoinImg/cati.png' },
  { symbol: 'bmtusdt', name: 'Bubblemaps', image: 'CoinImg/bmt.png' },
  { symbol: 'flmusdt', name: 'Flamingo', image: 'CoinImg/flm.png' },
  { symbol: 'omusdt', name: 'Mantra', image: 'CoinImg/om.png' },
  { symbol: 'santosusdt', name: 'SANTOS FC FAN TOKEN', image: 'CoinImg/santos.png' },
  { symbol: 'alpineusdt', name: 'ALPINE F1 FAN TOKEN', image: 'CoinImg/alpine.png' },
  { symbol: 'formusdt', name: 'FOUR', image: 'CoinImg/form.png' },
  { symbol: 'superusdt', name: 'SuperVerse', image: 'CoinImg/super.png' },
  { symbol: 'epicusdt', name: 'Epic Chain', image: 'CoinImg/epic.png' },
  { symbol: 'zecusdt', name: 'Zcash', image: 'CoinImg/zec.png' },
  { symbol: 'dashusdt', name: 'Dash', image: 'CoinImg/dash.png' },
  { symbol: 'dcrusdt', name: 'Decred', image: 'CoinImg/dcr.png' },
  { symbol: 'ksmusdt', name: 'Kusama', image: 'CoinImg/ksm.png' },
  { symbol: 'aaveusdt', name: 'Aave', image: 'CoinImg/aave.png' },
  { symbol: 'wbethusdt', name: 'Wrapped Beacon ETH', image: 'CoinImg/wbeth.png' },
  { symbol: 'wldusdt', name: 'WorldCoin', image: 'CoinImg/wld.png' },
  { symbol: 'taousdt', name: 'Bittensor', image: 'CoinImg/tao.png' },
  { symbol: 'aptusdt', name: 'Aptos', image: 'CoinImg/apt.png' },
  { symbol: 'nearusdt', name: 'Near Protocol', image: 'CoinImg/near.png' },
  { symbol: 'icpusdt', name: 'Internet Computer', image: 'CoinImg/icp.png' },
  { symbol: 'arbusdt', name: 'Arbitrum', image: 'CoinImg/arb.png' },
  { symbol: 'renderusdt', name: 'Render', image: 'CoinImg/render.png' },
  { symbol: 'virtualusdt', name: 'Virtuals Protocol', image: 'CoinImg/virtual.png' },
  { symbol: 'tiausdt', name: 'Celestia', image: 'CoinImg/tia.png' },
  { symbol: 'enausdt', name: 'Ethena', image: 'CoinImg/ena.png' },
  { symbol: 'atomusdt', name: 'Cosmos', image: 'CoinImg/atom.png' },
  { symbol: 'mkrusdt', name: 'Maker', image: 'CoinImg/mkr.png' },
  { symbol: 'bnsolusdt', name: 'Binance Staked SOL', image: 'CoinImg/bnsol.png' },
  { symbol: 'rayusdt', name: 'Raydium', image: 'CoinImg/ray.png' },
  { symbol: 'jtousdt', name: 'JITO', image: 'CoinImg/jto.png' },
  { symbol: 'dexeusdt', name: 'DeXe', image: 'CoinImg/dexe.png' },
  { symbol: 'qntusdt', name: 'Quant', image: 'CoinImg/qnt.png' },
  { symbol: 'injusdt', name: 'Injective', image: 'CoinImg/inj.png' },
  { symbol: 'stxusdt', name: 'Stacks', image: 'CoinImg/stx.png' },
  { symbol: 'pendleusdt', name: 'Pendle', image: 'CoinImg/pendle.png' },
  { symbol: 'paxgusdt', name: 'PAX Gold', image: 'CoinImg/paxg.png' },
  { symbol: 'cakeusdt', name: 'PanCakeSwap', image: 'CoinImg/cake.png' },
  { symbol: 'runeusdt', name: 'ThorChain', image: 'CoinImg/rune.png' },
  { symbol: 'axsusdt', name: 'Axie Infinity', image: 'CoinImg/axs.png' },
  { symbol: 'ethfiusdt', name: 'Ether.Fi', image: 'CoinImg/ethfi.png' },
  { symbol: 'xtzusdt', name: 'Tezos', image: 'CoinImg/xtz.png' },
  { symbol: 'neousdt', name: 'NEO', image: 'CoinImg/neo.png' },
  { symbol: 'flowusdt', name: 'Flow', image: 'CoinImg/flow.png' },
  { symbol: 'zrousdt', name: 'LayerZero', image: 'CoinImg/zro.png' },
  { symbol: 'apeusdt', name: 'ApeCoin', image: 'CoinImg/ape.png' },
  { symbol: 'kaitousdt', name: 'Kaito', image: 'CoinImg/kaito.png' },
  { symbol: 'egldusdt', name: 'MultiversX', image: 'CoinImg/egld.png' },
  { symbol: 'compusdt', name: 'Compound', image: 'CoinImg/comp.png' },
  { symbol: 'gnousdt', name: 'Gnosis', image: 'CoinImg/gno.png' },
  { symbol: 'lptusdt', name: 'Livepeer', image: 'CoinImg/lpt.png' },
  { symbol: 'maskusdt', name: 'Mask Network', image: 'CoinImg/mask.png' },
  { symbol: 'sfpusdt', name: 'SafePal', image: 'CoinImg/sfp.png' },
  { symbol: 'snxusdt', name: 'Synthetix', image: 'CoinImg/snx.png' },
  { symbol: 'layerusdt', name: 'SoLayer', image: 'CoinImg/layer.png' },
  { symbol: 'gasusdt', name: 'GAS', image: 'CoinImg/gas.png' },
  { symbol: 'ordiusdt', name: 'ORDI', image: 'CoinImg/ordi.png' },
  { symbol: 'yfiusdt', name: 'Yearn.Finance', image: 'CoinImg/yfi.png' },
  { symbol: 'orcausdt', name: 'Orca', image: 'CoinImg/orca.png' },
  { symbol: 'gmxusdt', name: 'GMX', image: 'CoinImg/gmx.png' },
  { symbol: 'xnousdt', name: 'NANO', image: 'CoinImg/xno.png' },
  { symbol: 'ilvusdt', name: 'Illuvium', image: 'CoinImg/ilv.png' },
  { symbol: 'metisusdt', name: 'METIS', image: 'CoinImg/metis.png' },
  { symbol: 'ssvusdt', name: 'SSV.Network', image: 'CoinImg/ssv.png' },
  { symbol: 'auctionusdt', name: 'Auction', image: 'CoinImg/auction.png' },
  { symbol: 'gnsusdt', name: 'Gains Network', image: 'CoinImg/gns.png' },
  { symbol: 'psgusdt', name: 'Paris Saint-Germain Fan Token', image: 'CoinImg/psg.png' },
  { symbol: 'scrusdt', name: 'Scroll', image: 'CoinImg/scr.png' },
  { symbol: 'movrusdt', name: 'MoonRiver', image: 'CoinImg/movr.png' },
  { symbol: 'ntrnusdt', name: 'Neutron', image: 'CoinImg/ntrn.png' },
 

];

const coinGrid = document.getElementById('coinGrid');
const coinMap = {};

// Render initial coin cards
coins.forEach(coin => {
  const card = document.createElement('div');
  card.className = 'coin-card';
  card.id = coin.symbol;

  card.innerHTML = `
    <img src="${coin.image}" alt="${coin.name}">
    <div class="coin-name">${coin.name}</div>
    <div class="coin-price" id="price-${coin.symbol}">Loading...</div>
    <div class="coin-meta" id="meta-${coin.symbol}" style="font-size: 0.8rem; color: #aaa;">...</div>
    <div style="margin-top: 8px;">
      <button onclick="handleTrade('${coin.symbol}', '${coin.name}', 'buy')">Buy</button>
      <button onclick="handleTrade('${coin.symbol}', '${coin.name}', 'sell')">Sell</button>
    </div>
  `;

  coinGrid.appendChild(card);
  coinMap[coin.symbol] = {
    priceEl: document.getElementById(`price-${coin.symbol}`),
    metaEl: document.getElementById(`meta-${coin.symbol}`)
  };
});

// Binance WebSocket for price/volume etc.
// Show enough decimals for cheap coins (0.00001234 should not become "0.00")
function fmtPrice(n) {
  n = parseFloat(n);
  if (!isFinite(n)) return '--';
  if (n >= 1000) return n.toFixed(2);
  if (n >= 1) return n.toFixed(4);
  if (n >= 0.01) return n.toFixed(5);
  return n.toFixed(8);
}

function updateCoin(sym, close, vol, high, low) {
  const c = coinMap[sym.toLowerCase()];
  if (!c) return;
  c.priceEl.textContent = `$${fmtPrice(close)}`;
  c.metaEl.textContent = `24h Vol: ${parseFloat(vol).toFixed(2)}, High: $${fmtPrice(high)}, Low: $${fmtPrice(low)}`;
}

// ---------------------------------------------------------------------------
// Price data. Source A = Binance (several hosts, tried in parallel).
// Source B = CryptoCompare, used automatically when Binance can't be reached
// (some ISPs / networks block every Binance domain).
// ---------------------------------------------------------------------------
const REST_HOSTS = [
  'https://data-api.binance.vision',
  'https://api.binance.com',
  'https://api1.binance.com',
  'https://api.binance.us'
];

// fetch with a timeout so a blocked host can't hang forever
function fetchJson(url, ms = 6000) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { signal: ctrl.signal })
    .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
    .finally(() => clearTimeout(timer));
}

let binanceDownUntil = 0; // when Binance fails, skip it for a few minutes

async function snapshotBinance() {
  const all = await Promise.any(REST_HOSTS.map(h => fetchJson(`${h}/api/v3/ticker/24hr`, 6000)));
  const found = new Set();
  all.forEach(t => {
    const sym = t.symbol.toLowerCase();
    if (coinMap[sym]) {
      found.add(sym);
      updateCoin(sym, t.lastPrice, t.volume, t.highPrice, t.lowPrice);
    }
  });
  if (!found.size) throw new Error('Binance returned no matching pairs');
  return found;
}

async function snapshotCryptoCompare() {
  const bases = coins.map(c => c.symbol.replace(/usdt$/, '').toUpperCase());
  const chunks = [];
  for (let i = 0; i < bases.length; i += 40) chunks.push(bases.slice(i, i + 40));
  const found = new Set();
  await Promise.all(chunks.map(async ch => {
    try {
      const j = await fetchJson(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ch.join(',')}&tsyms=USD`, 10000);
      const raw = j.RAW || {};
      Object.keys(raw).forEach(b => {
        const d = raw[b] && raw[b].USD;
        const sym = b.toLowerCase() + 'usdt';
        if (!d || !coinMap[sym]) return;
        found.add(sym);
        updateCoin(sym, d.PRICE, d.VOLUME24HOUR, d.HIGH24HOUR, d.LOW24HOUR);
      });
    } catch (e) {
      console.warn('CryptoCompare chunk failed', e);
    }
  }));
  if (!found.size) throw new Error('CryptoCompare returned nothing');
  return found;
}

let lastSource = '';
async function loadSnapshot() {
  let found = null, source = '';
  if (Date.now() > binanceDownUntil) {
    try { found = await snapshotBinance(); source = 'Binance'; }
    catch (e) { console.warn('Binance unreachable, switching to CryptoCompare', e); binanceDownUntil = Date.now() + 5 * 60 * 1000; }
  }
  if (!found) {
    try { found = await snapshotCryptoCompare(); source = 'CryptoCompare'; }
    catch (e) {
      console.error('All price sources failed', e);
      coins.forEach(c => {
        const el = coinMap[c.symbol].priceEl;
        if (el.textContent === 'Loading...') el.textContent = 'Unavailable';
      });
      return;
    }
  }
  if (source !== lastSource) { console.log('Price source:', source); lastSource = source; }
  // Coins that simply aren't on the source would otherwise say "Loading..." forever
  coins.forEach(c => {
    if (!found.has(c.symbol)) {
      const el = coinMap[c.symbol].priceEl;
      if (el.textContent === 'Loading...' || el.textContent === 'N/A') {
        el.textContent = 'N/A';
        coinMap[c.symbol].metaEl.textContent = 'Not listed';
      }
    }
  });
}
loadSnapshot();
setInterval(loadSnapshot, 10000); // keeps prices fresh whichever source is used

// Optional live WebSocket (Binance only). If it can't connect we just keep polling.
const WS_HOSTS = [
  'wss://data-stream.binance.vision/ws/!miniTicker@arr',
  'wss://stream.binance.com:9443/ws/!miniTicker@arr'
];
let wsHostIndex = 0, wsFails = 0;

function connectWS() {
  if (wsFails >= 4) return; // give up quietly, polling covers it
  const ws = new WebSocket(WS_HOSTS[wsHostIndex % WS_HOSTS.length]);
  ws.onopen = () => { wsFails = 0; };
  ws.onmessage = (event) => {
    const arr = JSON.parse(event.data);
    (Array.isArray(arr) ? arr : [arr]).forEach(d => updateCoin(d.s, d.c, d.v, d.h, d.l));
  };
  ws.onerror = () => ws.close();
  ws.onclose = () => { wsFails++; wsHostIndex++; setTimeout(connectWS, 3000); };
}
connectWS();

// Buy/Sell action → save details to localStorage and go to trade.html
function handleTrade(symbol, name, action) {
  const price = coinMap[symbol]?.priceEl?.textContent || "0";
  const meta = coinMap[symbol]?.metaEl?.textContent || "";

  localStorage.setItem("tradeData", JSON.stringify({
    symbol,
    name,
    price,
    meta,
    action
  }));

  window.location.href = "trade.html";
}

// Search input filter
function searchCoin() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  coins.forEach(c => {
    const card = document.getElementById(c.symbol);
    if (c.name.toLowerCase().includes(input) || c.symbol.includes(input)) {
      card.style.display = "flex"; // cards are flex containers; "block" broke their layout
    } else {
      card.style.display = "none";
    }
  });
}

// Greet user by email
window.onload = async function () {
  const email = localStorage.getItem("userEmail");
  if (!email) return;
  try {
    const res = await fetch("main.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${encodeURIComponent(email)}`
    });
    const username = await res.text();
    document.getElementById("greeting").textContent = `👋 Hello, ${username.trim()} !`;
  } catch (err) {
    console.error("User fetch error:", err);
  }
};



function suggestCoins() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = "";

  if (!input) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = coins.filter(c => c.name.toLowerCase().startsWith(input) || c.symbol.toLowerCase().startsWith(input));
  
  if (matches.length > 0) {
    matches.forEach(c => {
      const div = document.createElement("div");
      div.textContent = `${c.name} (${c.symbol.toUpperCase()})`;
      div.onclick = () => {
        document.getElementById("searchInput").value = c.name;
        suggestionBox.style.display = "none";
        searchCoin(); // Optionally trigger search immediately
      };
      suggestionBox.appendChild(div);
    });
    suggestionBox.style.display = "block";
  } else {
    suggestionBox.style.display = "none";
  }
}