import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('should show error hint', async () => {
    const login = jest.fn();
    render(<LoginForm onLogin={login} />);
    const submitButton = screen.getByText('Login');
    fireEvent.click(submitButton);
    await waitFor(() => screen.getByText('Please enter your usename'));
    const hint = screen.getByText('Please enter your usename');
    expect(hint).toBeInTheDocument();
  });

  it('should call login', async () => {
    const login = jest.fn();
    render(<LoginForm onLogin={login} />);
    const submitButton = screen.getByText('Login');
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: '23' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: '23' } });
    fireEvent.click(submitButton);
    await waitFor(() => expect(login.mock.calls.length).toBe(1));
  });
});
