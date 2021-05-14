import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { AuthParams } from '../../store/api';

// import { observer } from 'mobx-react-lite';
// import { authStore } from '../../store';

type Props = {
  onLogin: (data: AuthParams) => any
};

const validationSchema: Yup.SchemaOf<AuthParams> = Yup.object().shape({
  username: Yup.string().required('Please enter your usename'),
  password: Yup.string().required('Please enter your password'),
});

const LoginForm = ({ onLogin }: Props) => {
  const form = useFormik<AuthParams>({
    initialValues: { username: '', password: '' },
    onSubmit: onLogin,
    validationSchema,
  });
  return (
    <form onSubmit={form.handleSubmit}>
      <TextField variant="outlined" name="username" value={form.values.username} onChange={form.handleChange} placeholder="Username" error={form.touched.username && Boolean(form.errors.username)} helperText={form.touched.username && form.errors.username} />
      <TextField variant="outlined" name="password" value={form.values.password} onChange={form.handleChange} placeholder="Password" type="password" />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;

// export const LoginFormWithState = observer(() => <LoginForm login={authStore.login} />);
