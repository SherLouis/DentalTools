import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const TreatmentInputSection = (props: InputSectionProps) => {
    const control = props.control;

    return (
        <CollapsibleSection
            title="Treatment Plan"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={1}>Optimal Plan</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="treatmentOptimalPlan"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="treatmentOptimalPlan" fullWidth multiline {...field}></TextField>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={1}>Alternative Plans</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="treatmentAlternativePlans"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="treatmentAlternativePlans" fullWidth multiline {...field}></TextField>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={1}>Discussions</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="treatmentDiscussions"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="treatmentDiscussions" fullWidth multiline {...field}></TextField>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={1}>Chosen Plan</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="treatmentChosenPlan"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="treatmentChosenPlan" fullWidth multiline {...field}></TextField>
                                )}
                            />
                        </Box>
                    </Stack>
                </Stack>
            }
        />
    )
}