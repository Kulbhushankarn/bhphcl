import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {
  Container, Typography, Paper, Fab, Zoom, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Sample data for the data grid
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'storeName', headerName: 'Store Name', width: 150 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'division', headerName: 'Division', width: 250 },
  { field: 'incharge', headerName: 'Incharge', width: 150 }
];

const rows = [
  { id: 1, storeName: 'John', type: 'Doe', division: 'Muzaffarpur', incharge: 'Admin' },
  { id: 2, storeName: 'Jane', type: 'Smith', division: 'Darbhanga', incharge: 'User' },
  { id: 3, storeName: 'Alice', type: 'Johnson', division: 'Saharsa', incharge: 'Manager' },
  { id: 4, storeName: 'Bob', type: 'Brown', division: 'Saupaul', incharge: 'User' },
];

const AdminPage = () => {
  const [openFab, setOpenFab] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // Handle Fab click
  const handleFabClick = () => {
    setOpenFab(!openFab);
  };

  // Handle modal open and close
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="h6" gutterBottom>
          User Data
        </Typography>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
      </Paper>

      {/* Floating Action Button */}
      <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Fab color="primary" aria-label="add" onClick={handleFabClick}>
          <AddIcon />
        </Fab>

        {/* Zoom effect to show sub-actions */}
        <Zoom in={openFab} unmountOnExit>
          <div style={{ position: 'absolute', bottom: 80, right: 0 }}>
            <Button
              variant="contained"
              startIcon={<CreateIcon />}
              color="secondary"
              style={{ marginBottom: 10 }}
              onClick={handleOpenModal}
            >
              Create
            </Button>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              color="primary"
              onClick={() => alert('View button clicked!')}
            >
              View
            </Button>
          </div>
        </Zoom>
      </div>

      {/* Modal for Create Button */}
      <Dialog open={openModal} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create New Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the following details to create a new employee.
          </DialogContentText>
          {/* New Fields */}
          <TextField
            autoFocus
            margin="dense"
            id="empId"
            label="Employee ID"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="employeeName"
            label="Employee Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="employeeRank"
            label="Employee Rank"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="employeeType"
            label="Employee Type"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="storeAssign"
            label="Store Assign"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="userName"
            label="User Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseModal} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminPage;
