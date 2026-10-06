// ─── Data ────────────────────────────────────────────────────────────────────
// Every topic from the roadmap is listed here with its expected filename.
// The site tries to fetch the file — if found it renders it, if not it shows
// a "note not written yet" message. No manual updates needed when you add files.

function t(id, title, slug) {
  return { id, title, file: `C%23/${slug}-notes.md` };
}

const PHASES = [
  {
    id: 1, title: "C# Basics", icon: "🟦",
    topics: [
      t("1.1", "Introduction",           "1.1-introduction"),
      t("1.2", "Variables & Data Types",  "1.2-variables-and-data-types"),
      t("1.3", "Type Conversion",         "1.3-type-conversion"),
      t("1.4", "Operators",               "1.4-operators-and-expressions"),
      t("1.5", "Control Flow",            "1.5-control-flow"),
      t("1.6", "Methods",                 "1.6-methods"),
    ]
  },
  {
    id: 2, title: "OOP", icon: "🟩",
    topics: [
      t("2.1", "Classes & Objects", "2.1-classes-and-objects"),
      t("2.2", "Encapsulation",     "2.2-encapsulation"),
      t("2.3", "Inheritance",       "2.3-inheritance"),
      t("2.4", "Polymorphism",      "2.4-polymorphism"),
      t("2.5", "Abstraction",       "2.5-abstraction"),
    ]
  },
  {
    id: 3, title: "Structs, Enums & Records", icon: "🟪",
    topics: [
      t("3.1", "Structs",  "3.1-structs"),
      t("3.2", "Enums",    "3.2-enums"),
      t("3.3", "Records",  "3.3-records"),
    ]
  },
  {
    id: 4, title: "Strings", icon: "🟨",
    topics: [
      t("4.1", "String Fundamentals", "4.1-string-fundamentals"),
      t("4.2", "String Operations",   "4.2-string-operations"),
      t("4.3", "StringBuilder",       "4.3-stringbuilder"),
    ]
  },
  {
    id: 5, title: "Arrays & Collections", icon: "🟧",
    topics: [
      t("5.1", "Arrays",               "5.1-arrays"),
      t("5.2", "List",                  "5.2-list"),
      t("5.3", "Dictionary",            "5.3-dictionary"),
      t("5.4", "Other Collections",     "5.4-other-collections"),
      t("5.5", "Collection Interfaces", "5.5-collection-interfaces"),
    ]
  },
  {
    id: 6, title: "Generics", icon: "🔷",
    topics: [
      t("6.1", "Generic Basics",       "6.1-generic-basics"),
      t("6.2", "Generic Constraints",  "6.2-generic-constraints"),
      t("6.3", "Variance",             "6.3-variance"),
    ]
  },
  {
    id: 7, title: "Exception Handling", icon: "🔴",
    topics: [
      t("7.1", "Exception Basics",            "7.1-exception-basics"),
      t("7.2", "Exception Types",             "7.2-exception-types"),
      t("7.3", "Advanced Exception Handling", "7.3-advanced-exception-handling"),
    ]
  },
  {
    id: 8, title: "Delegates", icon: "🟤",
    topics: [
      t("8.1", "Delegate Basics",    "8.1-delegate-basics"),
      t("8.2", "Built-in Delegates", "8.2-builtin-delegates"),
      t("8.3", "Lambda Expressions", "8.3-lambda-expressions"),
    ]
  },
  {
    id: 9, title: "Events", icon: "🔔",
    topics: [
      t("9.1", "Events",              "9.1-events"),
      t("9.2", "Events vs Delegates", "9.2-events-vs-delegates"),
    ]
  },
  {
    id: 10, title: "LINQ", icon: "🔗",
    topics: [
      t("10.1", "LINQ Fundamentals",  "10.1-linq-fundamentals"),
      t("10.2", "Filtering",          "10.2-filtering"),
      t("10.3", "Projection",         "10.3-projection"),
      t("10.4", "Sorting",            "10.4-sorting"),
      t("10.5", "Aggregation",        "10.5-aggregation"),
      t("10.6", "Element Operators",  "10.6-element-operators"),
      t("10.7", "Set Operators",      "10.7-set-operators"),
      t("10.8", "Grouping & Joining", "10.8-grouping-and-joining"),
      t("10.9", "LINQ Internals",     "10.9-linq-internals"),
    ]
  },
  {
    id: 11, title: "Nullable Reference Types", icon: "❓",
    topics: [
      t("11.1", "Nullable Concepts",  "11.1-nullable-concepts"),
      t("11.2", "Null Handling",      "11.2-null-handling"),
      t("11.3", "Nullable Analysis",  "11.3-nullable-analysis"),
    ]
  },
  {
    id: 12, title: "Memory Management", icon: "🧠",
    topics: [
      t("12.1", "Memory Fundamentals", "12.1-memory-fundamentals"),
      t("12.2", "Garbage Collection",  "12.2-garbage-collection"),
      t("12.3", "IDisposable",         "12.3-idisposable"),
    ]
  },
  {
    id: 13, title: "Async Programming", icon: "⚡",
    topics: [
      t("13.1", "Task-Based Programming", "13.1-task-based-programming"),
      t("13.2", "Task Operations",        "13.2-task-operations"),
      t("13.3", "Cancellation",           "13.3-cancellation"),
      t("13.4", "Common Problems",        "13.4-async-common-problems"),
    ]
  },
  {
    id: 14, title: "Multithreading & Concurrency", icon: "🧵",
    topics: [
      t("14.1", "Threads",                  "14.1-threads"),
      t("14.2", "Synchronization",          "14.2-synchronization"),
      t("14.3", "Thread-Safe Collections",  "14.3-thread-safe-collections"),
      t("14.4", "Concurrency Problems",     "14.4-concurrency-problems"),
    ]
  },
  {
    id: 15, title: "Iterators", icon: "🔄",
    topics: [
      t("15.1", "Iterator Fundamentals", "15.1-iterator-fundamentals"),
      t("15.2", "Deferred Iteration",    "15.2-deferred-iteration"),
    ]
  },
  {
    id: 16, title: "Pattern Matching", icon: "🎯",
    topics: [
      t("16.1", "Type Patterns",       "16.1-type-patterns"),
      t("16.2", "Property Patterns",   "16.2-property-patterns"),
      t("16.3", "Relational Patterns", "16.3-relational-patterns"),
      t("16.4", "Logical Patterns",    "16.4-logical-patterns"),
      t("16.5", "List Patterns",       "16.5-list-patterns"),
      t("16.6", "Switch Expressions",  "16.6-switch-expressions"),
    ]
  },
  {
    id: 17, title: "Tuples & Deconstruction", icon: "📦",
    topics: [
      t("17.1", "Tuples",          "17.1-tuples"),
      t("17.2", "Deconstruction",  "17.2-deconstruction"),
    ]
  },
  {
    id: 18, title: "Extension Methods", icon: "🔌",
    topics: [
      t("18.1", "Extension Methods",  "18.1-extension-methods"),
      t("18.2", "Practical Usage",    "18.2-extension-methods-practical"),
    ]
  },
  {
    id: 19, title: "Anonymous Types & Initializers", icon: "👻",
    topics: [
      t("19.1", "Anonymous Types", "19.1-anonymous-types"),
      t("19.2", "Initializers",    "19.2-initializers"),
    ]
  },
  {
    id: 20, title: "Reflection", icon: "🔎",
    topics: [
      t("20.1", "Reflection Basics",   "20.1-reflection-basics"),
      t("20.2", "Dynamic Reflection",  "20.2-dynamic-reflection"),
    ]
  },
  {
    id: 21, title: "Attributes", icon: "🏷️",
    topics: [
      t("21.1", "Built-in Attributes", "21.1-builtin-attributes"),
      t("21.2", "Custom Attributes",   "21.2-custom-attributes"),
    ]
  },
  {
    id: 22, title: "Expression Trees", icon: "🌳",
    topics: [
      t("22.1", "Expression Tree Basics",  "22.1-expression-tree-basics"),
      t("22.2", "Building Expressions",    "22.2-building-expressions"),
      t("22.3", "Practical Usage",         "22.3-expression-trees-practical"),
    ]
  },
  {
    id: 23, title: "Equality & Comparison", icon: "⚖️",
    topics: [
      t("23.1", "Equality",          "23.1-equality"),
      t("23.2", "Equality Contracts", "23.2-equality-contracts"),
      t("23.3", "Comparison",        "23.3-comparison"),
    ]
  },
  {
    id: 24, title: "Modern C#", icon: "✨",
    topics: [
      t("24.1", "Modern Syntax",       "24.1-modern-syntax"),
      t("24.2", "Modern Type Features", "24.2-modern-type-features"),
    ]
  },
  {
    id: 25, title: "Advanced Memory & Performance", icon: "🚀",
    topics: [
      t("25.1", "Stack-Based Memory",      "25.1-stack-based-memory"),
      t("25.2", "Allocation Optimization", "25.2-allocation-optimization"),
      t("25.3", "Performance Concepts",    "25.3-performance-concepts"),
    ]
  },
  {
    id: 26, title: "Unsafe C#", icon: "⚠️",
    topics: [
      t("26.1", "Unsafe Basics", "26.1-unsafe-basics"),
      t("26.2", "Interop",       "26.2-interop"),
    ]
  },
  {
    id: 27, title: "C# Internals", icon: "⚙️",
    topics: [
      t("27.1", "Compilation",     "27.1-compilation"),
      t("27.2", "Runtime",         "27.2-runtime"),
      t("27.3", "Async Internals", "27.3-async-internals"),
    ]
  },
  {
    id: 28, title: "Coding Practices", icon: "📐",
    topics: [
      t("28.1", "Clean C# Code",       "28.1-clean-code"),
      t("28.2", "Common Mistakes",     "28.2-common-mistakes"),
      t("28.3", "Design Principles",   "28.3-design-principles"),
    ]
  },
  {
    id: 29, title: "Design Patterns", icon: "🏗️",
    topics: [
      t("29.1", "Creational Patterns", "29.1-creational-patterns"),
      t("29.2", "Structural Patterns", "29.2-structural-patterns"),
      t("29.3", "Behavioral Patterns", "29.3-behavioral-patterns"),
    ]
  },
  {
    id: 30, title: "Interview Prep", icon: "🎤",
    topics: [
      t("30.1", "Fundamentals",  "30.1-interview-fundamentals"),
      t("30.2", "OOP",           "30.2-interview-oop"),
      t("30.3", "Collections",   "30.3-interview-collections"),
      t("30.4", "LINQ",          "30.4-interview-linq"),
      t("30.5", "Async",         "30.5-interview-async"),
      t("30.6", "Advanced",      "30.6-interview-advanced"),
    ]
  },
];

