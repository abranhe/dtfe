import { expectType } from 'tsd';
import dtfe = require('.');

expectType<boolean>(dtfe('readme.md'));