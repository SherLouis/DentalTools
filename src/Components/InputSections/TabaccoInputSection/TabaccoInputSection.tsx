import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const TabaccoInputSection = (props: InputSectionProps) => {
    const control = props.control;
    const [isCurrent, setIsCurrent] = useState(control._defaultValues.tabaccoIsCurrent);
    const [isPast, setIsPast] = useState(control._defaultValues.tabaccoIsPast);
    const [years, setYears] = useState(control._defaultValues.tabbacoYears!);
    const [ppd, setPpd] = useState(control._defaultValues.tabbacoPackPerDay!);
    
    return (
        <CollapsibleSection
            title="Tabacco"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Current</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="tabaccoIsCurrent"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="tabaccoIsCurrent" defaultChecked={field.value} {...field} onChange={(e, checked) => {setIsCurrent(checked); field.onChange(e)}}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Past</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="tabaccoIsPast"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="tabaccoIsPast" defaultChecked={field.value} {...field} onChange={(e, checked) => {setIsPast(checked); field.onChange(e)}}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>


                    <Box style={{ display: isCurrent || isPast ? '' : 'None' }}>
                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Years</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="tabbacoYears"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField type="number" id="tabbacoYears" {...field} onChange={(e)=>{setYears(parseInt(e.target.value)); field.onChange(e)}}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Pack/day</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="tabbacoPackPerDay"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField type="number" id="tabbacoPackPerDay" {...field} onChange={(e)=>{setPpd(parseInt(e.target.value)); field.onChange(e)}}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>PCA</Typography>
                            <Box flex={5}>
                              <TextField type="number" id="tabbacoPackPerDay" disabled value={years*ppd}></TextField>
                            </Box>
                        </Stack>
                    </Box>

                </Stack>
            }
        />
    )
}