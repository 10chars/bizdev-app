import page from 'page';
import { getLogger } from 'domain/utils/logger';
import * as reducers from 'domain/store/reducers';
const logger = getLogger('@middleware/router');

type Context = {
  params: {
    name?: string;
  };
};

// Handlers
const HOME_PAGE = (ctx: Context, next: any) => {
  logger.info('Home route');
  reducers.updateCurrentPage('HOME_PAGE');
  reducers.updateLoading(true);
  setTimeout(() => {
    reducers.updateLoading(false);
  }, 800);
};

// Routes
page('/', HOME_PAGE);

export default function startRouters(): void {
  page.start();
}
