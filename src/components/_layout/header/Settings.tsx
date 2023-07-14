import React, { FC } from 'react';
import { Avatar, Box, IconButton, Menu, MenuItem, styled, Tooltip, Typography } from '@mui/material';
import { SETTINGS } from '../../../utils/constants/authentication';

interface ISettingsProps {
  [key: string]: unknown;
  handleCloseUserMenu: () => void;
  handleNavigateUserMenu: (path: string) => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
}

const StyledSettings = styled(Box)(() => ({
  flexGrow: 0,
}));

const Settings: FC<ISettingsProps> = ({
  handleCloseUserMenu,
  anchorElUser,
  handleOpenUserMenu,
  handleNavigateUserMenu,
}) => {
  return (
    <StyledSettings>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Nurtilek" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {SETTINGS.login.map((setting) => (
          <MenuItem key={setting.id} onClick={() => handleNavigateUserMenu(setting.path)}>
            <Typography textAlign="center">{setting.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </StyledSettings>
  );
};

export default Settings;
