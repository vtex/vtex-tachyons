const { writeFile } = require('fs').promises
const path = require('path')
const tachyonsGenerator = require('@vtex/tachyons-generator')

const config = require('./config.js')

const writePromise = (file, promisedContent) =>
  promisedContent.then(data => writeFile(file, data))

const init = async () => {
  // Write config file as JSON to keep API compatibility
  await writeFile(
    path.join(__dirname, 'config.json'),
    JSON.stringify(config, null, 2),
    'utf8',
  )

  const generate = () => {
    const tachy = tachyonsGenerator(config)

    writePromise('index.html', tachy.docs())
    writePromise('tachyons.css', tachy.generate())
    writePromise('tachyons.min.css', tachy.generate({ minify: true }))
    writePromise('tachyons.print.css', tachy.generatePrint())
    writePromise(
      'tachyons.print.min.css',
      tachy.generatePrint({ minify: true }),
    )
  }

  const generateScoped = () => {
    const namespace = 'onda-v3'
    const scopedConfig = Object.assign({}, { namespace }, config)
    const tachy = tachyonsGenerator(scopedConfig)

    writePromise('tachyons-scoped.css', tachy.generate())
    writePromise('tachyons-scoped.min.css', tachy.generate({ minify: true }))
  }

  generate()
  generateScoped()
}

init()
