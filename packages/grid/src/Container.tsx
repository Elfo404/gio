import { css } from '@emotion/react';
import { HTMLProps } from 'react';

import { useStyles } from './hooks/useStyles';
import { GridConfig } from '.';

interface Props extends HTMLProps<HTMLDivElement> {
  /**
   * If `true` the container will have `max-width: 100%`. <br/>
   * If `false`, `max-width` will match the current breakpoint.
   */
  fluid?: boolean;
}

const stylesFactory = (gridConfig: GridConfig, fluid: boolean) =>
  [
    css`
      margin: 0 auto;
      padding: 0 calc(${gridConfig.gutter} / 2);
    `,
  ].concat(
    fluid
      ? []
      : Object.values(gridConfig.breakpoints)
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
          )
  );

export const Container = ({ fluid = false, ...props }: Props) => (
  <div css={useStyles(stylesFactory, fluid)} {...props} />
);
