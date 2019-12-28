# vue-suggest-box
[![npm version](https://badge.fury.io/js/vue-suggest-box.svg)](https://badge.fury.io/js/vue-suggest-box)

[![NPM](https://nodei.co/npm/vue-suggest-box.png)](https://nodei.co/npm/vue-suggest-box/)

A simple suggest box component for Vue.js inspired by the card design from Ghost CMS and Unsplash!

## Installation
For Yarn
`yarn add vue-suggest-box`

For NPM
`npm install --save vue-suggest-box`

## Usage
Import component by using this line of code
```javascript
import Suggest from 'vue-suggest-box'
```

Then include the component in your .vue file
```javascript
export default {
	components: {
		Suggest,
	}
}
```

Done!
```javascript
<template>
	<Suggest position="btl" title="Card Title" content="Content goes here"/>
</template>
```

## Props

|  Name | Type  | Default | Description
| ------------ | ------------ | ------------ |
| position  | String  |  "btl" (Bottom Left) |  The position of the suggest box. ("btl", "btr", "tl", "tr") |
|  title |  String | "Hello World!"  |  The title of it. |
|  contnet | String  |  "Lorem ipsum. . ." |  The content of it |


## License
Copyright 2018 Jirattikarn Phasugmool

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.