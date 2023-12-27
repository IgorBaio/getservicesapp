import { UserModel } from "../User/types";

interface DataProps {
    professional: UserModel
}

export interface UseProfessionalProps extends DataProps {
    setProfessional: (professional: DataProps['professional']) => void;

}