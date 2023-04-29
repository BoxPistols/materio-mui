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
    description: 'Light or dark mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark']
    }
  }
}

// export const decorators = [
//   (Story, context) => {
//     const mode = context.globals.mode;
//     const settings = { mode };
//     return (
//       <ThemeComponent settings={settings}>
//         <Story />
//       </ThemeComponent>
//     );
//   },
// ];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      storySort: {
        order: ['Components']
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
    // (Story) => (
    //   <ThemeComponent settings={defaultSettings} >
    //     <Story />
    //   </ThemeComponent>
    // ),
  ]
}

export default preview
