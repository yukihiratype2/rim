import { UIState, UIStateContext } from '../store/ui-state';
import Filter from './Filter/Filter';
import Folder from './Folder/Folder';
import Gallery from './Gallery/Gallery';

const App = () => (
  <UIStateContext.Provider value={new UIState()}>
    <div className="flex">
      <Folder />
      <Gallery />
      <Filter />
    </div>
  </UIStateContext.Provider>
);
export default App;
