const { addRecipeInDB, getAllRecipes } = require('../repositories/RecipesRepository')
const Responses = require('../utils/responses')

const responsesUtil = new Responses()

module.exports = {
    async addRecipe(req, res) {
        try {
            const { description, value } = req.body
            if(!description || !value) {
                responsesUtil.setError(400, 'Complete todos os campos para cadastrar')
                responsesUtil.send(res)
            } else {
                const recipe = await addRecipeInDB({ description, value })
                responsesUtil.setSuccess(201, 'Receita criada com sucesso', recipe)
                responsesUtil.send(res)
            }
        } catch (error) {
            throw error
        }
    },

    async index(req, res) {
        const allRecipes = await getAllRecipes()
        return res.json(allRecipes)
    },
}