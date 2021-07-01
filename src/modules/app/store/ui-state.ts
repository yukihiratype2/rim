import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export class UIState {
  folderVisible = true;

  filterVisible = false;

  toggleFolderVisible() {
    this.folderVisible = !this.folderVisible;
  }

  tooggleFilterVisible() {
    this.filterVisible = !this.filterVisible;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const UIStateContext = createContext<UIState>(new UIState());
