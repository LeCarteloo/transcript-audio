import type { Meta, StoryObj } from '@storybook/react';
import SampleComponent from './SampleComponent';

const meta = {
  title: 'Example/SampleComponent',
  component: SampleComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof SampleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    backgroundColor: 'red',
  },
};
