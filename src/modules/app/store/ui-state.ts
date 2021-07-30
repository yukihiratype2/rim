import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

export enum GalleryLayout {
  Fill,
  Fixed,
}

export enum GallerySortOrder {
  Descending,
  Ascending,
}

export class UIState {
  folderVisible = true;

  filterVisible = false;

  galleryLayout = GalleryLayout.Fill;

  gallerySortOrder = GallerySortOrder.Descending;

  toggleFolderVisible() {
    this.folderVisible = !this.folderVisible;
  }

  tooggleFilterVisible() {
    this.filterVisible = !this.filterVisible;
  }

  setGalleryLayout(layout: GalleryLayout) {
    this.galleryLayout = layout;
  }

  setGallerySortOrder(order: GallerySortOrder) {
    this.gallerySortOrder = order;
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const UIStateContext = createContext<UIState>(new UIState());
