/**
Checks if given path to a file or folder exist.

@param path - the path to a file or object
@returns deindented string

@example
```
import path from 'path';
import dtfe from 'dtfe';

dtfe(path.join('readme.md'));
// => true
`
```
*/
declare function dtfe(path: string): boolean;

export = dtfe;