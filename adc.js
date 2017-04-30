const jsdom = require('jsdom');

const HTML = 1;
const DOCUMENT = 9;

const adc = (localUrl, localDepth, localShow, localRedirect) => {
    const URLS = new Set();
    URLS.add(localUrl);
    return new Promise((resolve, reject) => {
        if (!localUrl.match(/^(?:(?:(?:https?|http|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i)) {
            reject(new Error(`invalid url ${localUrl}`));
        }
        jsdom.env(localUrl, (err, window) => {
            localDepth = Number(localDepth);
            URLS.add(window.document.location.href);
            if (err) {
                throw err;
            }
            let maxDepth = 0;
            function traverse(node, curDepth) {
                if (node.nodeType === HTML || node.nodeType === DOCUMENT) {
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

            maxDepth = traverse(window.document, 1);
            if (localShow) {
                console.log(`Max depth: ${maxDepth} for url ${localUrl}`);
            }
            if (localRedirect) {
                console.log(Array.from(URLS).join(' ➪➪➪ '));
            }
            if (maxDepth > localDepth) {
                // return 1;
                reject(new Error(`Depth of DOM > ${localDepth}, and equal ${maxDepth}`));
            } else if (maxDepth === 0) {
                reject(new Error(`Depth of ${localUrl} equal 0, maybe url is wrong?`));
            }
            // process.exit(0);
            resolve(maxDepth);
        });
    });
};

adc.detect = adc;
module.exports = adc;
