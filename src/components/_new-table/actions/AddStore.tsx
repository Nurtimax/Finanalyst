import React, { FC, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import AddStoreDialog from './AddStoreDialog';

const StyledAddStore = styled(Box)(() => ({
  justifySelf: 'flex-start'
}));

const AddStore: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledAddStore>
      <Button variant="contained" onClick={handleToggle}>
        Add new budget field
      </Button>
      <AddStoreDialog handleToggle={handleToggle} open={open} />
    </StyledAddStore>
  );
};

export default AddStore;
