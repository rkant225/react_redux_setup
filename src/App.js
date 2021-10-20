import './App.css';
import Loader from './Components/Loader/Loader';
import ReactDefaultPage from './Components/ReactDefaultPage';
import ReduxCounter from './Components/ReduxCounter/ReduxCounter';
import ReduxUser from './Components/ReduxUser/ReduxUser';
import SimpleCounter from './Components/SimpleCounter/SimpleCounter';

function App() {
  return (
    <div className="App">
      <Loader/>
      {/* <ReactDefaultPage/> */}
      <SimpleCounter/>
      <ReduxCounter/>
      <ReduxUser/>
    </div>
  );
}

export default App;
