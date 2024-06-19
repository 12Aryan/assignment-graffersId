import { RouterProvider } from "react-router-dom";
import Wrapper from "./components/common/wrapper/Wrapper.js";
import Routes from "./routes/Routes.js";

const App = () => {
  return (
    <Wrapper>
      <RouterProvider router={Routes} />
    </Wrapper>
  );
};

export default App;
