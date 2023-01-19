import { Box, Fab, Stack, Switch, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { borderColor } from "@mui/system";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const EOEInputSection = (props: InputSectionProps) => {
    const control = props.control;
    const [isNormal, setIsNormal] = useState(control._defaultValues.EOEIsNormal);

    const [pathologies, setPathologies] = useState<Pathology[]>([{ location: "", shape: "", mobility: "", color: "", size: 0, effects: "" }]);

    // TODO: Include this in form: https://react-hook-form.com/api/usefieldarray 
    return (
        <CollapsibleSection
            title="Extra-Oral Exam"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Normal</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="EOEIsNormal"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="EOEIsNormal" defaultChecked={field.value} {...field} onChange={(_, checked) => setIsNormal(checked)}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Box style={{ display: isNormal ? 'None' : '' }}>
                        <Stack direction={"row"} spacing={3}>
                            {pathologies?.map((pathology, i) => {
                                return (
                                    <Box key={"pathology_" + i} sx={{border: 1}}>
                                        
                                    </Box>
                                )
                            })}
                        </Stack>

                        <Fab onClick={() => { console.log(pathologies); setPathologies(pathologies?.concat({ location: "", shape: "", mobility: "", color: "", size: 0, effects: "" })) }}>
                            <AddIcon></AddIcon>
                        </Fab>
                    </Box>

                </Stack>
            }
        />
    )
}

type Pathology = {
    location: string
    shape: string
    mobility: string
    color: string
    size: number
    effects: string
}