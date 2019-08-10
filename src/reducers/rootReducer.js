const initState = {
    posts: [
        {id: '1',title: 'first',body: 'first article'},
        {id: '2',title: 'second',body: 'second article'},
        {id: '3',title: 'third',body: 'third article'},
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter((post)=>{
            return post.id !== action.id;
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;