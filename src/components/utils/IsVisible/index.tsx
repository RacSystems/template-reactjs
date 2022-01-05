import React from 'react';

interface IComponentIsVisibleProps {
  when: boolean;
}

const ComponentIsVisible: React.FC<IComponentIsVisibleProps> = ({
  children,
  when,
}) => {
  return <>{when && children}</>;
};

export default ComponentIsVisible;
