import n from 'classnames';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { UIStateContext } from '../../store/ui-state';
import Category from './Category';

const Folder = observer(() => {
  const { folderVisible } = useContext(UIStateContext);
  return (
    <div data-testid="folderContainer" className={n('w-64', { hidden: !folderVisible })}>
      <Category />
    </div>
  );
});

export default Folder;
