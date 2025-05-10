import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { Space_Grotesk } from 'next/font/google'
import { GithubIcon } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({
  weight: 'variable',
  subsets: ['latin'],
  preload: true
})

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <div style={spaceGrotesk.style}>~/zhaoworks</div>,
  },
  githubUrl: 'https://github.com/zhaoworks/opendocs',
  links: [
    {
      icon: <GithubIcon />,
      text: 'Repositórios no GitHub',
      url: 'https://github.com/zhaoworks'
    }
  ],
};
