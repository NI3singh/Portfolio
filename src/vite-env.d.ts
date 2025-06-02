/// <reference types="vite/client" />
// In src/vite-env.d.ts (add this if the file already exists)
// or in a new file like src/svg.d.ts

declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}