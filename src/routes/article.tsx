import { Outlet } from '@solidjs/router';

import { useStore } from '~/store';

export default () => {
  const [, { loadArticles }] = useStore();

  loadArticles({});

  return <Outlet />;
};
