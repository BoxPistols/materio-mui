// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import CardBasic from './'

const meta: Meta<typeof CardBasic> = {
  title: 'Card/CardBasic',
  component: CardBasic
}

export default meta
type Story = StoryObj<typeof CardBasic>

export const Primary: Story = {
  render: () => <CardBasic />
}
