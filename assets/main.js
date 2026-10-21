// Publications data. `me` marks entries where the author list should bold "M. Aamir".
// Categories: wildlife | vision | dl | twin | other
const PUBS = [
  {
    title: "WildDepth: A Multimodal Dataset for 3D Wildlife Perception and Depth Estimation",
    authors: "M. Aamir, N. Muramatsu, S. Shin, M. Wijers, J.-X. Zhong, X. Hou, A. Patel, A. Loveridge, A. Markham",
    venue: "European Conference on Computer Vision (ECCV)", year: 2026, badge: "ECCV", featured: true, cats: ["wildlife", "vision"],
    links: { arXiv: "https://arxiv.org/abs/2603.16816", PDF: "https://arxiv.org/pdf/2603.16816" },
  },
  {
    title: "A non-invasive video-based method for individual identification of wildlife using gait dynamics",
    authors: "M. Aamir, M. Wijers, S. Shin, A. Loveridge, A. Markham",
    venue: "Preprint, under review", year: 2026, badge: "arXiv", featured: true, cats: ["wildlife", "vision"],
    links: { arXiv: "https://arxiv.org/abs/2607.04518", PDF: "https://arxiv.org/pdf/2607.04518", Code: "https://github.com/Morphocam/Animals_Gaits_Analysis" },
  },
  {
    title: "A robust metric distance and height estimation pipeline for wildlife camera trap imagery",
    authors: "M. Aamir, M. Wijers, A. Loveridge, A. Markham",
    venue: "Ecological Informatics, 92, 103520", year: 2025, badge: "Eco. Inf.", featured: true, cats: ["wildlife", "vision"],
    links: { Paper: "https://scholar.google.com/scholar?q=A+robust+metric+distance+and+height+estimation+pipeline+for+wildlife+camera+trap+imagery", Code: "https://github.com/Morphocam/Depth-Estimation" },
  },
  {
    title: "Digital Twinning remote laboratories for online practical learning",
    authors: "C. Palmer, B. Roullier, M. Aamir, F. McQuade, L. Stella, A. Anjum, U. Diala",
    venue: "Production & Manufacturing Research, 10(1), 519–545", year: 2022, badge: "PMR", featured: true, cats: ["twin"], cites: 30,
  },
  {
    title: "Hybrid Contractive Auto-encoder with Restricted Boltzmann Machine for Multiclass Classification",
    authors: "M. Aamir, N. M. Nawi, F. Wahid, et al.",
    venue: "Arabian Journal for Science and Engineering, 46, 9237–9251", year: 2021, badge: "AJSE", cats: ["dl"],
  },
  {
    title: "A comparison of pooling methods for convolutional neural networks",
    authors: "A. Zafar, M. Aamir, N. Mohd Nawi, A. Arshad, S. Riaz, A. Alruban, A. K. Dutta, et al.",
    venue: "Applied Sciences, 12(17), 8643", year: 2022, badge: "Appl. Sci.", cats: ["dl", "vision"], cites: 627,
  },
  {
    title: "Comparative analysis of recent architecture of convolutional neural network",
    authors: "M. A. Saleem, N. Senan, F. Wahid, M. Aamir, A. Samad, M. Khan",
    venue: "Mathematical Problems in Engineering, 2022", year: 2022, badge: "MPE", cats: ["dl", "vision"], cites: 101,
  },
  {
    title: "An efficient two-state GRU based on feature attention mechanism for sentiment analysis",
    authors: "M. Zulqarnain, R. Ghazali, M. Aamir, Y. M. M. Hassim",
    venue: "Multimedia Tools and Applications, 83(1), 3085–3110", year: 2024, badge: "MTAP", cats: ["dl"], cites: 90,
  },
  {
    title: "Dimension reduction using dual-featured auto-encoder for the histological classification of human lungs tissues",
    authors: "A. Ashraf, N. M. Nawi, T. Shahzad, M. Aamir, M. A. Khan, K. Ouahada",
    venue: "IEEE Access, 12, 104165–104176", year: 2024, badge: "IEEE Access", cats: ["dl", "vision"], cites: 23,
  },
  {
    title: "A comprehensive convolutional neural network survey to detect glaucoma disease",
    authors: "A. Zafar, M. Aamir, N. M. Nawi, S. Ali, M. Husnain, A. Samad",
    venue: "Mobile Information Systems, 2022", year: 2022, badge: "MIS", cats: ["dl", "vision"], cites: 18,
  },
  {
    title: "Virtual reality based digital twin system for remote laboratories and online practical learning",
    authors: "C. Palmer, B. Roullier, M. Aamir, L. Stella, U. Diala, A. Anjum, F. McQuade, et al.",
    venue: "Advances in Manufacturing Technology XXXIV", year: 2021, badge: "ICMR", cats: ["twin"], cites: 23,
  },
  {
    title: "A deep contractive autoencoder for solving multiclass classification problems",
    authors: "M. Aamir, N. Mohd Nawi, F. Wahid, H. Mahdin",
    venue: "Evolutionary Intelligence, 14(4), 1619–1633", year: 2021, badge: "EVIN", cats: ["dl"], cites: 36,
  },
  {
    title: "An enhanced gated recurrent unit with auto-encoder for solving text classification problems",
    authors: "M. Zulqarnain, R. Ghazali, Y. M. M. Hassim, M. Aamir",
    venue: "Arabian Journal for Science and Engineering, 46(9), 8953–8967", year: 2021, badge: "AJSE", cats: ["dl"], cites: 41,
  },
  {
    title: "A novel state space reduction algorithm for team formation in social networks",
    authors: "M. Z. Rehman, K. Z. Zamli, M. Almutairi, H. Chiroma, M. Aamir, M. A. Kader, et al.",
    venue: "PLOS ONE, 16(12), e0259786", year: 2021, badge: "PLOS ONE", cats: ["other"], cites: 27,
  },
  {
    title: "An efficient convolutional neural network for paddy leaf disease and pest classification",
    authors: "N. Senan, M. Aamir, R. Ibrahim, N. M. Taujuddin, W. W. Muda",
    venue: "Int. Journal of Advanced Computer Science and Applications, 11(7)", year: 2020, badge: "IJACSA", cats: ["dl", "vision"], cites: 82,
  },
  {
    title: "Energy consumption optimization and user comfort maximization in smart buildings using a hybrid of the firefly and genetic algorithms",
    authors: "F. Wahid, M. Fayaz, A. Aljarbouh, M. Mir, M. Aamir, Imran",
    venue: "Energies, 13(17), 4363", year: 2020, badge: "Energies", cats: ["other"], cites: 74,
  },
  {
    title: "An improved deep learning approach based on variant two-state gated recurrent unit and word embeddings for sentiment classification",
    authors: "M. Zulqarnain, S. Abd, R. Ghazali, N. Mohd, M. Aamir, Y. Mazwin",
    venue: "Int. Journal of Advanced Computer Science and Applications, 11(1)", year: 2020, badge: "IJACSA", cats: ["dl"], cites: 36,
  },
  {
    title: "An enhanced firefly algorithm using pattern search for solving optimization problems",
    authors: "F. Wahid, M. S. Zia, R. N. B. Rais, M. Aamir, U. M. Butt, M. Ali, A. Ahmed, I. A. Khan, et al.",
    venue: "IEEE Access, 8, 148264–148288", year: 2020, badge: "IEEE Access", cats: ["other"], cites: 19,
  },
  {
    title: "An efficient artificial intelligence hybrid approach for energy management in intelligent buildings",
    authors: "F. Wahid, L. H. B. Ismail, R. Ghazali, M. Aamir",
    venue: "KSII Transactions on Internet and Information Systems, 13(12), 5904–5927", year: 2019, badge: "KSII TIIS", cats: ["other"], cites: 51,
  },
  {
    title: "An optimized back propagation learning algorithm with adaptive learning rate",
    authors: "N. M. Nawi, F. Hamzah, N. A. Hamid, M. Z. Rehman, M. Aamir, A. A. Ramli",
    venue: "Int. Journal on Advanced Science, Engineering and Information Technology, 7(5)", year: 2017, badge: "IJASEIT", cats: ["dl"], cites: 24,
  },
];

