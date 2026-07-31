import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { fileURLToPath, URL } from 'node:url'
import { PurgeCSS } from 'purgecss'

function purgeCssPlugin() {
  return {
    name: 'vite-plugin-purgecss',
    async generateBundle(_options: any, bundle: any) {
      for (const file in bundle) {
        if (file.endsWith('.css')) {
          const cssChunk = bundle[file]
          const purgecss = new PurgeCSS()
          const result = await purgecss.purge({
            content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
            css: [{ raw: cssChunk.source as string }],
            safelist: {
              standard: [
                /^badge/,
                /^bg-/,
                /^col-/,
                /^row/,
                /^d-/,
                /^flex-/,
                /^justify-/,
                /^align-/,
                /^text-/,
                /^mb-/,
                /^mt-/,
                /^px-/,
                /^pt-/,
                /^p-/,
                /^g-/,
                /^gap-/,
                /^shadow/,
                /^rounded/,
                /^position-/,
                /^app-icon/,
                /^main-page/,
                /^profile-/,
                /^intro-/,
                /^section-/,
                /^timeline/,
                /^tech-/,
                /^skill/,
                /^progress/,
                /^right-/,
                /^action-/,
              ],
            },
          })
          if (result && result[0] && result[0].css) {
            cssChunk.source = result[0].css
          }
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    vue(),
    purgeCssPlugin(),
    ViteMinifyPlugin({
      collapseWhitespace: true,
      removeComments: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    cssMinify: 'esbuild',
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        compact: true,
      },
    },
  },
})
