
### Webcomm-6

##### lecture plan

* Ch. 13

* Ch. 14

* HTML forms

* JS strings

---

#### Presentation of [Ch. 13]

(PDF available from MS Teams)

1. See the Mardown file

2. Exercises

* [Fixed-width layout bad](https://webdesignplayground.io/lessons/13-1-0)

* [Liquid Layout](https://webdesignplayground.io/lessons/13-2-0)

---

* [Flexible Layout](https://webdesignplayground.io/lessons/13-3-0)

* [Adaptive layout](https://webdesignplayground.io/lessons/13-4-0)

* [Mobile-first layout](https://webdesignplayground.io/lessons/13-5-0)

---

#### Presentation of [Ch. 14]

(PDF available from MS Teams)

Please see the markdown file available from the MS Teams channel.

---

#### HTML forms

Please see the respective section on [w3schools](https://www.w3schools.com/html/html_forms.asp)

* Forms will allow users to enter data

---

```html
<input type="text" id="myInputForm" >

```

---

#### handlings strings with JS

```js
let salutation = "Hello, World!";

document.getElementById("myParagraph").innerHTML =
salutation; 

```

---

#### The for cycle, 1

* Variables may contain individual values, like number 13, or more complex values that present themselves as a *sequence*

---

* a string is a sequence of characters (not just letters) from the keyboard

* the i-th character of a string is accessed with the square brackets notation

```js
let mystring = "Hello, World!";

console.log(mystring[0]); //prints 'H'
console.log(mystring[7]); //prints 'W'
```

* the ``for`` cycle iterates over a sequence

---

#### Printing char by char

```js
// let's count how many characters are in the string
let length = salutation.length;

for (let i = 0; i < length; i++) {
    console.log(salutation[i]);
}
```

Let's unroll it

---

```js
i = 0;
length = 13;
i < length? // Yes.
console.log(salutation[0]); //prints 'H'
```

```js
i = 1;
length = 13;
i < length? // Yes.
console.log(salutation[1]); //prints 'e'
```

---

```js
i = 12;
length = 13;
i < length? // Yes.
console.log(salutation[12]); //prints '!'
```

```js
i = 13;
length = 13;
i < length? // no.
```

The JS interpreter moves on to the next instruction below

---

#### Methods

* A method is a function that belongs to an object

* A method is called with the dot notation

```js
stringvariable.method();
```

prefer methods to own functions

most activities are already implemented in methods

---

#### Capitalization, 1

```js
let mystring = "Hello, World!";

let theFirst = mystring.charAt(0)

let theRest = mystring.slice(1)
```

---

#### Capitalization, 2

```js
let mystring = "Hello, World!";

let theFirst = mystring.charAt(0)

let theRest = mystring.slice(1)

let lowercasefirst = theFirst.toLowerCase()

const mynewstring = lowecasefirst + theRest

console.log(mynewstring)
```

---

#### chaining methods

```js
let lowercasefirst = word.charAt(0).toUpperCase()
```

---

#### Splitting strings

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');

console.log(words[3]);
```

What is the expected output?
