interface ShowProps {
  when: boolean;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const Show = ({ when, fallback, children }: ShowProps) => {
  if (!when) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
