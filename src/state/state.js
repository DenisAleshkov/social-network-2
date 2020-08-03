const state = {
    messagesPage: {
        dialogData : [
            {id: 'andrey', name: 'Andrey'},
            {id: 'vanya', name: 'Vanya'},
            {id: 'petya', name: 'Petya'},
        ],
         messageData : [
            {message: 'Hi'},
            {message: 'Hi, How are you?'},
            {message: 'What you do?'}
        ]
    },
    profilePage : {
        posts:[
            {message: 'hi', likesCount: 0},
            {message: '1st post', likesCount: 10},
            {message: 'It`s good', likesCount: 20}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        message : postMessage
    };
    state.profilePage.posts.push(newPost);
}
export default state;