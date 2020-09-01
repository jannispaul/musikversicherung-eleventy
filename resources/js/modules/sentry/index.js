import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

const SentryInit = Sentry.init({
  dsn:
    "https://27c370b98b1a47f2ae0333f5aac649ad@o441663.ingest.sentry.io/5412156",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

export default SentryInit;
