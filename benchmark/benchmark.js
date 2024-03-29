/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var randu = require( '@stdlib/random-base-randu' );
var floor = require( '@stdlib/math-base-special-floor' );
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var numel = require( '@stdlib/ndarray-base-numel' );
var pkg = require( './../package.json' ).name;
var bind2vind = require( './../lib' );


// MAIN //

bench( pkg+':mode=throw,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len );
		out = bind2vind( shape, strides, offset, order, idx, 'throw' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=throw,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len );
		out = bind2vind( shape, strides, offset, order, idx, 'throw' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=throw,offset=0,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len );
		out = bind2vind( shape, strides, offset, order, idx, 'throw' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=throw,offset=0,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len );
		out = bind2vind( shape, strides, offset, order, idx, 'throw' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=wrap,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'wrap' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=wrap,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'wrap' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=wrap,offset=0,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'wrap' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=wrap,offset=0,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'wrap' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=clamp,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'clamp' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=clamp,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'clamp' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=clamp,offset=0,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'clamp' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=clamp,offset=0,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'clamp' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=normalize,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'normalize' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=normalize,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	strides[ 1 ] *= -1;
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'normalize' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=normalize,offset=0,order=row-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'row-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'normalize' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':mode=normalize,offset=0,order=column-major', function benchmark( b ) {
	var strides;
	var offset;
	var shape;
	var order;
	var out;
	var len;
	var idx;
	var i;

	shape = [ 10, 10, 10 ];
	order = 'column-major';
	strides = shape2strides( shape, order );
	offset = strides2offset( shape, strides );
	len = numel( shape );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*len*2.0 ) - len;
		out = bind2vind( shape, strides, offset, order, idx, 'normalize' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isInteger( out ) ) {
		b.fail( 'should return an integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
