import { UserModel } from "../../stores/User/types"

export interface ProfessionalItemCardProps {
    user: UserModel
    id: number
    name: string
    description: string
    services: string[]
    country: string
    navigation: any
}

export interface SectionProps {
    heightPercentage?: string
}