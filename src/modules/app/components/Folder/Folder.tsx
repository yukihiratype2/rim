import n from 'classnames';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { UIStateContext } from '../../store/ui-state';

const Folder = observer(() => {
  const { folderVisible } = useContext(UIStateContext);
  return (<div className={n('w-64', { invisible: !folderVisible })}>Gallery</div>);
});

export default Folder;
