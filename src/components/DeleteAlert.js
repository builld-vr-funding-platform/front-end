import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth';
import { fetchUserProjects } from '../actions/projectsActions';

const DeleteAlert = ({ projectName, projectId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`/crud/${projectId}`)
      .then(res => {
        console.dir(res);
        dispatch(fetchUserProjects());
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Button size="small" color="secondary" variant="outlined" onClick={handleOpen}>Delete</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-delete-project"
        aria-describedby="alert-confirm delete"
      >
        <DialogTitle id="alert-delete-project">{`Delete "${projectName}"?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteAlert;