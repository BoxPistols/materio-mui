import type { Meta, StoryObj } from '@storybook/react'

import Form from './'

const meta: Meta<typeof Form> = {
  title: 'Catalog/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
}

export default meta
type Story = StoryObj<typeof Form>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Form'
  }
}
