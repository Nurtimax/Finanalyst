interface TWindow extends Window {
  Telegram: any;
}

export const isCheckWindow = <K extends keyof TWindow>(key: K): any => {
  return (window as unknown as TWindow)?.[key];
};
