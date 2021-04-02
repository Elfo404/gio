import { css } from '@emotion/react';
import { ComponentProps, ReactNode } from 'react';

import { Container } from './src';

export const Box = ({ children }: { children: ReactNode }): JSX.Element => (
  <div
    css={css`
      background-color: rgba(233, 233, 233, 0.1);
      padding: 0.5rem;
      border-radius: 4px;
    `}
  >
    {children}
  </div>
);

export const Template = ({
  fluid,
}: ComponentProps<typeof Container>): JSX.Element => {
  return (
    <Container fluid={fluid}>
      <Box>{fluid && 'Fluid '}Container</Box>
    </Container>
  );
};
