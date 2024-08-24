import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from './Cells';

const meta = {
  component: Cell,
} satisfies Meta<typeof Cell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};