const fs = require('fs')
const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

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