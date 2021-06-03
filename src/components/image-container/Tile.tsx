import ImageAsset from '../../shared/types/asset/image-asset';
import Image from './Image';

export type Props = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  imageAsset: ImageAsset
};

const Tile = ({ onClick, imageAsset }: Props) => (
  <Image src={imageAsset.name} onClick={onClick} />
);
export default Tile;
