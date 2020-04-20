import { getLogger } from 'domain/utils/logger';
import { store, Page, State } from 'domain/store';

const logger = getLogger('@reducers');

export function updateCurrentPage(currentPage: Page): State {
  logger.info(`Update current page ${currentPage}`);
  return store.swap(oldState => ({ ...oldState, currentPage }), '@update-current-page');
}

export function updateLoading(loading: boolean): State {
  logger.info(`Update current page ${loading}`);
  return store.swap(oldState => ({ ...oldState, loading }), '@update-loading');
}
