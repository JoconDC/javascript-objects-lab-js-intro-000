var recipe = new Object();

function updateRecipeWithStepAndMethod(recipe, step4, bake) {
return Object.assign({}, recipe, {['step4']: 'bake'})
}
