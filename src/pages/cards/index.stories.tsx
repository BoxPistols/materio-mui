import type { Meta, StoryObj } from '@storybook/react'

import CardBasic from './'

const meta: Meta<typeof CardBasic> = {
  title: 'Catalog/Card/CardBasic',
  component: CardBasic,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof CardBasic>

export const Index: Story = {
  render: () => <CardBasic />
}
