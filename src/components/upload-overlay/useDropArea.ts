import { DragEventHandler } from 'react';

export default function useDropArea(onChange: DragEventHandler) {
  const onDrop: DragEventHandler = (e) => {
    e.preventDefault();
    onChange(e);
  };
  return {
    onDrop,
  };
}
