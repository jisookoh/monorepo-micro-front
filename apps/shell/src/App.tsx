import { Suspense, lazy } from "react";

import "./App.css";

const TodoButton = lazy(() => import("todo/Button"));

function App() {
  return (
    <div>
      <h1>🧩 Shell App</h1>
      <Suspense fallback={<div>Loading remote...</div>}>
        <TodoButton />
      </Suspense>
    </div>
  );
}

export default App;
