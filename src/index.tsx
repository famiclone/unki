import { createRoot } from "react-dom/client";
import { type FC } from "react";

const App: FC = () => {
  return <div>Test</div>;
}

const root = createRoot(document.querySelector("#app"));
root.render(<App />);
