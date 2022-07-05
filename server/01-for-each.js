const letters = ['a', 'b', 'c'];

// for
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}
// for a
// for b
// for c

// for each
letters.forEach(item => console.log('forEach', item));
// forEach a
// forEach b
// forEach c