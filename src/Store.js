import React from 'react';
import reducer from './reducers/reducer'

export const initialComments = {
  comments: [{
    id: 1,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenasaccumsan lacus vel facilisis. ",
    likes: 12,
    replies: [{
      id: 11,
      commentId: 1,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas an lacus vel facilisis. ",
      likes: 4,
      replies: []
    }],
  }],
};

export const CommentsContext = React.createContext("");

export function CommentsProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialComments);
  const value = { state, dispatch };

  return <CommentsContext.Provider value={value}>{props.children}</CommentsContext.Provider>
}

