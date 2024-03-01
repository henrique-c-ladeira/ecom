type WithBehaviourArgs<T> = {
  useBehaviour: () => T;
  Component: React.FC<T>;
};

export const withBehaviour =
  <Props,>({ useBehaviour, Component }: WithBehaviourArgs<Props>) =>
  () => {
    const hookProps = useBehaviour();

    return <Component {...(hookProps as JSX.IntrinsicAttributes & Props)} />;
  };
