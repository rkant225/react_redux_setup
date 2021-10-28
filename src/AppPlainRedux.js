import './App.css';
import Loader from './Components/PlainReduxComponents/Loader/Loader';
import ReactDefaultPage from './Components/PlainReduxComponents/ReactDefaultPage';
import ReduxCounter from './Components/PlainReduxComponents/ReduxCounter/ReduxCounter';
import ReduxUser from './Components/PlainReduxComponents/ReduxUser/ReduxUser';
import SimpleCounter from './Components/PlainReduxComponents/SimpleCounter/SimpleCounter';
import Store from './Components/PlainReduxComponents/Store/Store';

function AppPlainRedux() {
  return (
    <div className="App">
      <Loader/>
      {/* <ReactDefaultPage/> */}
      <SimpleCounter/>
      <Store/>
      <ReduxCounter/>
      <ReduxUser/>
    </div>
  );
}

export default AppPlainRedux;
