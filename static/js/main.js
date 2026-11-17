// Initialize Lucide Icons on DOM load
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// -----------------------------------------------------------------------------
// AJAX FETCH FOR STAGE SLIDE-OVER DRAWER
// -----------------------------------------------------------------------------
async function fetchStageDrawer(stageId) {
  try {
    const res = await fetch(`/api/stage/${stageId}`);
    if (!res.ok) throw new Error("Stage not found");
    const data = await res.json();

    // Populate Header
    const badge = document.getElementById("gDrawerBadge");
    badge.textContent = data.badge;
    badge.style.color = data.badge_color;
    badge.style.background = `${data.badge_color}22`;
    badge.style.border = `1px solid ${data.badge_color}44`;

    document.getElementById("gDrawerTool").textContent = data.open_source_tool;
    document.getElementById("gDrawerCost").textContent = data.cost;
    document.getElementById("gDrawerTitle").textContent = `Step ${data.step_num}: ${data.title}`;
    document.getElementById("gDrawerSubtitle").textContent = data.subtitle;

    // Sub-Tab 1: Windows Setup
    const list = document.getElementById("gDrawerSetupList");
    list.innerHTML = "";
    data.windows_setup_steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      list.appendChild(li);
    });
    document.getElementById("gDrawerReqText").textContent = data.windows_requirements;

    // Sub-Tab 2: How It Works
    document.getElementById("gDrawerWorksText").textContent = data.how_it_works;
    document.getElementById("gDrawerArchText").textContent = data.architecture;

    // Sub-Tab 3: Code Snippet
    document.getElementById("gDrawerCodeBlock").textContent = data.code_snippet;

    // Sub-Tab 4: Commercial Value
    document.getElementById("gDrawerValueText").textContent = data.commercial_impact;

    // Link to Full Page
    document.getElementById("gDrawerFullPageLink").href = `/stage/${stageId}`;

    // Reset to setup tab
    switchDrawerSubTab("setup");

    // Open Drawer
    document.getElementById("globalDrawerBackdrop").classList.add("active");
    if (window.lucide) window.lucide.createIcons();
  } catch (err) {
    console.error("Error opening drawer:", err);
    window.location.href = `/stage/${stageId}`;
  }
}

function closeGlobalDrawer(e) {
  if (e.target.id === "globalDrawerBackdrop") {
    closeGlobalDrawerDirect();
  }
}

function closeGlobalDrawerDirect() {
  const backdrop = document.getElementById("globalDrawerBackdrop");
  if (backdrop) backdrop.classList.remove("active");
}

function switchDrawerSubTab(tabName) {
  const tabs = ["setup", "works", "code", "value"];
  tabs.forEach(t => {
    const btn = document.getElementById(`btnDTab${capitalize(t)}`);
    const pane = document.getElementById(`paneDTab${capitalize(t)}`);
    if (btn && pane) {
      btn.classList.toggle("active", t === tabName);
      pane.classList.toggle("active", t === tabName);
    }
  });
  if (window.lucide) window.lucide.createIcons();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function copyDrawerCode() {
  const code = document.getElementById("gDrawerCodeBlock").textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector(".d-copy-btn");
    btn.innerHTML = '<i data-lucide="check" size="13"></i> Copied!';
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => {
      btn.innerHTML = '<i data-lucide="copy" size="13"></i> Copy Code';
      if (window.lucide) window.lucide.createIcons();
    }, 2000);
  });
}

// Global Keyboard ESC listener
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeGlobalDrawerDirect();
  }
});
