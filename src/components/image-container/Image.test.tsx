import { render } from '@testing-library/react';
import Image from './Image';

test('renders learn react link', () => {
  const { baseElement } = render(<Image src="" />);
  baseElement.querySelector('img');
});
