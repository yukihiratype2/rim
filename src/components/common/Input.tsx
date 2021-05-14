import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

type Props = {
  name: string;
} & TextFieldProps;

function Input<T>({
  name,
  ...rest
}: Props) {
  const [field, meta] = useField<T>(name);

  const textFieldConfig: TextFieldProps = {
    ...field,
    ...rest,
    error: Boolean(meta.error && meta.touched),
    helperText: meta.error,
  };
  return (<TextField {...textFieldConfig} />);
}

export default Input;
