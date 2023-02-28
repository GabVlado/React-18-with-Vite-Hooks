export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload ]
        // {type: [todoremove] , payload: id}
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload)
        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } // Suponiendno que payload es el id

                return todo;
            })

            default:
            return initialState;
    }
}