const ICONS = { arXiv: "📄", PDF: "⬇", Code: "</>", Paper: "🔗", Scholar: "🎓" };

function renderPubs(filter) {
  const host = document.getElementById("pub-list");
  const items = PUBS.filter(p =>
    filter === "selected" ? p.featured : filter === "all" ? true : p.cats.includes(filter));
  host.innerHTML = items.map(p => {
    const authors = p.authors.replace(/M\. Aamir/g, "<b>M. Aamir</b>");
    const links = Object.assign({}, p.links || {});
    if (!links.Paper && !links.arXiv) {
      links.Scholar = "https://scholar.google.com/scholar?q=" + encodeURIComponent(p.title);
    }
    const tags = Object.entries(links)
      .map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${ICONS[k] || ""} ${k}</a>`).join("");
    const cites = p.cites ? `<span>Cited by ${p.cites}</span>` : "";
    return `<article class="pub${p.featured ? " featured" : ""}">
      <div class="badge">${p.badge}<small>${p.year}</small></div>
      <div>
        <h3>${p.title}</h3>
        <p class="authors">${authors}</p>
        <p class="venue">${p.venue}, ${p.year}</p>
        <div class="tags">${tags}${cites}</div>
      </div>
    </article>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  // Publications filter
  renderPubs("selected");
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      renderPubs(btn.dataset.f);
    });
  });

  // Theme toggle (remembered per browser)
  const root = document.documentElement;
  const btn = document.getElementById("theme");
  try { const t = localStorage.getItem("theme"); if (t) root.dataset.theme = t; } catch (e) {}
  const isDark = () => root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const syncIcon = () => { btn.textContent = isDark() ? "☀" : "☾"; };
  syncIcon();
  btn.addEventListener("click", () => {
    root.dataset.theme = isDark() ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
    syncIcon();
  });

  // Active nav link + reveal on scroll
  const links = [...document.querySelectorAll(".nav-links a")];
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach(s => io.observe(s));

  const rv = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rv.unobserve(e.target); } });
  }, { threshold: .08 });
  document.querySelectorAll(".reveal").forEach(el => rv.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();
});
