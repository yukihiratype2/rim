import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should toggle folder visibility', async () => {
    render(<App />);
    const toggleButton = screen.getByTestId('toggleFolderVisible');
    fireEvent.click(toggleButton);
    await waitFor(() => expect(screen.getByTestId('folderContainer')).toHaveClass('hidden'));
    fireEvent.click(toggleButton);
    await waitFor(() => expect(screen.getByTestId('folderContainer')).not.toHaveClass('hidden'));
  });
});
