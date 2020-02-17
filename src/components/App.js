import React, { useRef, useContext, useState } from 'react';
import AddComment from './AddComment';
import './app.css'
import RenderComments from './RenderComments';
import { CommentsContext } from '../Store';
import { addReply, likeOnComment, likeOnReply, addComment } from "../actions/action";

export default function App() {
  const inputRef = useRef();

  const { state, dispatch } = useContext(CommentsContext);
  const [showAll, setShowAll] = useState(false);

  const props = {
    state: { state, dispatch },
    addReply,
    likeOnComment,
    likeOnReply,
    addComment
  };

  return (
    <div className="Calque-0">
      <div className="Rectangle-52">
        Connectez-vous&nbsp; <span> ou </span> &nbsp;inscrivez-vous &nbsp;<span> pour commenter. </span>
      </div>
      <div className="Rectangle-52-copie">
        <React.Suspense fallback={<div>Loading...</div>}>
          <CommentsContext.Consumer>
            {({ state }) => (
              state.comments.length !== 0 && state.comments.map((key, i) => {
                return (
                  <RenderComments comments={key} {...props} key={i} inputRef={inputRef} showAll={showAll} />
                )
              })
            )}
          </CommentsContext.Consumer>
        </React.Suspense>
        <a href="#" className="showmore" onClick={() => showAll ? setShowAll(false) : setShowAll(true)}>
          {showAll ? "Hide all comments..." : "Voir les " + state.comments.length + " commentaires"}
        </a>
      </div>
      <AddComment {...props} inputRef={inputRef} />
    </div>
  )
}