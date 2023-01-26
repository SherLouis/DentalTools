import { Accordion, AccordionDetails, AccordionSummary, Box, Fab, Stack, Switch, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { borderColor } from "@mui/system";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";
import React from "react";

export const EOEInputSection = (props: InputSectionProps) => {
    const control = props.control;
    const [isNormal, setIsNormal] = useState(control._defaultValues.EOEIsNormal);
    const [expandedId, setExpandedId] = React.useState<string | number>(0);

    //const [pathologies, setPathologies] = useState<Pathology[]>([{ location: "", shape: "", mobility: "", color: "", size: 0, effects: "" }]);
    const { fields, append, remove } = useFieldArray({
        name: "EOEPathologies",
        control
    });

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
                                    <Switch id="EOEIsNormal" checked={field.value} {...field} onChange={(e, checked) => { setIsNormal(checked); field.onChange(e) }}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Box style={{ display: isNormal ? 'None' : '' }}>
                        <Stack direction={"column"} spacing={3}>
                            {fields.map((field, index) => {
                                return (
                                    <Accordion
                                        expanded={expandedId === index || field.id === expandedId}
                                        onChange={(_, isExpanded: boolean) => setExpandedId(isExpanded ? field.id : -1)}
                                        key={field.id}>
                                        <AccordionSummary> {(index + 1) + '. ' + field.location}</AccordionSummary>
                                        <AccordionDetails>
                                            <Stack direction={"column"} spacing={2}>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Location</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.location` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`EOEPathologies.${index}.location`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Shape</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.shape` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`EOEPathologies.${index}.shape`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Mobility</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.mobility` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`EOEPathologies.${index}.mobility`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Color</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.color` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`EOEPathologies.${index}.color`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Size (mm)</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.size_in_mm` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField type={"number"} id={`EOEPathologies.${index}.size_in_mm`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Effects</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`EOEPathologies.${index}.effects` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`EOEPathologies.${index}.effects`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                            </Stack>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </Stack>

                        <Fab onClick={() => {
                            append({ location: "", shape: "", mobility: "", color: "", size_in_mm: 0, effects: "" });
                            setExpandedId(fields.length);
                        }}>
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