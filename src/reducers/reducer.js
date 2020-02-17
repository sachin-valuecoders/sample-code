export default function reducer(state, action) {
  let newComment = {};
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };

    case "ADD_REPLY":
      newComment = state.comments.map(comment => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            replies: [...comment.replies, action.payload]
          };
        }
        return comment;
      });
      return { comments: [...newComment] };

    case "LIKE_ON_COMMENT":
      newComment = state.comments.map(comment => {
        if (comment.id === action.payload.id) {
          return { ...comment, likes: action.payload.likes }
        }
        return comment;
      });
      return { comments: [...newComment] };

    case "LIKE_ON_REPLY":
      newComment = state.comments.map(comment => {
        let newReply = {};
        if (comment.id === action.payload.commentId) {
          newReply = comment.replies.map(reply => {
            if (reply.id === action.payload.id) {
              return { ...reply, likes: action.payload.likes }
            }
            return reply;
          });
          return { ...comment, replies: [...newReply] };
        }
        return comment;
      });
      return { comments: [...newComment] };

    default:
      return state;
  }
}