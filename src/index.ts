#!usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');


const main = async () => {
clear();
console.log(
  chalk.red(
    figlet.textSync('SkolmatenCLI', { horizontalLayout: 'full' })
  )
);
}

program
  .version('0.0.1')
  .description("Ett Command Line Interface för skolmaten.se.")
  .option('-c, --configure', 'Ställ in alla inställningar att vara rätt.')
  .parse(process.argv)


