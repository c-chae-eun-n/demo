// JSX
// ㄴ Javascript XML (XML 문법은 시작태그와 엔드태그로 이루어져있음)

import BookList from "./components/BookList";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    // <MyComponent message={"This is my first React App."} />
    <BookList />
  );
}

export default App;
