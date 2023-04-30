import type { Meta, StoryObj } from '@storybook/react'

import AccountSettings from './'

const meta: Meta<typeof AccountSettings> = {
  title: 'Pages/AccountSettings',
  component: AccountSettings,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof AccountSettings>

export const Index: Story = {
  render: () => <AccountSettings />
}
