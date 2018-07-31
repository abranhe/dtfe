import test from 'ava';
import dtfe from './';

test('Test if a file exsit', t => {
	t.is(dtfe('LICENSE'), true);
	t.is(dtfe('.travis.yml'), true);
	t.is(dtfe('.editorconfig'), true);
	t.not(dtfe('package.json'), false);
	t.not(dtfe('README.md'), false);
});
