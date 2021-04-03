# @gio/grid

## A simple opinionated flex-based grid system

`@gio/grid` is a simple and opinionanted responsive grid system for react based on emotion and flexbox.

It's heavily inspired by [flexboxGrid](https://github.com/kristoferjoseph/flexboxgrid).
It doesn't try to solve every possible layout problem, but (hopefully) will solve most of the simple use cases.

## Install

```bash
npm i @gio/grid
```

or

```bash
yarn add @gio/grid
```

## Usage

```tsx
import { GridConfigProvider, Container, Row, Col } from '@gio/grid';

const gridConfig = {
  breakpoints: {
    xs: 30,
    sm: 48,
    md: 64,
    lg: 75,
  },
  gutter: '1.5rem',
  outerMargin: '1rem',
};

export const App = () => {
  return (
    <GridConfigProvider value={gridConfig}>
      <Container>
        <Row>
          <Col>I'm a column</Col>
          <Col>I'm also a column</Col>
        </Row>
      </Container>
    </GridConfigProvider>
  );
};
```

### With TypeScript

The `Col` component accepts every key defined in `breakpoints` as props.
In order to get the correct types, we leverage [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) to augment default types.

```ts
// grid.d.ts
import { Breakpoints } from '@gio/grid';

declare module `@gio/grid` {
  interface Breakpoints {
    xs: number;
    sm: number;
    // ...
  }
}
```

> **Note**: Be sure to include the file in your `include` section in `tsconfig.json`
