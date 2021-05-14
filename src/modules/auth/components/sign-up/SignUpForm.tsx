import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { AuthParams } from '../../store/api';
import Input from '../../../../components/common/Input';

type Props = {
  onSignUp: (data: AuthParams) => any
};

type SignupParams = AuthParams & {
  confirmPassword: string
};

const validationSchema: Yup.SchemaOf<SignupParams> = Yup.object().shape({
  username: Yup.string().required('Please enter your usename'),
  password: Yup.string().min(8, 'Password too short').required('Please enter your password'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password doesn\'t match').required('Please confirm your password'),
});

const INITIAL_VALUES: SignupParams = { username: '', password: '', confirmPassword: '' };

const SignupForm = ({ onSignUp }: Props) => (
  <Formik initialValues={INITIAL_VALUES} onSubmit={onSignUp} validationSchema={validationSchema}>
    <Form>
      <Input name="username" placeholder="Username" />
      <Input name="password" placeholder="Password" type="password" />
      <Input name="confirmPassword" placeholder="Confirm Password" type="password" />
      <Button type="submit">Sign Up</Button>
    </Form>
  </Formik>
);

export default SignupForm;

// export const LoginFormWithState = observer(() => <LoginForm login={authStore.login} />);
