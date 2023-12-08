import { UserModel } from "../../stores/User/types"

export interface ProfessionalItemCardProps {
    uri: UserModel
    id: number
    name: string
    description: string
    services: string[]
    country: string
}

export interface SectionProps {
    heightPercentage?: string
}