let share = require('../index')

console.log('\n')
console.log('NODE TEST')
console.log('It should expose the shared code as a\ndefault export in a node.js environment')
console.log('========================================')
console.log('\n')

if (share) {
    console.log('  Success!')
} else {
    console.error('  Failure!')
}

console.log('\n')