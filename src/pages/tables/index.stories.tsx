import type { Meta, StoryObj } from '@storybook/react'

import TableBasic from './'

const meta: Meta<typeof TableBasic> = {
  title: 'Components/Table/TableBasic',
  component: TableBasic,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof TableBasic>

export const Index: Story = {
  render: () => <TableBasic />
}
