import './App.css';
import './components/Header';
import Header from './components/Header';
import Contributor from './components/Contributors';
import Divider from './components/Divider';
function App() {
  return (
    <div className="content">
      <Header />
      <Divider />
      <Contributor />
    </div>
  );
}

export default App;
