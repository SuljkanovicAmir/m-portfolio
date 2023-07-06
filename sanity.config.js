import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemas } from './sanity/schemas'


export default defineConfig({
  title: 'Mersim Portfolio',

  projectId: '1wihf8wm',

  dataset: 'production',

  apiVersion: "2023-7-6",

  basePath: '/admin',

  plugins: [deskTool()],

  schema: { types: schemas }
})
