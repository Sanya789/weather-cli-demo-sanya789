#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
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

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(process.env);
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getWeather('moscow')
};

initCLI();