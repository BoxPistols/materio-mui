import type { Meta, StoryObj } from '@storybook/react'

import Card from './'

const meta: Meta<typeof Card> = {
  title: 'Catalog/Card',
  component: Card,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof Card>

export const Index: Story = {
  render: () => <Card />
}
