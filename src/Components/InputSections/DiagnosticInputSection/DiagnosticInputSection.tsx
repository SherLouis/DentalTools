import { Box, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const DiagnosticInputSection = (props: InputSectionProps) => {
    const control = props.control;
    return (
        <CollapsibleSection
            title="Diagnostic Impressions"
            content={
                <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                    <Typography fontWeight={"medium"} flex={1}>Impressions</Typography>
                    <Box flex={5}>
                        <Controller
                            control={control}
                            name="diagnosticImpressions"
                            render={({ field: { ref, ...field } }) => (
                                <TextField id="diagnosticImpressions" fullWidth multiline {...field}></TextField>
                            )}
                        />
                    </Box>
                </Stack>
            }
        />
    )
}