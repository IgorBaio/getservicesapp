interface DataProps {
  nationality: boolean;
  service: string;
}

export interface UseFiltersProps extends DataProps {
  setService: (service: DataProps['service']) => void;
  setNationality: (nationality: DataProps['nationality']) => void;
}
