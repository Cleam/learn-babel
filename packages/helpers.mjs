import helpers from '@babel/helpers';
import t from '@babel/types';

const typeofHelper = helpers.get('typeof');
// console.log('typeofHelper>>', JSON.stringify(typeofHelper, null, 4));

// console.log('\n');

const ies = t.isExpressionStatement(typeofHelper);
console.log('ies>>', ies);
