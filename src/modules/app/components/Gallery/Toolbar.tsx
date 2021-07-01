import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { UIStateContext } from '../../store/ui-state';

const Toolbar = observer(() => {
  const uiState = useContext(UIStateContext);
  return (
    <div className="w-full">
      <Button data-testid="toggleFolderVisible" onClick={uiState.toggleFolderVisible}>Toggle Folder</Button>
    </div>
  );
});

export default Toolbar;
