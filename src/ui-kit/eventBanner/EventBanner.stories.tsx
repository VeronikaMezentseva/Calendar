import type { Meta, StoryObj } from '@storybook/react';

import { EventBanner } from './EventBanner';

const meta = {
  component: EventBanner,
} satisfies Meta<typeof EventBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};