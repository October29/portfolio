import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { NavigationProvider } from "./contexts/NavigationContext.jsx";

function App() {
  return (
    <NavigationProvider>
      <RouterProvider router={router} />
    </NavigationProvider>
  );
}

export default App;
