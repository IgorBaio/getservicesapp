interface DataProps {
  screen: number;
}

export interface UseScreenProps extends DataProps {
  setScreen: (screen: DataProps['screen']) => void;
}
