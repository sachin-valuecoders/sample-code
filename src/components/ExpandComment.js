import React, { useState } from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

export default function ExpandComment({ comments, likeOnComment, likeOnReply, state, inputRef, showAll }) {
  const classes = useStyles();
  const id = Number(comments.id);

  const [expanded, setExpanded] = useState(state.state.comments.length);
  const [displayEmoji, setDisplayEmoji] = useState(true);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function handleLikes() {
    likeOnReply ?
      likeOnReply(comments.commentId, comments.id, comments.likes + 1, state.dispatch) :
      likeOnComment(comments.id, comments.likes + 1, state.dispatch)

    setDisplayEmoji(!displayEmoji);
  }

  function handleReply() {
    let id = Number(comments.id)
    if (comments.commentId) {
      inputRef.current.ids = id + 1;
      inputRef.current.commentId = comments.commentId;
    } else {
      inputRef.current.ids = id * 10 + id;
      inputRef.current.commentId = id;
    }

    document.getElementsByClassName('MuiInputBase-input')[0].focus();
  }

  return (
    <div className={id.toString().length === 2 ? 'replies' : 'comments'}>
      <ExpansionPanel square expanded={showAll ? true : expanded === comments.id} onChange={handleChange(comments.id)}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header" className="border-none">
          <div className="userProfile">
            <img src="/images/user-icon.png" className="Image-curry" alt="user" />
            <p className="image-title"><span>Par Lamine</span> - il y a 10 minutes</p>
            <span className="heart-userlike">
              <img src="/images/objet-dynamique-vectoriel.png" alt="likes" />
              <p>
                {comments.likes}
              </p>
            </span>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{comments.comment}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={handleReply}
          >
            <img src="/images/repondre.png" alt="reply" />
            Répondre
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={() => setDisplayEmoji(!displayEmoji)}
          >
            <div className={displayEmoji ? "emojis-box active" : "emojis-box"}>
              <ul>
                <li onClick={handleLikes}>
                  <span role="img" aria-label="like">💙</span>
                </li>
                <li onClick={handleLikes}>
                  <span role="img" aria-label="laugh">😀</span>
                </li>
                <li onClick={handleLikes}>
                  <span role="img" aria-label="cry">😅</span>
                </li>
                <li onClick={handleLikes}>
                  <span role="img" aria-label="wow">😮</span>
                </li>
                <li onClick={handleLikes}>
                  <span role="img" aria-label="angry">😡</span>
                </li>
              </ul>
            </div>
            <img src="/images/like.png" alt="like" />
            J’aime
          </Fab>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div >
  );
}


const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#f5f4f4',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));