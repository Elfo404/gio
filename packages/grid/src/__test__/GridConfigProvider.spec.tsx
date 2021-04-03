import { renderHook } from '@testing-library/react-hooks';

import { GridConfigProvider, useGrid } from '../GridConfigProvider';
import { GridConfig } from '..';

describe('useGrid', () => {
  it('Throws if not used within a GridConfigProvider', () => {
    const { result } = renderHook(() => useGrid());

    expect(result.error).toBeTruthy();
  });

  it('Throws if not used within a GridConfigProvider', () => {
    const gridConfig: GridConfig = {
      breakpoints: {
        xs: 10,
      },
      gutter: '1rem',
    };

    const { result } = renderHook(() => useGrid(), {
      // eslint-disable-next-line react/display-name
      wrapper: ({ children }) => (
        <GridConfigProvider value={gridConfig}>{children}</GridConfigProvider>
      ),
    });

    expect(result.current).toBe(gridConfig);
  });
});
