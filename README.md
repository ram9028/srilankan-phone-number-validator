<p align="center">
<img src="https://img.shields.io/circleci/build/github/dinushchathurya/srilankan-phone-number-validator" alt="Build Status" />
<img src="https://scrutinizer-ci.com/g/dinushchathurya/srilankan-phone-number-validator/badges/quality-score.png?b=master" alt="Scrutinizer Quality Score" />
<img src="https://img.shields.io/scrutinizer/quality/g/dinushchathurya/srilankan-phone-number-validator" alt="Scrutinizer Quality Score" />
<img src="https://img.shields.io/coveralls/github/badges/shields" alt="coverage">
<img src="https://img.shields.io/badge/downloads-1k%2Fmonth-brightgreen">
<img src="https://img.shields.io/badge/rating-★★★★☆-brightgreen">
<img src="https://img.shields.io/badge/uptime-100%25-brightgreen">
<a href="https://dinushchathurya.github.io/">
<img alt="Website" src="https://img.shields.io/website?down_message=red&style=plastic&up_message=online&url=https%3A%2F%2Fdinushchathurya.github.io%2F">
</a>
<img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDinushChathurya">
<img src="https://img.shields.io/badge/made%20with%20love-by%20srilanka-orange">
</p>

<h1 align="center">Sri Lankan Phone Number Validator</h1>
  <p align="center">
    This package validates all Sri Lankan phone numbers including mobile and landline numbers.
  </p><br><br>
</div>

## Table of Contents
<ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
</ol>

## Installation

via npm

`npm i @dinush/srilankan-phone-number-validator --save`

or via yarn

`yarn add @dinush/srilankan-phone-number-validator`


## Usage 
The module accepts the various Number format +94xxxxxxxxx, 94xxxxxxxxx, 07XXXXXXXX, 7XXXXXXXX. However the module returns the phone number in the format 7XXXXXXXX

```
var { validateLKPhone } = require("@dinush/srilankan-phone-number-validator")

validateLKPhone("+94xxxxxxxxx") //returns JSON object
validateLKPhone("94xxxxxxxxx") //returns JSON object
validateLKPhone("07xxxxxxxx") //returns JSON object
validateLKPhone("7xxxxxxxx") //returns JSON object
```
<b>valid phone number response</b>

```
{
    "phone": "772100100",
    "valid": true,
    "info": "Is valid srilankan phone number",
    "type": "mobile"
}
```

<b>Invalid phone number response</b>

```
{
  "phone": "94688200567563",
  "valid": false,
  "info": "Phone number 94688200567563 is not a valid srilankan number",
  "type": "unknow"
}
```

<b>More Options</b>
To simply determine if a number is valid or not

```
validateLKPhone("+94717187425").valid ; // true 
```

To get simply determine if a number a land line or mobile

```
validateLKPhone("+94717187425").type ; // mobile 
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author 

Author [Dinush Chathurya](https://dinushchathurya.github.io/)

## Credits

Inspired by [Alex Ssanya](https://github.com/alexxsanya)<br>
Regex Credit [Ayesh Karunaratne](https://github.com/Ayesh)

## License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2022 <a href="https://dinushchathurya.github.io/">Dinush Chathurya</a> and <a href="https://codingtricks.io/">codingtricks.io</a>


              