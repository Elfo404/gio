import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  tall?: boolean;
}
export const Box = ({ tall, ...props }: Props): JSX.Element => (
  <div
    css={css`
      background-color: hsla(0, 0%, 91.37254901960785%, 0.1);
      padding: 0.5rem;
      border-radius: 4px;
      ${tall &&
      css`
        height: 150px;
      `}
    `}
    {...props}
  />
);
