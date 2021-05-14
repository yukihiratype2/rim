import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { AuthParams } from '../../store/api';
import Input from '../../../../components/common/Input';

// import { observer } from 'mobx-react-lite';
// import { authStore } from '../../store';

type Props = {
  onLogin: (data: AuthParams) => any
};

const INITIAL_VALUES: AuthParams = { username: '', password: '' };

const validationSchema: Yup.SchemaOf<AuthParams> = Yup.object().shape({
  username: Yup.string().required('Please enter your usename'),
  password: Yup.string().min(8, 'Password too short').required('Please enter your password'),
});

const LoginForm = ({ onLogin }: Props) => (
  <Formik initialValues={INITIAL_VALUES} onSubmit={onLogin} validationSchema={validationSchema}>
    <Form>
      <Input name="username" placeholder="Username" />
      <Input name="password" placeholder="Password" type="password" />
      <Button type="submit">Login</Button>
    </Form>
  </Formik>

);

export default LoginForm;

// export const LoginFormWithState = observer(() => <LoginForm login={authStore.login} />);
