import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";

export const GeneratlInputSection = () => {
    const { control, handleSubmit, watch, formState: { errors } } = useForm();
    const [hasAntecedents, setAntecedents] = useState(false);
    const [hasMedication, setMedication] = useState(false);
    const [hasAllergies, setAllergies] = useState(false);

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
                                    <Switch id="hasAntecedents" {...field} onChange={(_, checked) => setAntecedents(checked)}></Switch>
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
                                    <Switch id="hasMedication" {...field} onChange={(_, checked) => setMedication(checked)}></Switch>
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
                                    <Switch id="hasAllergies" {...field} onChange={(_, checked) => setAllergies(checked)}></Switch>
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