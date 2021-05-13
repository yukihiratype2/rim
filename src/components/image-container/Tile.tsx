import ImageAsset from '../../service/asset/image-asset';
import Image from './Image';

export type TileProp = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  imageAsset: ImageAsset
};

const Tile = ({ onClick, imageAsset }: TileProp) => (
  <Image src={imageAsset.name} onClick={onClick} />
);
export default Tile;
