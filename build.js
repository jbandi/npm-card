'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('              Jonas Bandi'),
  handle: chalk.white('jbandi'),
  work: chalk.white('Enthusiastic Software Professional'),
  location: chalk.white('Bern, Switzerland'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('jonasbandi'),
  xing: chalk.gray('https://www.xing.com/profile/') + chalk.blue('Jonas_Bandi'),
  cv: chalk.gray('https://cv.jonasbandi.net'),
  web: chalk.cyan('https://jonasbandi.net'),
  medium: chalk.gray('https://medium.jonasbandi.net/'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('jbandi'),
  github: chalk.gray('https://github.com/') + chalk.green('jbandi'),
  npx: chalk.red('npx') + ' ' + chalk.white('jbandi'),
  labelWork: chalk.white.bold('       Work:'),
  labelLocation: chalk.white.bold('   Location:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelXing: chalk.white.bold('       Xing:'),
  labelCv: chalk.white.bold('         CV:'),
  Speaking: chalk.white.bold('        Speaking:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelMedium: chalk.white.bold('     Medium:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const work = `${data.labelWork}  ${data.work}`
const location = `${data.labelLocation}  ${data.location}`
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`
const xing = `${data.labelXing}  ${data.xing}`
const cv = `${data.labelCv}  ${data.cv}`
const web = `${data.labelWeb}  ${data.web}`
const medium = `${data.labelMedium}  ${data.medium}`
const twitter = `${data.labelTwitter}  ${data.twitter}`
const github = `${data.labelGitHub}  ${data.github}`
const card = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading +
  newline + newline +
  work + newline +
  location + newline + newline +
  linkedin + newline +
  xing + newline +
  cv + newline +
  newline +
  web + newline +
  medium + newline +
  twitter + newline +
  github + newline +
  newline +
  card

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
