import type { Meta, StoryObj } from '@storybook/react'

import Icons from './'

const meta: Meta<typeof Icons> = {
  title: 'DesignToken/Icons',
  component: Icons,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icons>

export const Index: Story = {
  args: {
    primary: true,
    label: 'Icons'
  }
}
