import type { Meta, StoryObj } from '@storybook/react'

import Typography from './'

const meta: Meta<typeof Typography> = {
  title: 'DesignToken/Typography',
  component: Typography,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof Typography>

export const Index: Story = {
  render: () => <Typography />
}
