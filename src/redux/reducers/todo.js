const initialState = {
    todos: [
        {
            id:1,
            title:'поспать'
        },
        {
            id:2,
            title:'покушать'
        }
    ]
}

export default (state = initialState,action ) => {
    switch (action.type) {
        case "ADD": {
            return {
                ...state,
                todos: [...state.todos,{
                    title: action.title,
                    id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1}]
            }
        }
        case "DELETE":{
            return {
                ...state,
                todos:state.todos.filter((item) => {
                    return item.id !== action.id 
                })
            }
        }
        case 'IMPORTANT': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {
                            ...item, isImportant: !item.isImportant
                        }
                    }
                    return item
                }),
                
            }
        }
        case 'EDIT': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            title:action.title,
                            change: !item.change
                        }
                    }else{
                            return item
                        }
                })
            }
        }
        case 'EDIT2': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                        return {
                            ...item,
                            change: !item.change
                        }
                    }else{
                        return item
                    }
                })
            }
        }
        case 'CHECK': {
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if(item.id === action.id){
                    }else{
                        return item
                        
                    }
                    
                })
            }

        }
            
        default: return state
    }
}

export const addTodo = (title) => {
    return (dispatch) => {
        return dispatch({type: "ADD" , title})
    }
}
export const deleteTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: "DELETE" , id})
    }
}
export const importantTodo = (id) => {
    return (dispatch) => {
        return dispatch({type: "IMPORTANT" , id})
    }
}
export const editTask = (id,title,change) => {
    return (dispatch) => {
        if(change){
            return dispatch({type: 'EDIT', id, title})
        }else{
            return dispatch({type: "EDIT2", id})
        }
    }
}
export const checkTask = (title) => {
    return (dispatch) => {
        return dispatch ({type: 'CHECK', title})
    }
}