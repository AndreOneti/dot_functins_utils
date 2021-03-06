# Dot Functions Utils

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Maintenance][maintenance-img]][maintenance-url]
[![GitHub issues][issues-open-image]][issues-open-url]
[![TravisCi Build][travis-report-image]][travis-report-url]


## How to use

### Install

``` sh
npm i dot_functions_utils
or
yarn add dot_functions_utils
```

<hr>

### Dates

``` javascript
require('dot_functions_utils');

var dateNow = new Date;                               // 2020-04-13T14:09:02.649Z

dateNow.getWeekDay();                                 // Monday
dateNow.getWeekDay('eng');                            // Monday
dateNow.getWeekDay('es');                             // Lunes
dateNow.getWeekDay('pt-br');                          // Segunda
dateNow.getFirstDay();                                // 2020-04-01T03:00:00.000Z
dateNow.getLastDay();                                 // 2020-04-30T03:00:00.000Z
dateNow.getWeekEnd();                                 // 2020-04-18T14:09:02.649Z
dateNow.getWeekBegin();                               // 2020-04-12T14:09:02.649Z
dateNow.nextDay(5);                                   // 2020-04-18T14:09:02.649Z
dateNow.backDay(5);                                   // 2020-04-08T14:09:02.649Z
dateNow.format();                                     // '2020-04-13'
dateNow.format('yyyy-mm-dd');                         // '2020-04-13'
dateNow.format('dd-mm-yyyy');                         // '13-04-2020'
dateNow.format('dd/mm/yyyy');                         // '13/04/2020'
dateNow.format('yyyy/mm/dd');                         // '2020/04/13'
dateNow.format('dd/mm/yyyy - hh:mm:ss');              // '13/04/2020 - 14:09:02'
dateNow.nextMonth(1);                                 // 2020-05-13T14:09:02.649Z
dateNow.previousMonth(1);                             // 2020-03-13T14:09:02.649Z
dateNow.nextYear(1);                                  // 2021-04-13T14:09:02.649Z
dateNow.previousYear(1);                              // 2019-04-13T14:09:02.649Z
dateNow.getMonthName();                               // April
dateNow.getMonthName('eng');                          // April
dateNow.getMonthName('es');                           // Abril
dateNow.getMonthName('pt-br');                        // Abril
dateNow.getDayOfYear();                               // 105
dateNow.log();                                        // log - [10/06/2020 - 19:48:56] >  2020-04-13T14:09:02.649Z | return 2020-04-13T14:09:02.649Z
dateNow.log("Date");                                  // log - [10/06/2020 - 19:48:56] (Date) >  2020-04-13T14:09:02.649Z | return 2020-04-13T14:09:02.649Z

dateNow = new Date(2020, 6, 18, 0, 18, 35);           // 2020-04-13T14:09:02.649Z

dateNow.toFormat("Day DD, MMMM of YYYY");             // "Day 18, July of 2020"
dateNow.toFormat("Day DD, MMMM de YYYY", 'pt-br');    // "Day 18, Julho de 2020"

```

<hr>

### Arrays

``` javascript
const { waitFor } = require('dot_functions_utils');

let list = [1, 2, 3, 4];
let myList = [2, 3, 4];

list.getLastElement();                                // 4
list.getFirstElement();                               // 1
list.getMiddleElement();                              // [2, 3]
myList.getMiddleElement();                            // [3]
myList.log();                                         // log - [10/06/2020 - 19:48:56] >  [2, 3, 4] | return [2, 3, 4]
myList.log("Array");                                  // log - [10/06/2020 - 19:48:56] (Array) >  [2, 3, 4] | return [2, 3, 4]
myList.forEachSync(
  async (elemente, index, array) => {
    await waitFor(1);
    console.log(elemente);                            // log on console the elements after 1 second
  }
);

```

<hr>

### Strings

