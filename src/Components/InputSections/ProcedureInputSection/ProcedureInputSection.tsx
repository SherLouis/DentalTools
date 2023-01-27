import { Box, FormControlLabel, Radio, RadioGroup, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { ConsentType } from "../../../Types/Consent";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const ProcedureInputSection = (props: InputSectionProps) => {
    const control = props.control;

    return (
        <CollapsibleSection
            title="Procedure"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="procedureDescription"
                                render={({ field: { ref, ...field } }) => (
                                    <TextField id="procedureDescription" fullWidth multiline {...field}></TextField>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={5}>Risks, limitations, possible complication, and alternative treatments reviewed</Typography>
                        <Box flex={1}>
                            <Controller
                                control={control}
                                name="procedureReviewd"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch checked={field.value} id="procedureReviewd" {...field}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                        <Typography fontWeight={"medium"} flex={5}>Consent for the described procedure</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="procedureConsent"
                                render={({ field: { ref, ...field } }) => (
                                    <RadioGroup row {...field}>
                                        {Object.values(ConsentType).map((val) =>
                                            <FormControlLabel
                                                value={val}
                                                control={<Radio />}
                                                label={val}
                                            />)}
                                    </RadioGroup>
                                )}
                            />
                        </Box>
                    </Stack>
                </Stack>
            }
        />
    )
}