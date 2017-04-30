#! /usr/bin/env node

const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');
const adc = require('../adc');

const SECTIONS = [{
    header: 'DOM парсер',
    content: 'Вычисляет глубину DOM, и проверяет больше ли она переданной. Если больше вернет 1, иначе 0.'
},
{
    header: 'Опции',
    optionList: [
        {
            name: 'depth',
            alias: 'd',
            description: 'Максимально допустимая глубина DOM'
        },
        {
            name: 'url',
            alias: 'u',
            description: 'Адрес ресурса для проверки.'
        },
        {
            name: 'show',
            alias: 's',
            description: 'Показать вычисленую глубину DOM.'
        },
        {
            name: 'redirect',
            alias: 's',
            description: 'Показать цепочку редиректоров.'
        },
        {
            name: 'help',
            alias: 'h',
            description: 'Показать эту справку и выйти.'
        }
    ]
}];

const OPTIONS_DEFINITIONS = [
    {alias: 'u', name: 'url', type: String},
    {alias: 'd', name: 'depth', type: String},
    {alias: 'h', name: 'help', type: String},
    {alias: 'r', name: 'redirect', type: Boolean},
    {alias: 's', name: 'show', type: Boolean}
];
const OPTIONS = commandLineArgs(OPTIONS_DEFINITIONS);

if (OPTIONS.help !== undefined) {
    const usage = getUsage(SECTIONS);
    console.log(usage);
    process.exit(0);
}

const {url} = OPTIONS;
const {depth} = OPTIONS;
const {show} = OPTIONS;
const {redirect} = OPTIONS;

if (url && depth) {
    if (isNaN(depth)) {
        throw new Error(`Depth not a number ${depth}!`);
    }
    adc.detect(url, depth, show, redirect).then(maxDepth => {
        console.log(`Max depth: ${maxDepth}. It's OK!`);
        process.exit(0);
    }).catch(err => {
        console.log(err);
        process.exit(1);
    });
} else if (url && !depth) {
    adc.detect(url, 9999999, show, redirect).then(maxDepth => {
        console.log(`Max depth: ${maxDepth}.`);
        process.exit(0);
    }).catch(err => {
        console.log(err);
        process.exit(1);
    });
} else if (!url) {
    throw new Error(`URL can't be ${url}!`);
} else if (!depth) {
    throw new Error(`Depth can't be ${depth}!`);
} else {
    throw new Error(`Unexpected error! Params: URL ${url}, depth ${depth}, show ${show}`);
}
