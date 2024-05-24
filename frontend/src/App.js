import Register from "./page/Register";
import Landing from "./page/Landing";
import banner from "./assets/banner (2).png"
function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      <img src={banner}/>
      <Landing/>

    </div>
  );
}

export default App;
