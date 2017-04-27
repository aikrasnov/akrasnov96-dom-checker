#! /usr/bin/env node

const commandLineArgs = require('command-line-args');
const getUsage = require('command-line-usage');
const jsdom = require('jsdom');


const sections = [{
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
            name: 'help',
            alias: 'h',
            description: 'Показать эту справку и выйти.'
        },
        {
            name: 'show',
            alias: 's',
            description: 'Показать вычисленую глубину DOM.'
        }
    ]
}];

const optionDefinitions = [
    {alias: 'u', name: 'url', type: String},
    {alias: 'd', name: 'depth', type: Number},
    {alias: 'h', name: 'help', type: String},
    {alias: 's', name: 'show', type: Boolean}
];
const options = commandLineArgs(optionDefinitions);

if (options.help !== undefined) {
    const usage = getUsage(sections);
    console.log(usage);
    process.exit(0);
}

const {url} = options;
const {depth} = options;
const {show} = options;

const adc = (localUrl, localDepth, localShow) => {
    return new Promise((resolve, reject) => {
        jsdom.env(localUrl, (err, window) => {
            if (err) {
                console.log(err);
                process.exit(137);
            }
            let maxDepth = 0;

            function traverse(node, curDepth) {
                if (node.nodeType === 1 || node.nodeType === 9) {
                    if (node.hasChildNodes()) {
                        for (const childNode of node.childNodes) {
                            traverse(childNode, curDepth + 1);
                        }
                        if (curDepth > maxDepth) {
                            maxDepth = curDepth;
                        }
                    }
                }
                return maxDepth;
            }

            traverse(window.document, 1);
            if (localShow) {
                console.log(maxDepth);
            }
            if (maxDepth > localDepth) {
                // return 1;
                reject(Error(`Depth of DOM > ${depth}, and equal ${maxDepth}`));
            }
            // process.exit(0);
            resolve(0);
        });
    });
};

adc.detect = adc;

if (url && depth) {
    adc.detect(url, depth, show).then(() => {
        process.exit(0);
    }).catch(() => {
        process.exit(1);
    });
} else if (url === null || depth === null) {
    console.log(`given --url: ${url}, --depth:${depth}`);
    process.exit(3);
}

module.exports = adc;
