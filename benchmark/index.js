'use stirct'
const child_process = require('child_process')
const path= require('path')
const glob = require('glob')

const cmd = path.join(__dirname, '../node_modules/.bin/matcha')

glob.sync(`${__dirname}/!(index).js`).forEach((file) => {
  child_process.execSync(`${cmd} ./benchmark/${path.basename(file)}`, {
    stdio: 'inherit'
  })
})
