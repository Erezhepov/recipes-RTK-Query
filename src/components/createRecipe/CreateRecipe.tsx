import React, {FormEvent, useState} from 'react';
import {api} from "../../api/api";

const CreateRecipe = () => {
    const defaultValue = {
        name: '',
        image: '',
        ration: ''
    }
    const [recipe, setRecipe] = useState(defaultValue)
    const [createRecipe, {isLoading, error}] = api.useCreateRecipeMutation()
    const addRecipe = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        recipe.name && createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })
    }
    return (
        <div className={'create-recipe-page'}>
            <div className="container">
                <div className={'create-recipe'}>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>Error</div>}
                    <h2>Add Recipe</h2>
                    <form onSubmit={addRecipe}>
                        <label htmlFor="">
                            <span>Name:</span>
                            <input onChange={(e) => setRecipe(prevState => ({...prevState, name: e.target.value}))} value={recipe.name} type="text"/>
                        </label>
                        <label htmlFor="">
                            <span>Link address: </span>
                            <input onChange={(e) => setRecipe(prevState => ({...prevState, image: e.target.value}))} value={recipe.image} type="text"/>
                        </label>
                        <button type={'submit'}>Add recipe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateRecipe;