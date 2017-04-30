# akrasnov96-dom-checker

Измеритель глубины DOM'a.

## Installation

```javascript
npm install --save akrasnov96-dom-checker
```

Для использования CLI
```javascript
npm install -g akrasnov96-dom-checker
```

## Usage

Как исполняемый файл:
```
adc --url http://example.com --depth 10
```
Опции:
```
  -d, --depth    Максимально допустимая глубина DOM 
  -u, --url      Адрес ресурса для проверки.        
  -s, --show     Показать вычисленую глубину DOM.  
  -r, --redirect Показать цепочку редиректов.  
  -h, --help     Показать эту справку и выйти.      
```

Как подключаемую библиотеку: 
```javascript
const add = require(‘adc’);
add.detect(url, depth).then().catch();
```

