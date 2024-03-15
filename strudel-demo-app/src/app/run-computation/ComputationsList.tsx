import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { NewScenarioModal } from './NewScenarioModal';
import { useRunComputation } from './context/ContextProvider';

/**
 * List page for all compuation runs in the run-computation Task Flow.
 * Can open the `<NewScenarioModal>` from here and then proceed to the 
 * `<DataInputs>` component for the next step.
 */
export const ComputationsList: React.FC = () => {
  const { state, dispatch } = useRunComputation();
  const [modalOpen, setModalOpen] = useState(false);

  const handleNewScenario = () => {
    setModalOpen(true);
  };

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Container 
        maxWidth="xl"
        sx={{
          mt: 4
        }}
      >
        <Paper>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{
              padding: 2
            }}
          >
            <Box flex={1}>
              <Typography 
                variant="h6" 
                component="h1" 
              >
                Scenario List
              </Typography>
              <Typography 
                variant="subtitle1" 
                component="p" 
              >
                Scenarios represent a set of analysis inputs / parameters / settings and the results of that analysis. 
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={handleNewScenario}
            >
              New Scenario
            </Button>
            <NewScenarioModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </Stack>
          <DataGrid
            rows={state.list.table.data}
            getRowId={(row) => row[state.list.table.dataIdField]}
            columns={state.list.table.columns}
            disableColumnSelector
            disableRowSelectionOnClick
          />
        </Paper>  
      </Container>
    </Box>
  )
}