import React, { FC, useState } from 'react';
import { Box, Button, styled } from '@mui/material';
import DialogAction from './DialogAction';

interface IMainActionsProps {
  [key: string]: unknown;
}

const StyledMainActions = styled(Box)(() => ({}));

const MainActions: FC<IMainActionsProps> = () => {
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
