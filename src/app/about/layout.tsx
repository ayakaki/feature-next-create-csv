import { PAGE_METAS } from '@/constants/meta';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: PAGE_METAS.ABOUT.TITLE,
  description: PAGE_METAS.ABOUT.DESCRIPTION,
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <>{children}</>;
};

export const runtime = 'edge';

export default RootLayout;
