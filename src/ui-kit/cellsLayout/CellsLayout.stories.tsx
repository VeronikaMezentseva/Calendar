import type { Meta, StoryObj } from '@storybook/react';

import { CellsLayout } from './CellsLayout';

const meta = {
  component: CellsLayout,
} satisfies Meta<typeof CellsLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};