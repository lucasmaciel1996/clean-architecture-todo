import React from 'react';

interface Props {
  name: string;
}
export const App: React.FC<Props> = ({ name }: Props) => {
  return <h1>Hello World!! {name}</h1>;
};
