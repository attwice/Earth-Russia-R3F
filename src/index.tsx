import { render } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { App } from "./App";
import "./styles.css";

render(
  <div className="earth">
    <div className="inner">
      <ErrorBoundary fallback={<div className="error">Error</div>}>
        <App />
      </ErrorBoundary>
    </div>
  </div>,

  document.getElementById("root")
);
