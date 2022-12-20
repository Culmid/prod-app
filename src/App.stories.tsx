import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import App from './App'

export default {
  title: 'App',
  component: App
} as ComponentMeta<typeof App>

// 👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof App> = (args) => <App {...args} />

// 👇 Each story then reuses that template
export const Default = Template.bind({})
Default.args = {}
