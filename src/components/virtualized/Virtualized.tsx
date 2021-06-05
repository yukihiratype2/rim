import {
  useEffect, useLayoutEffect, useMemo, useRef, useState,
} from 'react';

export type Props = {
  colCount: number;
  rowHeight?: number | string;
  children: React.ReactChild[];
};

const Virtualized = ({ colCount, rowHeight, ...rest }: Props) => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  const windowEl = useRef<HTMLDivElement>(null);

  const windowRect = useMemo(() => windowEl.current?.getBoundingClientRect(), []);

  const itemCount = useMemo(() => (rest.children || []).length, [rest.children]);

  const itemWidth = useMemo(() => (windowRect?.width || 0) / itemCount, [itemCount, windowRect]);

  useEffect(() => {
    console.log(itemWidth, windowRect?.height);
  });

  return (
    <div
      ref={windowEl}
      className="bg-blue-300 grid"
      style={{
        gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
      }}
    >
      {rest.children.map((child, i) => (
        <div key={i} style={{ height: `${itemWidth}px` }}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Virtualized;
