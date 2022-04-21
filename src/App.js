import './App.css';
import './components/Header';
import Header from './components/Header';
import Contributor from './components/Contributors';
import Divider from './components/Divider';
import IconGit from './components/IconGit';
import InfoContainer from './components/InfoContainer';
function App() {
  return (
    <div className="content">
      <Header />
      <Divider />

      <div className="info-container">
        <div className="info-container-icon">
          <IconGit />
        </div>
        <InfoContainer />
      </div>
      <Contributor />
      {/* <div className="footer">
        <Divider />
      </div> */}
    </div>
  );
}

export default App;
