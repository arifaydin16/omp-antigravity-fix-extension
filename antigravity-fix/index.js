function sanitize(str) {
  if (typeof str !== "string") return str;
  return str
    .replaceAll("<system-conventions>", "<conventions>")
    .replaceAll("</system-conventions>", "</conventions>")
    .replaceAll("<system_conventions>", "<conventions>")
    .replaceAll("</system_conventions>", "</conventions>");
}

export default function (omp) {
  omp.on("before_agent_start", (event) => {
    if (!event || !event.systemPrompt) return;
    if (Array.isArray(event.systemPrompt)) {
      for (let i = 0; i < event.systemPrompt.length; i++) {
        event.systemPrompt[i] = sanitize(event.systemPrompt[i]);
      }
    } else if (typeof event.systemPrompt === "string") {
      event.systemPrompt = sanitize(event.systemPrompt);
    }
  });
}
