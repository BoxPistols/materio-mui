import type { Meta, StoryObj } from '@storybook/react'

import ErrorPage from './'

const meta: Meta<typeof ErrorPage> = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  args: {}
}

export default meta
type Story = StoryObj<typeof ErrorPage>

export const Index: Story = {
  render: () => <ErrorPage />
}
