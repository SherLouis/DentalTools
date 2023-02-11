import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { TextField, Box } from '@mui/material';
import { DentalExamInputs } from '../../Types/DentalExamInputs';

export const GenerateNote = (props: DentalExamInputs) => {
  return (
    <div key={uuidv4()}>
      <TextField fullWidth multiline minRows={10} defaultValue={generateTextFromProps(props)}></TextField>
    </div>
  );
}

let generateTextFromProps = (examProps: DentalExamInputs) => {
  //TODO: generate note from exam props
  let atcd = examProps.hasAntecedents ? examProps.antecedents : 'nil';
  let meds = examProps.hasMedication ? examProps.medications : 'nil';
  let allergies = examProps.hasAllergies ? examProps.allergies : 'nil';
  // Tabacco
  let tabacco = examProps.tabaccoIsCurrent ? 'Yes: ' : examProps.tabaccoIsPast ? 'History: ' : 'No';
  if (examProps.tabaccoIsCurrent || examProps.tabaccoIsPast) {
    tabacco += `${examProps.tabbacoYears} years x ${examProps.tabbacoPackPerDay} = ${examProps.tabbacoYears*examProps.tabbacoPackPerDay} PCA`
  }
  // Alcool
  let roh = examProps.isAlcoolUsage ? examProps.alcoolUsageFrequency : 'No';
  if (examProps.isAlcoolUsage) {
    if (examProps.alcoolUsageFrequency == 'regular')
      roh += ` (${examProps.alcoolYears} years at ${examProps.alcoolDrinksPerDay} /day)`;
    else
      roh += ` (${examProps.alcoolDrinksPerMonth} /month)`;
  }
  // EOE
  let eoe = '';
  if (examProps.EOEIsNormal) {
    eoe += `- No lymphadenopathy palpated in the neck and submandibular region 
    - Within normal limits`;
  }
  else {
    examProps.EOEPathologies.forEach((pathology, idx) => {
      eoe += `
      ${idx+1}. 
        location: ${pathology.location}
        shape: ${pathology.shape}
        mobility: ${pathology.mobility}
        color: ${pathology.color}
        size: ${pathology.size_in_mm} mm
        effects on adjacent structures: ${pathology.effects}
      `;
    })
  }
  // IOE
  let ioeSoft = ''
  if (examProps.IOESoftIsNormal) {
    ioeSoft += `Soft tissues within normal limits.`;
  }
  else {
    examProps.IOESoftPathologies.forEach((pathology, idx) => {
      ioeSoft += `
      ${idx+1}. 
        location: ${pathology.location}
        shape: ${pathology.shape}
        mobility: ${pathology.mobility}
        color: ${pathology.color}
        size: ${pathology.size_in_mm} mm
        effects on adjacent structures: ${pathology.effects}
      `;
    })
  }
  let ioeHard = ''
  if (examProps.IOEHardIsNormal) {
    ioeSoft += `Hard tissues within normal limits.`;
  }
  else {
    examProps.IOEHardPathologies.forEach((pathology, idx) => {
      ioeHard += `
      ${idx+1}. 
        location: ${pathology.location}
        shape: ${pathology.shape}
        mobility: ${pathology.mobility}
        color: ${pathology.color}
        size: ${pathology.size_in_mm} mm
        effects on adjacent structures: ${pathology.effects}
      `;
    })
  }
  // Radiology
  let radiology = examProps.radioPerformed ? '' : 'Not performed';
  if (examProps.radioPerformed) {
    radiology += `
      Date: ${examProps.radioDateTime}
      Number: ${examProps.radioNumber}
      Type: ${examProps.radioType}
      Errors on the radiograph image: ${examProps.radioErrors}
      Bone and soft tissues examination: 
        Condyles: ${examProps.radioNormalCondyles ? 'Normal': examProps.radioCondyles}
        Sinuses: ${examProps.radioNormalSinuses ? 'Normal': examProps.radioSinuses}
        Basal bones: ${examProps.radioNormalBasalBones ? 'Normal': examProps.radioBasalBones}
        Apical lesions: ${examProps.radioNormalApicalLesions ? 'Normal': examProps.radioApicalLesions}
        Periodontal bone loss: ${examProps.radioNormalPeriodontalBoneLoss ? 'Normal': examProps.radioPeriodontalBoneLoss}
        teeth and dental hard tissues: ${examProps.radioNormalTeeth ? 'Normal': examProps.radioTeeth}
      Final interpretations: ${examProps.radioFinalInterpretations}
    `;
  }



  return `Patient presented for ${examProps.reasonOfVisit}

  ATCD: ${atcd}
  MEDS: ${meds}
  ALL: ${allergies}
  Tabacco: ${tabacco}
  ROH: ${roh}
  EOE: ${eoe}
  IOE:
    Soft tissues:
      ${ioeSoft}
    Hard tissues: 
      ${ioeHard}
  Radiological examination: ${radiology}
  Diagnostic impressions: 
    ${examProps.diagnosticImpressions}
  Treatment plan:
    Optimal plan: ${examProps.treatmentOptimalPlan}
    Alternative plans: ${examProps.treatmentAlternativePlans}
    Discussions (Patient's expectations, worries and objectives): ${examProps.treatmentDiscussions}
    Chosen plan: ${examProps.treatmentChosenPlan}
  Procedure:
    ${examProps.procedureDescription}
    Risks, limitations, possible complications, and alternative treatments reviewed: ${examProps.procedureReviewd ? 'Yes': 'No'}
    Consent for the described procedure: ${examProps.procedureConsent}
  `;
}
