import type { Meta, StoryObj } from '@storybook/react'

import Login from './'

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof Login>

export const Index: Story = {
  render: () => <Login />
}
