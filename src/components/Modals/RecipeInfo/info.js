import React from 'react'

import RecipeDetails from './RecipeDetails'
import RecipeEdit    from './RecipeEdit'
import ComponentOR   from '../../HOC/ComponentOR'

export default ComponentOR(RecipeDetails, RecipeEdit)
