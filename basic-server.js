console.log ("We will make this work")

const chalk = require('chalk');
const log = console.log;

// Basic Colors

log(chalk.red('Firered'));
log(chalk.white('boooo!'));
log(chalk.yellow('happy halloween!'));

// Background colors

log(chalk.bgRed('yum'));
log(chalk.bgGreen('link'));

// Styling & Decoration

log(chalk.bold('bold and brash'));
log(chalk.underline('clearly important'));

// Chaining

log(chalk.yellow.bgGreen.bold('Banana & Monky'));
log(chalk.white.bgRed.underline('Homeland'));

// Hex & RGB

log(chalk.hex('#009779').bold('special'));
log(chalk.rgb(19, 199, 55).bold('close to birth'));
