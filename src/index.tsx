import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { lazy, Suspense } from "react";
import { kcContext } from "./KcApp/kcContext";
import keycloakManager from "./manage";

const App = lazy(() => import("./App"));
const KcApp = lazy(() => import("./KcApp"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (kcContext !== undefined) {
  console.log(kcContext);
}

console.log(kcContext);

root.render(
  <StrictMode>
    <Suspense>
      {kcContext === undefined ? <App /> : <KcApp kcContext={kcContext} />}
    </Suspense>
  </StrictMode>
);