``` javascript
require('dot_functions_utils');

let myFirstString = '1';

myFirstString.twoDigits();                            // '01'
myFirstString.threeDigits();                          // '001'

let mySecondString = '11';

mySecondString.twoDigits();                           // '11'
mySecondString.threeDigits();                         // '011'

let myThirdString = '123';

myThirdString.twoDigits();                            // '123'
myThirdString.threeDigits();                          // '123'

let myFourthString = 'my string';

myFourthString.captalize();                           // 'My string'
myFourthString.captalizeAll();                        // 'My String'

let myString = 'my string';

myFourthString.splitToArray(3);                       // [ 'my ', 'str', 'ing' ]
myFourthString.splitToArray(2);                       // [ 'my', ' s', 'tr', 'in', 'g' ]

myString = '';

myString.splitToArray(2);                             // []

myString = 'Hello World!';

myString.encodeBase64();                              // 'SGVsbG8gV29ybGQh'

myString = 'SGVsbG8gV29ybGQh';

myString.decodeBase64();                              // 'Hello World!'

myString = 'Hello World!';

myString.decapitalize();                              // 'hello World!'

myString.reverse();                                   // '!dlrow olleh'

myString = '{ "name": "John Doe" }'

myString.toJson();                                    // { "name": "John Doe" }

myString = "hello world"

myString.toJson();                                    // "hello world"

myString.log();                                       // log - [10/06/2020 - 19:48:56] >  "hello world" | return "hello world"

myString.log("String");                               // log - [10/06/2020 - 19:48:56] (String) >  "hello world" | return "hello world"

```

<hr>

### Number

``` javascript
require('dot_functions_utils');

let myNumber = 1500;

myNumber.log();                                       // log - [10/06/2020 - 19:48:56] >  1500 | return 1500

myNumber.log("Number");                               // log - [10/06/2020 - 19:48:56] (Number) >  1500 | return 1500

let myFirstNumber = 1;

myFirstNumber.twoDigits();                            // '01'
myFirstNumber.threeDigits();                          // '001'

let mySecondNumber = 11;

mySecondNumber.twoDigits();                           // '11'
mySecondNumber.threeDigits();                         // '011'

let myThirdNumber = 123;

myThirdNumber.twoDigits();                            // '123'
myThirdNumber.threeDigits();                          // '123'

let myNumber = 1234;

myNumber.twoDigits();                                 // '1234'
myNumber.threeDigits();                               // '1234'

let financialNumber = 1000;

financialNumber.format();                             // '1.000,00'

financialNumber = 10;

financialNumber.format();                             // '10,00'

financialNumber = 10.50;

financialNumber.format();                             // '10,50'

financialNumber = 1000.99;

financialNumber.format();                             // '1.000,99'

```

<hr>

### Functions

``` javascript
const { threeDigits, twoDigits, generateUniqueID, log, waitFor } = require('dot_functions_utils');

let firstString = '1';

twoDigits(firstString);                               // '01'
threeDigits(firstString);                             // '001'

let secondString = '11';

twoDigits(secondString);                              // '11'
threeDigits(secondString);                            // '011'

let thirdString = '123';

twoDigits(thirdString);                               // '123'
threeDigits(thirdString);                             // '123'

generateUniqueID ();                                  // "3ace9a54-524e-c7df-9556-c97042413565"

log("My string|object", "Debug");                     // [ 04/06/2020 - 18:45:50 - Debug ] > "My string|object"

log({"name":"Jhon"}, "Debug");                        // [ 04/06/2020 - 18:45:50 - Debug ] > {"name":"Jhon"}

let timeNow = (new Date).getTime();                   // 2020-06-20T09:05:30.649Z
let seconds = 10;
(async ()=>{
  await waitFor(seconds);                             // 2020-06-20T09:05:40.895Z
})()

```

<br>
<hr>

[![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/AndreOneti/dot_functions_utils/blob/master/LICENSE)

[travis-report-image]: https://travis-ci.org/AndreOneti/dot_functions_utils.svg?branch=master
[travis-report-url]: https://travis-ci.org/github/AndreOneti/dot_functions_utils
[downloads-image]: https://img.shields.io/npm/dm/dot_functions_utils.svg
[downloads-url]: https://npmjs.org/package/dot_functions_utils
[npm-image]: https://img.shields.io/npm/v/dot_functions_utils.svg
[npm-url]: https://npmjs.org/package/dot_functions_utils
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://github.com/AndreOneti/dot_functions_utils
[issues-open-image]: https://img.shields.io/github/issues/AndreOneti/dot_functions_utils.svg
[issues-open-url]: https://github.com/AndreOneti/dot_functions_utils/issues?q=is%3Aopen+is%3Aissue
