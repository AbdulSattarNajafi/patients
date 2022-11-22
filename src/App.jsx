import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={<route.component name={route.name} />}
          />
        );
      })}
    </Routes>
  );
}

export default App;
