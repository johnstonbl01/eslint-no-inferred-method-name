'use strict';

const repeater = {
	name: 'Repeater',
	types: [
		{ f: 'function' },
		{ n: 'number' }
	],
	otherObj: {
		repeat: function (f, n) {
			let i = n - 1;

			if (typeof f === 'function') {
				f();
			} else {
				throw new Error('repeat: A Function is required');
			}

			if (!n) {
				return undefined;
			}

			return repeat(f, i);
		}
	}
};

const repeater = {
	name: 'Repeater',
	types: [
		{ f: 'function' },
		{ n: 'number' }
	],
	repeat: function repeat (f, n) {
		let i = n - 1;

		if (typeof f === 'function') {
			f();
		} else {
			throw new Error('repeat: A Function is required');
		}

		if (!n) {
			return undefined;
		}

		return repeat(f, i);
	}
};

undef();