// Flat list of every topic across all phases
const ALL_TOPICS = PHASES.flatMap(p =>
  p.topics.map(t => ({ ...t, phaseId: p.id, phaseTitle: p.title, phaseIcon: p.icon }))
);

// ─── State ───────────────────────────────────────────────────────────────────

const STORAGE_KEY = "csharp_done";
let done = new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
let currentTopicIndex = 0;
let currentScreen = "home"; // home | note | roadmap

// ─── Helpers ─────────────────────────────────────────────────────────────────

function saveDone() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...done]));
}

function isDone(id) { return done.has(id); }

function toggleDone(id) {
  done.has(id) ? done.delete(id) : done.add(id);
  saveDone();
  updateProgress();
  updateNavHighlights();
}

function updateProgress() {
  const total = ALL_TOPICS.length;
  const count = ALL_TOPICS.filter(t => isDone(t.id)).length;
  document.getElementById("progressText").textContent = `${count} / ${total}`;
  document.getElementById("progressFill").style.width = `${(count / total) * 100}%`;
}

// ─── Sidebar Nav ─────────────────────────────────────────────────────────────

function buildNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = PHASES.map(phase => {
    const allDone = phase.topics.every(t => isDone(t.id));
    const someDone = phase.topics.some(t => isDone(t.id));
    const statusDot = allDone ? "✅" : someDone ? "🔶" : "";

    const topicsHtml = phase.topics.map(t => `
      <a class="nav-topic ${isDone(t.id) ? "done" : ""}" data-id="${t.id}" href="#">
        <span class="check">${isDone(t.id) ? "✓" : "○"}</span>
        <span>${t.id} ${t.title}</span>
      </a>
    `).join("");

    return `
      <div class="nav-phase" data-phase="${phase.id}">
        <button class="nav-phase-btn" data-phase="${phase.id}">
          <span>${phase.icon} ${phase.id}. ${phase.title}</span>
          <span class="phase-meta">${statusDot}</span>
        </button>
        <div class="nav-topics" id="phase-topics-${phase.id}">${topicsHtml}</div>
      </div>
    `;
  }).join("");

  // Phase toggle
  nav.querySelectorAll(".nav-phase-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.phase;
      const topics = document.getElementById(`phase-topics-${id}`);
      if (topics) topics.classList.toggle("open");
    });
  });

  // Topic click
  nav.querySelectorAll(".nav-topic").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const idx = ALL_TOPICS.findIndex(t => t.id === link.dataset.id);
      if (idx !== -1) openNote(idx);
      closeSidebar();
    });
  });
}

