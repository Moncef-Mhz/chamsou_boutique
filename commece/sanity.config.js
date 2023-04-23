import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'commece',

  projectId: 'c3ch8m0z',
  dataset: 'somthin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
