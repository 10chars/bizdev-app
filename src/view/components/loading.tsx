import * as React from 'react';

type Props = {
  loading: boolean;
  children: React.ReactNode;
};

export function Loading({ loading, children }: Props): JSX.Element {
  return loading ? (
    <h3
      style={{
        textAlign: 'center',
        padding: '25% 0',
        fontFamily: 'courier',
        color: 'salmon',
      }}
    >
      Now loading ...
    </h3>
  ) : (
    <>{children}</>
  );
}

Loading.defaultProps = {
  loading: true,
  children: null,
};
