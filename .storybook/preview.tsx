import React from 'react'
import { Preview } from '@storybook/react'
import ThemeComponent from '../src/@core/theme/ThemeComponent'

const defaultSettings = {
  mode: 'light' // or dark
}

// .storybook/preview.js
export const globalTypes = {
  mode: {
    name: 'Mode',
    description: 'Global theme mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['DesignToken', 'Catalog', 'Components', 'Pages', 'Example']
      }
    }
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.mode
      const settings = { mode }
      return (
        <ThemeComponent settings={settings}>
          <Story />
        </ThemeComponent>
      )
    }
  ]
}

export default preview
