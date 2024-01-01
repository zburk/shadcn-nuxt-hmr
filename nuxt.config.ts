export default defineNuxtConfig({
  // Hot Reload doesn't work with this configuration
  // modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  // shadcn: {
  //   /**
  //    * Prefix for all the imported component
  //    */
  //   prefix: '',
  //   /**
  //    * Directory that the component lives in.
  //    * @default "./components/ui"
  //    */
  //   componentDir: './components/ui'
  // }



  // Hot reload *does* work with this configuration
  modules: ['@nuxtjs/tailwindcss'],
  hooks: {
    'components:dirs': (dirs) => {
      dirs.unshift({
        path: '~/components/ui',
        // this is required else Nuxt will autoImport `.ts` file
        extensions: ['.vue'],
        // prefix for your components, eg: UiButton
        prefix: '',
        // prevent adding another prefix component by it's path.
        pathPrefix: false
      })
    }
  }
})