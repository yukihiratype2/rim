export type ButtonProps = {
  color?: string
} & React.ComponentProps<'button'>;

const Button = ({ color, ...props }: ButtonProps) => <button type="button" {...props} />;

export default Button;
