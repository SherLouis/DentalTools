export type DentalExamInputs = {
    reasonOfVisit: string
    hasAntecedents: boolean
    antecedents: string
    hasMedication: boolean
    medications: string
    hasAllergies: boolean
    allergies: string

    tabaccoIsCurrent: boolean
    tabaccoIsPast: boolean
    tabbacoYears: number
    tabbacoPackPerDay: number

    isAlcoolUsage: boolean
    alcoolUsageFrequency: string // TODO: change this to enum
    alcoolDrinksPerDay: number
    alcoolYears: number
    alcoolDrinksPerMonth: number

    EOEIsNormal: boolean
    
}