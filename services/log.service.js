import chalk from 'chalk';
import dedent from 'dedent'

const printError = (error) => {
    console.log(`${chalk.bgRed('ERROR')} ${error}`);
};

const printSucces = (message) => {
    console.log(`${chalk.bgGreen('SUCCES')} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}
            Без параметров - вывод погоды
            -s [CITY] - установка города
            -h - помощь 
            -t [API_KEY] - сохранить токен
    `);
};

export { printError, printSucces, printHelp };