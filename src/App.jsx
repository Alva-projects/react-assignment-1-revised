import ProfileCard from "./components/ProfileCard.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import SearchBar from "./components/Search";
import Navbar from "./components/Navbar.jsx";

function App() {
  //This is a React component. They are like parent functions, so I can make new functions inside of it.
  return (
    <>
      <Navbar/>
      <SearchBar/>
    </>
  );
}

export default App;
