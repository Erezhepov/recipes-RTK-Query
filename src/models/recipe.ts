export interface IRecipe {
    id: number
    name: string
    image: string
    ration: string
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}

