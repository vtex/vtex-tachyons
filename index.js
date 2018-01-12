const fs = require('fs')
const path = require('path')
const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  const out = await tachy.generate()
  
  fs.writeFileSync(path.join(__dirname, 'docs', 'index.html'), out.docs)
  fs.writeFileSync(path.join(__dirname, 'docs', 'tachyons.css'), out.css)
}

generate()