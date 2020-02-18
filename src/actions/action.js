/* 
this action is using for adding comments..
*/
export const addComment = (id, comment, dispatch) => {
  const dispatchObj = {
    type: "ADD_COMMENT",
    payload: {
      id: Number(id),
      comment,
      likes: 0,
      replies: []
    }
  }
  return dispatch(dispatchObj);
}
/* 
this action is using for reply..
*/
export const addReply = (commentId, replyId, comment, dispatch) => {
  const dispatchObj = {
    type: "ADD_REPLY",
    payload: {
      id: Number(replyId),
      commentId: Number(commentId),
      comment,
      likes: 0,
      replies: []
    }
  }
  return dispatch(dispatchObj);
}
/* 
this action is using for like to comment..
*/
export const likeOnComment = (id, likes, dispatch) => {
  const dispatchObj = {
    type: "LIKE_ON_COMMENT",
    payload: {
      id,
      likes
    }
  }
  return dispatch(dispatchObj);
}
/* 
this action is using for like to reply..
*/
export const likeOnReply = (commentId, replyId, likes, dispatch) => {
  const dispatchObj = {
    type: "LIKE_ON_REPLY",
    payload: {
      id: replyId,
      commentId,
      likes
    }
  }
  return dispatch(dispatchObj);
}