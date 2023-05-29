import { isString } from './typeGuards';
import { SITE_TITLE } from '@/constants/meta';

export const getPageTitle = (title?: string): string => {
  if (isString(title)) {
    return `${title} - ${SITE_TITLE}`;
  }
  return SITE_TITLE;
};
