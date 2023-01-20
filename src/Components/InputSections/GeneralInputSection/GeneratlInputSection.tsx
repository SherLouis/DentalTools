import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const GeneratlInputSection = (props:InputSectionProps) => {
    const control = props.control;
    const [hasAntecedents, setAntecedents] = useState(control._defaultValues.hasAntecedents);
    const [hasMedication, setMedication] = useState(control._defaultValues.hasMedication);
    const [hasAllergies, setAllergies] = useState(control._defaultValues.hasAllergies);
    
    return (
        <CollapsibleSection
            title="General"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Reason of visit</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="reasonOfVisit"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="reasonOfVisit" {...field} fullWidth></TextField>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Antecedents</Typography>
                        <Box flex={1}>
                            <Controller
                                control={control}
                                name="hasAntecedents"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="hasAntecedents" checked={field.value} {...field} onChange={(e, checked) => {setAntecedents(checked); field.onChange(e)}} ></Switch>
                                )}
                            />
                        </Box>
                        <Box flex={5}>
                            <div style={{ display: hasAntecedents ? '' : 'None' }}>
                                <Controller
                                    control={control}
                                    name="antecedents"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField id="antecedents" {...field} fullWidth></TextField>
                                    )}
                                />
                            </div>
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Medications</Typography>
                        <Box flex={1}>
                            <Controller
                                control={control}
                                name="hasMedication"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="hasMedication" {...field} checked={field.value} onChange={(e, checked) => {setMedication(checked); field.onChange(e)}}></Switch>
                                )}
                            />
                        </Box>
                        <Box flex={5}>
                            <div style={{ display: hasMedication ? '' : 'None' }}>
                                <Controller
                                    control={control}
                                    name="medications"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField id="medications" {...field} fullWidth></TextField>
                                    )}
                                />
                            </div>
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Allergies</Typography>
                        <Box flex={1}>
                            <Controller
                                control={control}
                                name="hasAllergies"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="hasAllergies" {...field} checked={field.value} onChange={(e, checked) => {setAllergies(checked); field.onChange(e)}}></Switch>
                                )}
                            />
                        </Box>
                        <Box flex={5}>
                            <div style={{ display: hasAllergies ? '' : 'None' }}>
                                <Controller
                                    control={control}
                                    name="allergies"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField id="allergies" {...field} fullWidth></TextField>
                                    )}
                                />
                            </div>
                        </Box>
                    </Stack>

                </Stack>
            }
        />
    )
}