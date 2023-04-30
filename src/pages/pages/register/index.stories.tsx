import type { Meta, StoryObj } from '@storybook/react'

import Register from './'

const meta: Meta<typeof Register> = {
  title: 'Pages/Register',
  component: Register,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof Register>

export const Index: Story = {
  render: () => <Register />
}
