import React, { Component } from 'react'

export default class AddRecipe extends Component {
    state = {
        name: '',
        ingredients: [''],
        directions: [''],
        picture: ''
    };


    handleSubmit = e => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // });
    }
    render() {
        return (
            <div style={{ margin: 'auto', textAlign: 'center' }}>
                <h3>Please fill out the following form to add a recipe</h3>
                <form>
                 Recipe Name: <input name="name" value={this.state.name} />
                 ingredients: <input name="ingredients" value={this.state.ingredients} />
                 directions: <input name="directions" value={this.state.directions} />
                 picture URL: <input name="picture" value={this.state.picture}  />
                    <button onSubmit={this.handleSubmit}>Add Recipe</button>
                </form>
            </div>
        )
    }
}