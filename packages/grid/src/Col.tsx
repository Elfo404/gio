import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { useGrid } from './GridConfigProvider';
import { useStyles } from './hooks/useStyles';
import { Breakpoints, GridConfig } from './types';

type BreakpointsType = {
  [K in keyof Breakpoints]?: number | boolean;
};

type Props = PropsWithChildren<BreakpointsType> & {
  className?: string;
};

const stylesFactory = (
  gridConfig: GridConfig,
  v: Array<number | boolean | undefined>
) => [
  css`
    flex: 0 0 auto;
    margin-top: calc(${gridConfig.gutter} / 2);
  `,
  ...Object.values(gridConfig.breakpoints)
    // Just to ensure breakpoints are sorted from smallest to biggest
    .sort()
    .map((breakpoint, i) => {
      // TODO: This can for sure be done WAAAAY better
      // Don't wrap the first breakpoint in media query

      if (i === 0) {
        // For the first breakpoint, we treat `xs === undefined` as `xs = true`
        if (v[i] === undefined || v[i] === true) {
          return css`
            display: block;
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
          `;
        }
        if (v[i] === false) {
          return css`
            display: none;
          `;
        }
        return css`
          display: block;
          flex-basis: ${100 * (v[i] as number)}%;
          max-width: ${100 * (v[i] as number)}%;
        `;
      }

      if (v[i] === true) {
        return css`
          @media only screen and (min-width: ${breakpoint}em) {
            display: block;
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
          }
        `;
      }
      if (v[i] === false) {
        return css`
          @media only screen and (min-width: ${breakpoint}em) {
            display: none;
          }
        `;
      }
      if (typeof v[i] === 'number') {
        return css`
          @media only screen and (min-width: ${breakpoint}em) {
            display: block;
            flex-basis: ${100 * (v[i] as number)}%;
            max-width: ${100 * (v[i] as number)}%;
          }
        `;
      }
    }),
];

// TODO: Add offset
export const Col = ({
  children,
  className,
  ...otherProps
}: Props): JSX.Element => {
  const gridConfig = useGrid();
  const breakpointsValues = Object.keys(gridConfig.breakpoints).map(
    (propName) => otherProps[propName as keyof GridConfig['breakpoints']]
  );

  const styles = useStyles(stylesFactory, breakpointsValues);

  return (
    <div css={styles} className={className}>
      {children}
    </div>
  );
};
