import { useMemo, useRef, useState } from 'react';

export type Props = {
  colCount: number;
  rowHeight?: number | string;
  children: React.ReactChild[];
};

const Virtualized = ({ colCount, rowHeight, ...rest }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const windowEl = useRef<HTMLDivElement>(null);

  const windowRect = useMemo(() => windowEl.current?.getBoundingClientRect(), []);

  const itemCount = useMemo(() => (rest.children || []).length, [rest.children]);

  const itemWidth = useMemo(() => (windowRect?.width || 0) / itemCount, [itemCount, windowRect]);

  return (
    <div ref={windowEl} className="bg-blue-300">
      {rest.children.map((child, i) => (
        <span key={i}>
          {child}
        </span>
      ))}
    </div>
  );
};

export default Virtualized;
