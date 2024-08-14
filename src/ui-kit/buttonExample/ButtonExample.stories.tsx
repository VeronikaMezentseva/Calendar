import type { Meta, StoryObj } from '@storybook/react';

import { ButtonExample } from './ButtonExample';

const meta = {
  component: ButtonExample,
} satisfies Meta<typeof ButtonExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};