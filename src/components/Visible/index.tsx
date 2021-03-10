interface IComponentVisibleProps {
  when: boolean;
}

const ComponentVisible: React.FC<IComponentVisibleProps> = ({
  children,
  when,
}) => {
  return <>{when && children}</>;
};

export default ComponentVisible;
