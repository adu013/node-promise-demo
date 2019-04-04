// This demonstate how to use promises to make a sea-breeze cocktail of 3 recipe

const vodka = Promise.resolve('Put 45 ml vodka');
const craneberry = Promise.resolve('Put 60 ml craneberry juice');
const grapefruit = Promise.resolve('Put 30 ml grapefruit juice');
const shake = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Shake, Cocktail Sea Breeze is ready')
})

Promise.all([vodka, craneberry, grapefruit, shake]).then(values => console.log(values));
