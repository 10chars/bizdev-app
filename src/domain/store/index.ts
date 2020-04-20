import { createAtom } from 'js-atom';
import atomDevTools from 'atom-rdt';
export type Page = 'HOME_PAGE';

export type State = {
  currentPage: Page;
  loading: boolean;
};

const defaultState: State = {
  currentPage: 'HOME_PAGE',
  loading: true,
};

type Store = {
  deref: () => State;
  swap: (fn: (oldState: State) => State, stateChangeType?: string) => State;
  addWatch: (id: string, watcher: () => any) => void;
};

export const store: Store = createAtom<State>(defaultState);

store.addWatch('@dev-tools', atomDevTools);

export function getState(): State {
  return store.deref();
}
