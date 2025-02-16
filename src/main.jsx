import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      {/* Error Boundaries catch error while react is rendering. So bugs in async code (Effect, event handlers) will not be caught. */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