function updateNavHighlights() {
  document.querySelectorAll(".nav-topic").forEach(el => {
    const t = ALL_TOPICS.find(t => t.id === el.dataset.id);
    if (!t) return;
    el.classList.toggle("done", isDone(t.id));
    el.querySelector(".check").textContent = isDone(t.id) ? "✓" : "○";
  });
}

// ─── Phase Grid (Home) ───────────────────────────────────────────────────────

function buildPhaseGrid() {
  const grid = document.getElementById("phaseGrid");
  grid.innerHTML = PHASES.map(phase => {
    const doneCount = phase.topics.filter(t => isDone(t.id)).length;
    const pct = Math.round((doneCount / phase.topics.length) * 100);
    return `
      <div class="phase-card clickable" data-phase="${phase.id}">
        <div class="phase-card-icon">${phase.icon}</div>
        <div class="phase-card-body">
          <div class="phase-card-title">${phase.id}. ${phase.title}</div>
          <div class="phase-card-progress">
            <div class="mini-bar"><div style="width:${pct}%"></div></div>
            <span>${doneCount}/${phase.topics.length}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".phase-card").forEach(card => {
    card.addEventListener("click", () => {
      const phase = PHASES.find(p => p.id === +card.dataset.phase);
      const idx = ALL_TOPICS.findIndex(t => t.id === phase.topics[0].id);
      openNote(idx);
    });
  });
}

// ─── Note Rendering ──────────────────────────────────────────────────────────

async function openNote(index) {
  currentTopicIndex = index;
  const topic = ALL_TOPICS[index];

  showScreen("note");
  document.getElementById("breadcrumb").textContent = `${topic.phaseIcon} ${topic.phaseTitle} › ${topic.id} ${topic.title}`;
  document.getElementById("markdownBody").innerHTML = `<div class="loading">Loading...</div>`;

  // Open phase in sidebar
  const phaseTopics = document.getElementById(`phase-topics-${topic.phaseId}`);
  if (phaseTopics) phaseTopics.classList.add("open");

  // Highlight active
  document.querySelectorAll(".nav-topic").forEach(el => el.classList.remove("active"));
  const activeLink = document.querySelector(`.nav-topic[data-id="${topic.id}"]`);
  if (activeLink) activeLink.classList.add("active");

  try {
    const res = await fetch(topic.file);
    if (!res.ok) throw new Error("Not found");
    const md = await res.text();
    renderMarkdown(md);
  } catch {
    document.getElementById("markdownBody").innerHTML =
      `<div class="error-msg">📄 Note not found for <strong>${topic.id} ${topic.title}</strong>.<br>Add the file to the C# folder to see it here.</div>`;
  }

  updateNoteStatus();
  updateMarkDoneBtn();
  window.scrollTo(0, 0);
  document.getElementById("content").scrollTo(0, 0);
}

function renderMarkdown(md) {
  marked.setOptions({ breaks: true, gfm: true });
  const html = marked.parse(md);
  const body = document.getElementById("markdownBody");
  body.innerHTML = html;
  body.querySelectorAll("pre code").forEach(block => hljs.highlightElement(block));

  // Add copy buttons to code blocks
  body.querySelectorAll("pre").forEach(pre => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(pre.querySelector("code")?.innerText || "");
      btn.textContent = "✓ Copied";
      setTimeout(() => btn.textContent = "Copy", 1500);
    });
    pre.style.position = "relative";
    pre.appendChild(btn);
  });
}

