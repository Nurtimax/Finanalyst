import React from 'react';
import { isCheckWindow } from 'utils/helpers/window';

const tg: any = isCheckWindow('Telegram')?.WebApp;

const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user
  };
};

export default useTelegram;
