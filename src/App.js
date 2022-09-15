import './App.css';
import Sidebar from "./components/Sidebar"
// import ResponsiveDrawer from './components/persistentDrawer';
import PersistentDrawerLeft from './components/persistentDrawer';

function App() {
  return (
    <div className="App">
      {/* <ResponsiveDrawer /> */}
      <PersistentDrawerLeft />
    </div>
  );
}
export default App;
