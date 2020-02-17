import React, { Fragment } from 'react';
import ExpandComment from './ExpandComment';

export default function RenderComments(props) {
  return (
    <Fragment>
      <ExpandComment
        comments={props.comments}
        likeOnComment={props.likeOnComment}
        state={props.state}
        inputRef={props.inputRef}
        showAll={props.showAll}
      />
      {props.comments.replies.map((reply, i) => {
        return (
          <div className="child-reply" key={i}>
            <ExpandComment
              comments={reply}
              addReply={props.addReply}
              likeOnComment={props.likeOnComment}
              likeOnReply={props.likeOnReply}
              state={props.state}
              inputRef={props.inputRef}
              showAll={props.showAll}
            />
          </div>
        )
      })}
    </Fragment>
  )
}
