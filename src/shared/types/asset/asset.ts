import { AssetRaw } from '.';

export default class Asset {
  name: string;

  id: string;

  src: string;

  constructor(asset: AssetRaw) {
    this.name = asset.name;
    this.id = asset.id;
    this.src = asset.src;
  }
}
