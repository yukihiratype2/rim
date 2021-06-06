/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
import React, {
  useLayoutEffect, useMemo, useRef, useState, useCallback,
} from 'react';

export type Props = {
  colCount: number;
  children: React.ReactChild[];
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

const Virtualized = ({ colCount, ...rest }: Props) => {
  const [scrolledRowHeight, setScrolledRowHeight] = useState(0);

  const [scrolledItemCount, setScolledItemCount] = useState(0);

  const windowEl = useRef<HTMLDivElement>(null);

  const [itemHeight, setItemHeight] = useState(0);

  const itemsInWindow = useMemo(() => {
    const windowHeight = windowEl.current?.getBoundingClientRect().height || 0;
    const rowsInWindow = Math.ceil(windowHeight / itemHeight) + 1;
    return rowsInWindow * colCount;
  }, [colCount, itemHeight]);

  const rowStackHeight = useMemo(() => {
    const rowCount = Math.ceil(rest.children.length / colCount);
    return rowCount * itemHeight;
  }, [colCount, itemHeight, rest.children.length]);

  const handleScroll = useCallback(() => {
    const scrollTop = windowEl.current?.scrollTop || 0;
    const scrolledRowCount = Math.floor(scrollTop / itemHeight);
    setScrolledRowHeight(scrolledRowCount * itemHeight);
    setScolledItemCount(scrolledRowCount * colCount);
  }, [colCount, itemHeight]);

  useLayoutEffect(() => {
    const windowRect = windowEl.current?.getBoundingClientRect();

    const itemCount = (rest.children || []).length;

    setItemHeight((windowRect?.width || 0) / colCount);

    console.log(windowEl.current?.getBoundingClientRect().width, itemCount);
  }, [colCount, rest.children]);

  return (
    <div
      ref={windowEl}
      className={`overflow-y-scroll ${rest.className}`}
      onScroll={handleScroll}
    >
      <div
        className="w-full"
        style={{
          height: scrolledRowHeight,
        }}
      />
      <div
        className="grid content-start"
        style={{
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          height: rowStackHeight - scrolledRowHeight,
        }}
      >
        {rest.children.slice(scrolledItemCount, scrolledItemCount + itemsInWindow).map((child, i) => (
          <div
            key={i}
            style={{
              height: `${itemHeight}px`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Virtualized;
