var recipe = new Object();
  recipe.step1 = 'ingredients';
  recipe.step2 = 'marinade';
  recipe.step3 = 'grill';


function updateRecipeWithStepAndMethod (recipe, step4, bake) {
return Object.assign({}, recipe, {['step4']: 'bake'})
}
