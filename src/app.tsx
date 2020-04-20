import * as React from 'react';
import { getState } from 'domain/store';
import Home from 'view/pages/home';

export function App() {
  const state = getState();
  const content = () => {
    switch(state.currentPage) {
      default:
      case 'HOME_PAGE':
        return <Home state={state} />
    }
  }
  return (
    <div>
      {content()}
    </div>
  );
}
