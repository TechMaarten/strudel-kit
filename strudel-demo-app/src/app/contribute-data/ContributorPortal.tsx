import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { getDataFromSource } from '../../utils/api.utils';
import { basename } from '../App';

/**
 * Page to show a contributor's uploads in the contribute-data Task Flow.
 * Also allows users to start a new dataset which sends them to the `<NewDataset>` component.
 */
export const ContributorPortal: React.FC = () => {
  const [datasets, setDatasets] = useState<any[]>([]);

  /**
   * Fetch data for the list table when the page loads
   */
  useEffect(() => {
    if (datasets.length === 0) {
      const getData = async () => {
        const dataSource = 'default/contribute-data/contributor_datasets.json';
        const data = await getDataFromSource(dataSource, basename);
        setDatasets(data);
      }
      getData();
    }
  }, []);
  
  /**
   * Content to render on the page for this component
   */
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 4
      }}
    >
      <Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h1">
            Your Dataset Uploads
          </Typography>
          <Link component={RouterLink} to="/contribute-data/new">
            <Button variant="contained">
              New Dataset
            </Button>
          </Link>
        </Stack>
        <Paper>
          <DataGrid
            rows={datasets}
            getRowId={(row) => row.id}
            columns={columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>
      </Stack>
    </Container>
  );
}

/**
 * Define column definitions in-file for prototyping
 */
const columns: GridColDef[] = [
  { 
    field: 'title', 
    headerName: 'Dataset Title', 
    width: 200 
  },
  { 
    field: 'category', 
    headerName: 'Category', 
    width: 200 
  },
  { 
    field: 'summary', 
    headerName: 'Summary', 
    width: 200 
  },
  { 
    field: 'doi', 
    headerName: 'DOI', 
    width: 200 
  },
  { 
    field: 'publication_date', 
    headerName: 'Created Date', 
    width: 200 
  },
  { 
    field: 'status', 
    headerName: 'Status', 
    width: 200 
  },
  { 
    field: 'actions', 
    headerName: 'Actions', 
    type: 'actions',
    getActions: (params: GridRowParams) => [
      <GridActionsCellItem icon={<EditIcon/>} label="Edit" />,
      <GridActionsCellItem icon={<DeleteIcon/>} label="Delete" />
    ],
    flex: 1,
  },
];