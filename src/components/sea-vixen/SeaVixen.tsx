/* eslint-disable max-len */
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

export type Props = {
  imagePath: string,
  imageWidth: number,
  imageHeight: number,
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;

function determineResolutionLevel(imageWidth: number, imageHeight: number, width: number, height: number): number {
  return Math.min(imageWidth / width, imageHeight / height);
}

const SeaVixen = ({
  imagePath, imageWidth, imageHeight, ...rest
} : Props) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const containerEl = useRef<HTMLDivElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const resizeCanvas = useCallback(() => {
    if (canvasEl.current && containerEl.current && ctx) {
      const containerRect = containerEl.current.getBoundingClientRect();
      const scale = window.devicePixelRatio;
      canvasEl.current.width = containerRect.width * scale;
      canvasEl.current.height = containerRect.height * scale;
      ctx.scale(scale, scale);
    }
  }, [ctx]);

  const handleStartDrag = useCallback(() => {
    const startCoord = {
      x: NaN,
      y: NaN,
    };
    const handleDrag = (dragEvent: MouseEvent) => {
      if (!startCoord.x) {
        startCoord.x = dragEvent.screenX;
        startCoord.y = dragEvent.screenY;
      }
      const movementX = dragEvent.screenX - startCoord.x;
      const movementY = dragEvent.screenY - startCoord.y;
      ctx?.translate(movementX, movementY);
    };

    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', () => {
      console.log(ctx);
      if (ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 50, 50);
      }
      document.removeEventListener('mousemove', handleDrag);
    });
  }, [ctx]);

  const handleZoom = useCallback((scrollEvent: React.WheelEvent) => {
    console.log(scrollEvent.deltaY, ctx);
    ctx?.scale(scrollEvent.deltaY, scrollEvent.deltaY);
  }, [ctx]);

  useEffect(() => {
    if (canvasEl.current) {
      setCtx(canvasEl.current.getContext('2d'));
      resizeCanvas();
      if (ctx) {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, imageWidth, imageHeight);
        ctx.fillStyle = 'red';
        ctx.fillRect(100, 100, 50, 50);
      }
    }
  }, [ctx, imageHeight, imageWidth, resizeCanvas]);

  return (
    <div ref={containerEl} className={rest.className}>
      <div className="w-full h-full overflow-hidden border">
        <canvas ref={canvasEl} onMouseDown={handleStartDrag} onWheel={handleZoom} />
      </div>
    </div>
  );
};

export default SeaVixen;
