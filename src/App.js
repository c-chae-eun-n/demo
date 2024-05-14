// JSX
// ㄴ Javascript XML (XML 문법은 시작태그와 엔드태그로 이루어져있음)

import { RouterProvider } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import router from "./router";

function App() {
  return (
    // <MyComponent message={"This is my first React App."} />
    // <BookList />
    <RouterProvider router={router} />
  );
}

export default App;
