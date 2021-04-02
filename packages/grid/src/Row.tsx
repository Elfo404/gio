import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { useStyles } from './hooks/useStyles';
import { GridConfig } from './types';

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
  justify?: Props['justify'],
  align?: Props['align']
) => ({
  root: css`
    display: flex;
    flex-wrap: wrap;
    ${align &&
    css`
      align-items: ${align};
    `}
    ${justify &&
    css`
      justify-content: ${justify};
    `}
    margin-right: calc(${gridConfig.gutter} / 2 * -1);
    margin-left: calc(${gridConfig.gutter} / 2 * -1);

    & > * {
      padding-right: calc(${gridConfig.gutter} / 2);
      padding-left: calc(${gridConfig.gutter} / 2);
    }
  `,
});

export const Row = ({
  children,
  className,
  justify,
  align,
}: Props): JSX.Element => {
  const styles = useStyles(stylesFactory, justify, align);

  return (
    <div css={styles.root} className={className}>
      {children}
    </div>
  );
};
