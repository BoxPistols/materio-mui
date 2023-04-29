import type { Meta, StoryObj } from '@storybook/react'
import Carduser from './CardUser'

const meta: Meta<typeof Carduser> = {
  title: 'Card/Carduser',
  component: Carduser,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof Carduser>

export const Default: Story = {
  render: () => <Carduser bg='images/cards/background-user.png' />
}
