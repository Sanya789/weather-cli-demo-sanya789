#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getIcon, getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue } from './services/storage.service.js';
import { TOKEN_DICTIONARY } from './services/storage.service.js';


const saveToken = async (token) => {
    if (!token.length) {
        printError('Токен не передан');
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSucces('Токен сохранен')
    } catch (e) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSucces('Город сохранен')
    } catch (e) {
        printError(e.message);
    }
};

const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
        // console.log(weather);
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Неверно указан город')
        }
        else if (e?.response?.status == 401) {
            printError('Неверно указан токен')
        } else {
            printError(e.message)
        }
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);
    // console.log(process.env);
    if (args.h) {
        return printHelp()
    }
    if (args.s) {
        return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    // getWeather('moscow')
    return getForecast()
};

initCLI();