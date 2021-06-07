import ImageAsset from '../../shared/types/asset/image-asset';
import Image from './Image';

export type Props = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  asset: ImageAsset,
  layout: 'fill' | 'intrinsic'
} & React.HTMLAttributes<HTMLDivElement>;

const Tile = ({ asset, layout = 'fill', ...rest }: Props) => (
  <div className={rest.className}>
    <Image src={asset.src} onClick={rest.onClick} />
  </div>
);
export default Tile;
