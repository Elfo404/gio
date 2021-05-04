import { SerializedStyles, css } from '@emotion/react';
import { HTMLProps } from 'react';

import { useGrid } from './GridConfigProvider';
import { useStyles } from './hooks/useStyles';
import { Breakpoints, GridConfig } from '.';

type BreakpointsType = {
  [K in keyof Breakpoints]?: number | boolean;
};

type Props = HTMLProps<HTMLDivElement> & BreakpointsType;

const wrapper = (breakpoint: number, shouldWrap: boolean) => (
  style: SerializedStyles
) => {
  if (!shouldWrap) return style;

  return css`
    @media only screen and (min-width: ${breakpoint}em) {
      ${style}
    }
  `;
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
      const wrap = wrapper(breakpoint, i !== 0);
      const value = v[i];

      if ((i === 0 && value === undefined) || value === true) {
        return wrap(css`
          display: block;
          flex: 1 1;
          max-width: 100%;
        `);
      }

      if (typeof value === 'number') {
        return wrap(css`
          display: block;
          flex-basis: ${100 * value}%;
          max-width: ${100 * value}%;
        `);
      }

      if (value === false) {
        return wrap(css`
          display: none;
        `);
      }
    }),
];

// TODO: Add offset
export const Col = (props: Props) => {
  const gridConfig = useGrid();
  const breakpointsValues = Object.keys(gridConfig.breakpoints).map(
    (propName) => props[propName as keyof GridConfig['breakpoints']]
  );
  const otherProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !(key in gridConfig.breakpoints))
  );

  return (
    <div css={useStyles(stylesFactory, breakpointsValues)} {...otherProps} />
  );
};
