const fs = require('fs')
const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const generate = async () => {
  const tachy = tachyonsGenerator(config)

  const out = await tachy.generate()
  
  fs.writeFileSync('index.html', out.docs)
  fs.writeFileSync('tachyons.css', out.css)
}

generate()