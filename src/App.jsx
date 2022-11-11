import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <route.component name={route.name} />
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
