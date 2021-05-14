import {
  fireEvent, render, screen, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import SignUpForm from './SignUpForm';

describe('LoginForm', () => {
  it('should show error hint', async () => {
    const signup = jest.fn();
    render(<SignUpForm onSignUp={signup} />);
    const submitButton = screen.getByText('Sign Up');
    fireEvent.click(submitButton);
    await waitFor(() => screen.getByText('Please enter your usename'));
    await waitFor(() => screen.getByText('Please enter your password'));
    await waitFor(() => screen.getByText('Please confirm your password'));

    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'abc' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'abc' } });
    await waitFor(() => screen.getByText('Password too short'));
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'randomLongPassword' } });
    await waitFor(() => screen.getByText("Password doesn't match"));
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'randomLongPassword' } });
    await waitForElementToBeRemoved(() => screen.getByText("Password doesn't match"));
  });
});
