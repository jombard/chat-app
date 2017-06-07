const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non string values', () => {
		var boolean = false;
		var isString = isRealString(boolean);

		expect(isString).toBe(false);
	});
	it('should reject string with only spaces', () => {
		var spacesOnly = '     ';
		var isString = isRealString(spacesOnly);

		expect(isString).toBe(false);
	});
	it('should allow string with non-space chars', () => {
		var stringValue = 'realString';
		var isString = isRealString(stringValue);

		expect(isString).toBe(true);
	});
});