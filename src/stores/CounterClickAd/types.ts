interface DataProps {
  clicks: number;
}

export interface CounterClickAdProps extends DataProps {
  setClicks: (service: DataProps['clicks']) => void;
}
