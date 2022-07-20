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

const printWeather = (res, icon) => {
console.log(
    dedent`${chalk.bgYellow('WEATHER')} Погода в городе ${res.name}
    ${icon} ${res.weather[0].description}
    Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
    Влажность: ${res.main.humidity}%
    Скорость ветра: ${res.wind.speed} 
    `
);
}

export { printError, printSucces, printHelp, printWeather };