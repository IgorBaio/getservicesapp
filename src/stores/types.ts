interface DataProps {
  routeName: string;
}

export interface UseCurrentRouteProps extends DataProps {
  setRouteName: (_: DataProps['routeName']) => void;
}
