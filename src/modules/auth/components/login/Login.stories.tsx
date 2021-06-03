import { Story, Meta } from '@storybook/react';
import LoginForm, { Props as LoginFormProps } from './LoginForm';

export default {
  title: 'Modules/Auth/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
