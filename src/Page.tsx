import React from 'react';
import { useParams } from 'react-router-dom';

export const Page: React.FC = () => {
  const { id } = useParams() as any;
  return (
    <div>
      <p>Hello {id}</p>
      <p>Now reload this page to see if it works.</p>
    </div>
  );
};
