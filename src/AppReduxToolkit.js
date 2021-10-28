import './App.css';
import LoaderReduxToolkit from './Components/ReduxTollKitComponents/LoaderReduxToolkit/LoaderReduxToolkit';
import FoodCourt from './Components/ReduxTollKitComponents/FoodCourt/FoodCourt';
import RandomUser from './Components/ReduxTollKitComponents/RandomUser/RandomUser';
import ToastSnackBar from './Components/ReduxTollKitComponents/ToastSnackBar/ToastSnackBar';

function AppReduxToolkit() {
  return (
    <div>
      <ToastSnackBar/>
      <LoaderReduxToolkit/>
      <FoodCourt/>
      <RandomUser/>
    </div>
  );
}

export default AppReduxToolkit;
