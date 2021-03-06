import Items from '../content/items';
import Things from '../content/things';

import CheckSession from '../lib/session/Check';

export const SECTIONS_ROUTES = {
  ITEMS: {
    Component: Items,
    path: '/items',
    linkTo: () => '/items',
    nav: true,
    order: 3,
    label: 'Items',
  },
  THINGS: {
    Component: CheckSession(Things),
    path: '/things',
    linkTo: () => '/things',
    nav: true,
    order: 4,
    label: 'Things',
  },
};
