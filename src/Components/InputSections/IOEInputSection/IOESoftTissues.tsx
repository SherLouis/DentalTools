import { Accordion, AccordionDetails, AccordionSummary, Box, Fab, Stack, Switch, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useFieldArray, Controller } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const IOESoftTissues = (props: InputSectionProps) => {
    const control = props.control;
    const [isNormal, setIsNormal] = useState(control._defaultValues.IOESoftIsNormal);
    const [expandedId, setExpandedId] = React.useState<string | number>(0);

    const { fields, append, remove } = useFieldArray({
        name: "IOESoftPathologies",
        control
    });
    return (
    <CollapsibleSection title="Soft tissues"
        content={
            <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Normal</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="IOESoftIsNormal"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="IOESoftIsNormal" checked={field.value} {...field} onChange={(e, checked) => { setIsNormal(checked); field.onChange(e) }}></Switch>
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
                                                            name={`IOESoftPathologies.${index}.location` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`IOESoftPathologies.${index}.location`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Shape</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`IOESoftPathologies.${index}.shape` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`IOESoftPathologies.${index}.shape`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Mobility</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`IOESoftPathologies.${index}.mobility` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`IOESoftPathologies.${index}.mobility`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Color</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`IOESoftPathologies.${index}.color` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`IOESoftPathologies.${index}.color`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Size (mm)</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`IOESoftPathologies.${index}.size_in_mm` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField type={"number"} id={`IOESoftPathologies.${index}.size_in_mm`} fullWidth {...fieldProps}></TextField>
                                                            )}
                                                        />
                                                    </Box>
                                                </Stack>
                                                <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                                    <Typography fontWeight={"medium"} flex={1}>Effects</Typography>
                                                    <Box flex={5}>
                                                        <Controller
                                                            control={control}
                                                            name={`IOESoftPathologies.${index}.effects` as const}
                                                            render={({ field: { ref, ...fieldProps } }) => (
                                                                <TextField id={`IOESoftPathologies.${index}.effects`} fullWidth {...fieldProps}></TextField>
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
);
    }