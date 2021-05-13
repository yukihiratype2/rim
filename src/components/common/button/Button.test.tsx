import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('Render Text', () => {
    const label = 'random text';
    render(<Button>{label}</Button>);
    const element = screen.getByText(label);
    expect(element).toBeInTheDocument();
  });
});
