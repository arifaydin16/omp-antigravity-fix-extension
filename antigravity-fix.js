export default function (omp) {
  omp.on("before_provider_request", async (event) => {
    if (event?.payload && typeof event.payload === "object") {
      // Omit requestType when targeting Google Antigravity to match official client
      if (event.payload.userAgent === "antigravity" && "requestType" in event.payload) {
        delete event.payload.requestType;
      }
    }
    return event.payload;
  });
}
