import ProfileCard from "./components/ProfileCard.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import SearchBar from "./components/Search";


function App() {
  //This is a React component. They are like parent functions, so I can make new functions inside of it.
  return (
    <>
      <SearchBar/>
      <Portfolio />
    </>
  );
}

export default App;
