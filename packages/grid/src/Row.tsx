import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { useStyles } from './hooks/useStyles';
import { GridConfig } from '.';

interface Props {
  children: ReactNode;
  className?: string;
  justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'start' | 'end';
}

const stylesFactory = (
  gridConfig: GridConfig,
  justify: Props['justify'] = 'start',
  align: Props['align'] = 'start'
) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: ${align};
  justify-content: ${justify};
  margin: 0 calc(${gridConfig.gutter} / 2 * -1);

  & > * {
    padding: 0 calc(${gridConfig.gutter} / 2);
  }
`;

export const Row = ({ justify, align, ...props }: Props): JSX.Element => {
  const styles = useStyles(stylesFactory, justify, align);

  return <div css={styles} {...props} />;
};
