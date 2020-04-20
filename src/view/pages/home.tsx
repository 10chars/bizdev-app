import * as React from 'react';
import { State } from 'domain/store';
import { Loading } from 'view/components/loading';
import * as RandomImage from 'assets/image.svg';

export default function Home({ state }: Props): JSX.Element {
  return (
    <Loading loading={state.loading}>
      <div style={{ fontFamily: 'courier', textAlign: 'center' }}>
        <h1>{state.currentPage}!</h1>
        <img height="250" src={RandomImage} />
      </div>
    </Loading>
  );
}

type Props = {
  state: State;
};
