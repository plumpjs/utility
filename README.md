# PlumpJS Utility
Simple, native JavaScript utility functions without any dependencies. Fast, simple, does the job. 

## Dependencies

None, zero, zlitch. 

## Compatibility
| IE | Chrome | Firefox | Opera | Safari | Mobile (BB, Opera, FF, IE, Android) |
|----|--------|---------|-------|--------|-------------------------------------|
| 9+ | 4+     | 3.5+    | 10.1+ | 3.2+   | All versions                        |

## Functions

You can invoke each function using the well-known dollar symbol, `$`.

### deepExtend([defaults], [options])

Will allow the ability to merge two obejcts together. Any `defaults` properties will always be overriden by `options` if two object properties have the same name. 

```JavaScript
$.deepExtend(Object, Object);
```

##### Usage:
```JavaScript
var defaults = { a: 'a', c: 'c' };
var options = { a: 'a', b: 'b', c: 'Get out!' };

var merge = $.deepExtend(defaults, options);

console.log(merge);
// { a: 'a', b: 'b', c: 'Get out!' }
```

---

### hasClass([element], [selector])

Check if specific element(s) has the specified class selector.

```JavaScript
$.hasClass(String, String);
```

##### Usage:

```HTML
<div class="selector my-class"></div>
```

```JavaScript
var selector = document.querySelectorAll('.selector');

for (var i = 0; i < selector.length; i++) {
    var checkIfHasClass = $.hasClass(selector[i], 'my-class');
    console.log(checkIfHasClass);
}
// true

var selector = document.querySelectorAll('.selector');

for (var i = 0; i < selector.length; i++) {
    var checkIfHasClass = $.hasClass(selector[i], 'my-non-existent-class');
    console.log(checkIfHasClass);
}
// false
```

---

### addClass([element], [selector])

Add class selectors to a specified element(s).

```JavaScript
$.addClass(String, String);
```

##### Usage:

```HTML
<div class="selector"></div>
```

```JavaScript
var selector = document.querySelectorAll('.selector');

for (var i = 0; i < selector.length; i++) {
    $.addClass(selector[i], 'my-class');
}

// <div class="selector my-class"></div>
```

---

### removeClass([element], [selector])

Check if specific element(s) has the specified class selector.

```JavaScript
$.removeClass(String, String);
```

##### Usage:

```HTML
<div class="selector my-class"></div>
```

```JavaScript
var selector = document.querySelectorAll('.selector');

for (var i = 0; i < selector.length; i++) {
    $.removeClass(selector[i], 'my-class');
}

// <div class="selector"></div>
```

---

### addEvent([element], [type], [function])

Add DOM handler events from specified element(s).

```JavaScript
$.addEvent(String, String, Function);
```

##### Usage:

```JavaScript
var selector = document.querySelectorAll('.selector');

var myFunction = function() {
    console.log('Selector clicked!');
}

for (var i = 0; i < selector.length; i++) {
    $.addEvent(selector[i], 'click', myFunction);
}

// Clicking on the set element(s) will return:
// Selector clicked!
```

---

### removeEvent([element], [type], [function])

Remove DOM handler events from specified element(s).

```JavaScript
$.removeEvent(String, String, Function);
```

##### Usage:

```JavaScript
var selector = document.querySelectorAll('.selector');

var myFunction = function() {
    console.log('Selector clicked!');
}

for (var i = 0; i < selector.length; i++) {
    $.removeEvent(selector[i], 'click', myFunction);
}

// Clicking on the set element(s) will return nothing.
```