function updateNoteStatus() {
  const total = ALL_TOPICS.length;
  document.getElementById("noteStatus").textContent = `${currentTopicIndex + 1} / ${total}`;
  document.getElementById("prevNote").disabled = currentTopicIndex === 0;
  document.getElementById("nextNote").disabled = currentTopicIndex === total - 1;
}

function updateMarkDoneBtn() {
  const topic = ALL_TOPICS[currentTopicIndex];
  const btn = document.getElementById("markDone");
  btn.textContent = isDone(topic.id) ? "✓ Completed" : "✓ Mark as Done";
  btn.classList.toggle("done-state", isDone(topic.id));
}

// ─── Screens ─────────────────────────────────────────────────────────────────

function showScreen(name) {
  currentScreen = name;
  document.getElementById("homeScreen").classList.toggle("hidden", name !== "home");
  document.getElementById("noteScreen").classList.toggle("hidden", name !== "note");
  document.getElementById("roadmapScreen").classList.toggle("hidden", name !== "roadmap");
  if (name === "home") {
    document.getElementById("breadcrumb").textContent = "Home";
    buildPhaseGrid();
  }
}

async function showRoadmap() {
  showScreen("roadmap");
  document.getElementById("breadcrumb").textContent = "Roadmap";
  const res = await fetch("README.md");
  const md = await res.text();
  marked.setOptions({ breaks: true, gfm: true });
  document.getElementById("roadmapBody").innerHTML = marked.parse(md);
  document.getElementById("roadmapBody").querySelectorAll("pre code").forEach(b => hljs.highlightElement(b));
}

