import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { useStyles } from './hooks/useStyles';
import { GridConfig } from './types';

interface Props {
  children?: ReactNode;
  className?: string;
  /**
   * If `true` the container will have `max-width: 100%`. <br/>
   * If `false`, `max-width` will match the current breakpoint.
   */
  fluid?: boolean;
}

const stylesFactory = (gridConfig: GridConfig, fluid: boolean) =>
  [
    css`
      margin-right: auto;
      margin-left: auto;
      padding-right: calc(${gridConfig.gutter} / 2);
      padding-left: calc(${gridConfig.gutter} / 2);
    `,
    !fluid &&
      Object.values(gridConfig.breakpoints)
        // Just to ensure breakpoints are sorted from smallest to biggest
        .sort()
        .slice(1)
        .map(
          (breakpoint) => css`
            @media only screen and (min-width: ${breakpoint}em) {
              width: 100%;
              max-width: calc(${breakpoint}em - ${gridConfig.gutter});
            }
          `
        ),
  ].filter(Boolean);

export const Container = ({
  children,
  className,
  fluid = false,
}: Props): JSX.Element => {
  const style = useStyles(stylesFactory, fluid);

  return (
    <div css={style} className={className}>
      {children}
    </div>
  );
};
