import React, { FC, ReactNode, forwardRef } from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { ROUTESValues } from 'routes/paths';

interface IPageProps {
  [key: string]: unknown;
  title?: string;
  description?: string;
  children: ReactNode;
  canoncial?: ROUTESValues;
}

const Page: FC<IPageProps> = forwardRef(({ title, description, children, canoncial }, ref) => {
  return (
    <Box ref={ref}>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canoncial && <link rel="canonical" href={location.origin + canoncial} />}
      </Helmet>

      {children}
    </Box>
  );
});

export default Page;
