const fs = require('fs')
const path = require('path')
const tachyonsGenerator = require('@vtex/tachyons-generator')

const config = require('./config.js')

// Write config file as JSON to keep API compatibility
fs.writeFileSync(
  path.join(__dirname, 'config.json'),
  JSON.stringify(config, null, 2),
  'utf8'
)

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  const docs = await tachy.docs()
  const css = await tachy.generate()
  const cssMin = await tachy.generate({ minify: true })

  fs.writeFileSync('index.html', docs)
  fs.writeFileSync('tachyons.css', css)
  fs.writeFileSync('tachyons.min.css', cssMin)
}

generate()

const generateScoped = async () => {
  const namespace = 'onda-v1'
  const scopedConfig = Object.assign({}, { namespace }, config)
  const tachy = tachyonsGenerator(scopedConfig)

  const css = await tachy.generate()
  const cssMin = await tachy.generate({ minify: true })

  fs.writeFileSync('tachyons-scoped.css', css)
  fs.writeFileSync('tachyons-scoped.min.css', cssMin)
}

generateScoped()