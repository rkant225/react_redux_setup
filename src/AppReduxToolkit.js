import './App.css';
import LoaderReduxToolkit from './Components/ReduxTollKitComponents/LoaderReduxToolkit/LoaderReduxToolkit';
import FoodCourt from './Components/ReduxTollKitComponents/FoodCourt/FoodCourt';
import RandomUser from './Components/ReduxTollKitComponents/RandomUser/RandomUser';

function AppReduxToolkit() {
  return (
    <div>
      <LoaderReduxToolkit/>
      <FoodCourt/>
      <RandomUser/>
    </div>
  );
}

export default AppReduxToolkit;
