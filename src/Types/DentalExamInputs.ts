import { Pathology } from "./Pathology"

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
    EOEPathologies: Pathology[]

    radioPerformed: boolean
    radioDateTime: string
    radioType: string // TODO: change this to enum and choices in UI
    radioNumber: number
    radioErrors: string
    radioNormalCondyles: boolean
    radioCondyles: string
    radioNormalSinuses: boolean
    radioSinuses: string
    radioNormalBasalBones: boolean
    radioBasalBones: string
    radioNormalApicalLesions: boolean
    radioApicalLesions: string
    radioNormalPeriodontalBoneLoss: boolean
    radioPeriodontalBoneLoss: string
    radioNormalTeeth: boolean
    radioTeeth: string
    radioFinalInterpretations: string

    diagnosticImpressions: string

    treatmentOptimalPlan: string
    treatmentAlternativePlans: string
    treatmentDiscussions: string
    treatmentChosenPlan: string

    procedureDescription: string
    procedureReviewd: boolean
    procedureConsent: string // TODO: change this to enum 
    
}