import { produce } from 'immer'

const recipe = {
  name: 'Spaghetti Bolognese',
  ingredients: ['egg', 'salt'],
}

const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, 'cream'],
}

console.log(added)

const replaced = {
  ...recipe,
  ingredients: recipe.ingredients.map(i => (i === 'egg' ? 'egg white' : i)),
}
console.log(replaced)

const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(i => i !== 'egg'),
}
console.log(removed)
