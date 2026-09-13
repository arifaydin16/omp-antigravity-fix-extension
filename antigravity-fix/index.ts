export default function (omp: any) {
  omp.on("before_provider_request", async (event: any) => {
    if (event?.payload && typeof event.payload === "object") {
      const payload = event.payload as Record<string, unknown>;
      // Omit requestType when targeting Google Antigravity to match official client
      if (payload.userAgent === "antigravity" && "requestType" in payload) {
        delete payload.requestType;
      }
    }
    return event.payload;
  });
}