// ─── Search ──────────────────────────────────────────────────────────────────

document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim();
  document.querySelectorAll(".nav-phase").forEach(phase => {
    const topics = phase.querySelectorAll(".nav-topic");
    let anyVisible = false;
    topics.forEach(t => {
      const match = t.textContent.toLowerCase().includes(q);
      t.style.display = match || !q ? "" : "none";
      if (match) anyVisible = true;
    });
    if (q) {
      phase.style.display = anyVisible ? "" : "none";
      const topicsDiv = phase.querySelector(".nav-topics");
      if (topicsDiv && anyVisible) topicsDiv.classList.add("open");
    } else {
      phase.style.display = "";
    }
  });
});

// ─── Sidebar toggle ──────────────────────────────────────────────────────────

function openSidebarFn() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("visible");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("visible");
}

document.getElementById("menuBtn").addEventListener("click", openSidebarFn);
document.getElementById("closeSidebar").addEventListener("click", closeSidebar);
document.getElementById("overlay").addEventListener("click", closeSidebar);

// ─── Theme ───────────────────────────────────────────────────────────────────

const themeBtn = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
  document.getElementById("hljs-theme").href = theme === "dark"
    ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
    : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-light.min.css";
  localStorage.setItem("csharp_theme", theme);
}

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

// ─── Event Wiring ────────────────────────────────────────────────────────────

document.getElementById("homeBtn").addEventListener("click", () => showScreen("home"));
document.getElementById("roadmapBtn").addEventListener("click", showRoadmap);
document.getElementById("startBtn").addEventListener("click", () => openNote(0));

document.getElementById("prevNote").addEventListener("click", () => {
  if (currentTopicIndex > 0) openNote(currentTopicIndex - 1);
});
document.getElementById("nextNote").addEventListener("click", () => {
  if (currentTopicIndex < ALL_TOPICS.length - 1) openNote(currentTopicIndex + 1);
});

document.getElementById("markDone").addEventListener("click", () => {
  toggleDone(ALL_TOPICS[currentTopicIndex].id);
  updateMarkDoneBtn();
  updateNavHighlights();
  buildPhaseGrid();
});

document.getElementById("markDoneNext").addEventListener("click", () => {
  const topic = ALL_TOPICS[currentTopicIndex];
  if (!isDone(topic.id)) toggleDone(topic.id);
  if (currentTopicIndex < ALL_TOPICS.length - 1) openNote(currentTopicIndex + 1);
});

// Keyboard navigation
document.addEventListener("keydown", e => {
  if (currentScreen !== "note") return;
  if (e.key === "ArrowRight" && currentTopicIndex < ALL_TOPICS.length - 1) openNote(currentTopicIndex + 1);
  if (e.key === "ArrowLeft" && currentTopicIndex > 0) openNote(currentTopicIndex - 1);
});

// ─── Init ────────────────────────────────────────────────────────────────────

const savedTheme = localStorage.getItem("csharp_theme") || "dark";
applyTheme(savedTheme);
buildNav();
buildPhaseGrid();
updateProgress();
