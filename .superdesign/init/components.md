# Components — Alex Carpenter Studio

All components are currently stubs (Phase 2). Full implementations happen in Phases 5–8.
Listed here for structure reference.

## UI Primitives (src/components/ui/)

### Button.tsx — stub
```tsx
export default function Button() {
  return <button>{/* TODO */}</button>;
}
```

### AnimatedSection.tsx — stub
Intended: scroll-triggered fade-in + slide-up wrapper using framer-motion

### VideoEmbed.tsx — stub
Intended: responsive iframe/video embed component

## Contact (src/components/contact/)

### ContactForm.tsx — stub
Intended: Name, Email, Message form with validation

## Lib

### src/lib/utils.ts
```ts
import { type ClassValue, clsx } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
```

### src/lib/projects.ts
```ts
export type ProjectCategory = "video" | "graphic-design" | "web-design";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  thumbnail: string;
  description: string;
  videoUrl?: string;
}

export const projects: Project[] = [];
```
