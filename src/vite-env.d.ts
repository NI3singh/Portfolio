/// <reference types="vite/client" />

// Existing SVG declaration
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

// Declarations for common image formats
declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.JPG' { // To explicitly cover the case you encountered
  const path: string;
  export default path;
}

declare module '*.jpeg' {
  const path: string;
  export default path;
}

declare module '*.JPEG' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.PNG' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.GIF' {
  const path: string;
  export default path;
}

declare module '*.webp' {
  const path: string;
  export default path;
}

declare module '*.WEBP' {
  const path: string;
  export default path;
}

// If you also import SVGs directly as URLs (not as React components)
declare module '*.svg' {
  const path: string;
  export default path;
}