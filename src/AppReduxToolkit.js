import './App.css';
import LoaderReduxToolkit from './Components/ReduxTollKitComponents/LoaderReduxToolkit/LoaderReduxToolkit';
import FoodCourt from './Components/ReduxTollKitComponents/FoodCourt/FoodCourt';
import RandomUser from './Components/ReduxTollKitComponents/RandomUser/RandomUser';
import ToastSnackBar from './Components/ReduxTollKitComponents/ToastSnackBar/ToastSnackBar';
import Posts from './Components/ReduxTollKitComponents/Posts/Posts';

function AppReduxToolkit() {
  return (
    <div>
      <ToastSnackBar/>
      <LoaderReduxToolkit/>
      <FoodCourt/>
      <RandomUser/>
      <Posts/>
    </div>
  );
}

export default AppReduxToolkit;
