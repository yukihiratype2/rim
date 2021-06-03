import { render } from '@testing-library/react';
import Virtualized from './Virtualized';

test('render virtualized', () => {
  render(
    <Virtualized colCount={3}>
      <div />
      <div />
    </Virtualized>,
  );
});
