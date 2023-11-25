<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# bind2vind

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a linear index in an underlying data buffer to a linear index in an array view.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import bind2vind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bind2vind@esm/index.mjs';
```

#### bind2vind( shape, strides, offset, order, idx, mode )

Converts a linear index in an underlying data buffer to a linear index in an array view.

```javascript
var shape = [ 3, 3 ];
var order = 'row-major';
var strides = [ -3, 1 ];
var offset = 6;

var idx = bind2vind( shape, strides, offset, order, 7, 'throw' );
// returns 1
```

The function supports the following modes:

-   **throw**: specifies that the function should throw an error when a linear index exceeds array dimensions.
-   **normalize**: specifies that the function should normalize negative indices and should throw an error when a linear index exceeds array dimensions.
-   **wrap**: specifies that the function should wrap around a linear index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that the function should set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, 1 ];
var offset = 2;

var idx = bind2vind( shape, strides, offset, order, -2, 'wrap' );
// returns 0

idx = bind2vind( shape, strides, offset, order, 10, 'clamp' );
// returns 1
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, -2 ];
var offset = 2;

var idx = bind2vind( shape, strides, offset, order, 2, 'throw' );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs';
import strides2offset from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs';
import numel from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import bind2vind from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-bind2vind@esm/index.mjs';

// Specify array meta data:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var len = numel( shape );
var strides = shape2strides( shape, order );

// Randomly flip the sign of strides...
var i;
for ( i = 0; i < shape.length; i++ ) {
    if ( randu() < 0.5 ) {
        strides[ i ] *= -1;
    }
}

// Compute the underlying data buffer index offset:
var offset = strides2offset( shape, strides );

// Print array info:
console.log( 'Dims: %s', shape.join( 'x' ) );
console.log( 'Strides: %s', strides.join( ',' ) );
console.log( 'Offset: %d', offset );

// For each underlying data buffer index, determine the corresponding index into an array view...
var ind;
for ( i = 0; i < len; i++ ) {
    ind = bind2vind( shape, strides, offset, order, i, 'throw' );
    console.log( 'buffer[%d] => view[%d]', i, ind );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-bind2vind.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-bind2vind

[test-image]: https://github.com/stdlib-js/ndarray-base-bind2vind/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-bind2vind/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-bind2vind/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-bind2vind?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-bind2vind.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-bind2vind/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-bind2vind/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-bind2vind/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-bind2vind/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-bind2vind/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-bind2vind/main/LICENSE

</section>

<!-- /.links -->
