import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import './app.css';

export default function AddComment({ addComment, addReply, state, inputRef }) {
  const classes = useStyles();

  const [comment, setComment] = useState("");

  function submitForm() {
    const nextCommentId = state.state.comments.length + 1;

    if (comment !== "") {
      if (inputRef.current.commentId) {
        addReply(Number(inputRef.current.commentId), Number(inputRef.current.ids) + 1, comment, state.dispatch);
        inputRef.current.commentId = undefined;
      } else {
        addComment(Number(nextCommentId), comment, state.dispatch);
      }
    }
    setComment("");
  }

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <img className="Image-klay-copie" src="/images/testi-ico.png" alt="userIcon" />
      </IconButton>
      <InputBase
        ref={inputRef}
        className={classes.input}
        placeholder="Add comments..."
        inputProps={{ 'aria-label': 'search google maps' }}
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
        multiline
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        onClick={submitForm}
      >
        <Icon>send</Icon>
      </IconButton>
    </Paper>
  )
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 560,
    marginLeft: theme.spacing(10),
    backgroundColor: "#f5f4f4",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));