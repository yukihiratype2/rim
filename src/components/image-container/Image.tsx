import React from 'react';

export type ImageProps = {
  src: string
  alt?: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Image = ({ src, alt, ...rest }: ImageProps) => (
  <span {...rest}>
    <img src={src} alt={alt} />
  </span>
);

export default Image;
