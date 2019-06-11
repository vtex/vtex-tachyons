const { writeFile } = require('fs').promises
const path = require('path')
const tachyonsGenerator = require('@vtex/tachyons-generator')

const config = require('./config.js')

const writeTo = (file, promisedContent) =>
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

    writeTo('index.html', tachy.docs())
    writeTo('tachyons.css', tachy.generate())
    writeTo('tachyons.min.css', tachy.generate({ minify: true }))
    writeTo('tachyons.print.css', tachy.generatePrint({ key: 'print' }))
    writeTo(
      'tachyons.print.min.css',
      tachy.generatePrint({ key: 'print', minify: true }),
    )
  }

  generate()

  const generateScoped = () => {
    const namespace = 'onda-v3'
    const scopedConfig = Object.assign({}, { namespace }, config)
    const tachy = tachyonsGenerator(scopedConfig)

    writeTo('tachyons-scoped.css', tachy.generate())
    writeTo('tachyons-scoped.min.css', tachy.generate({ minify: true }))
  }

  generateScoped()
}

init()
