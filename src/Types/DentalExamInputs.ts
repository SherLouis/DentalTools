import { ConsentType } from "./Consent"
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
    alcoolUsageFrequency: string
    alcoolDrinksPerDay: number
    alcoolYears: number
    alcoolDrinksPerMonth: number

    EOEIsNormal: boolean
    EOEPathologies: Pathology[]
    
    IOESoftIsNormal: boolean
    IOESoftPathologies: Pathology[]
    IOEHardIsNormal: boolean
    IOEHardPathologies: Pathology[]

    radioPerformed: boolean
    radioDateTime: string
    radioType: string
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
    procedureConsent: ConsentType
}