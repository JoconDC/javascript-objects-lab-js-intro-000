var recipe = new Object();

function updateRecipeWithStepAndMethod(object, key, value) {
return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
