interface DataProps {
  isLoading: boolean;
}

export interface UseLoadingProps extends DataProps {
  setIsLoading: (service: DataProps['isLoading']) => void;
}
