import { AssetRaw } from '.';

export default class Asset {
  name: string;

  id: string;

  constructor(asset: AssetRaw) {
    this.name = asset.name;
    this.id = asset.id;
  }
}
