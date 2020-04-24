var recipe = new Object();

function updateRecipeWithStepAndMethod(object, key, value) {
return Object.assign({}, object, {[key]: value})
}
