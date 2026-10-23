document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre.mermaid").forEach(function (block) {
    block.textContent = block.textContent;
  });
  mermaid.initialize({ startOnLoad: false });
  mermaid.run({ querySelector: "pre.mermaid" });
});
