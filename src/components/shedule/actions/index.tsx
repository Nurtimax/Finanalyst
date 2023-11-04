import React, { FC, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import DialogAction from './DialogAction';

const StyledMainActions = styled(Box)(() => ({
  display: 'flex'
}));

const MainActions: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <StyledMainActions>
      <Button variant="outlined" onClick={handleToggle}>
        Add Times
      </Button>
      <DialogAction open={open} handleToggle={handleToggle} />
    </StyledMainActions>
  );
};

export default MainActions;
