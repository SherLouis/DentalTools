import { Box, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const RadioExamInputSection = (props: InputSectionProps) => {
    const control = props.control;
    const [radioPerformed, setRadioPerformed] = useState(control._defaultValues.radioPerformed);
    const [radioNormalCondyles, setRadioNormalCondyles] = useState(control._defaultValues.radioNormalCondyles);
    const [radioNormalSinuses, setRadioNormalSinuses] = useState(control._defaultValues.radioNormalSinuses);
    const [radioNormalBasalBones, setRadioNormalBasalBones] = useState(control._defaultValues.radioNormalBasalBones);
    const [radioNormalApicalLesions, setRadioNormalApicalLesions] = useState(control._defaultValues.radioNormalApicalLesions);
    const [radioNormalPeriodontalBoneLoss, setRadioNormalPeriodontalBoneLoss] = useState(control._defaultValues.radioNormalPeriodontalBoneLoss);
    const [radioNormalTeeth, setRadioNormalTeeth] = useState(control._defaultValues.radioNormalTeeth);

    return (
        <CollapsibleSection
            title="Radiological Examination"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Performed</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="radioPerformed"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="radioPerformed" checked={field.value} {...field} onChange={(e, checked) => { setRadioPerformed(checked); field.onChange(e) }}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Box style={{ display: radioPerformed ? '' : 'None' }}>
                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Date</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="tabbacoYears"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField type="datetime-local" id="radioDateTime" {...field}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Type</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="radioType"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField id="radioType" {...field}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Number</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="radioNumber"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField type="number" id="radioNumber" {...field}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Errors</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="radioErrors"
                                    render={({ field: { ref, ...field } }) => (
                                        <TextField id="radioErrors" {...field}></TextField>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <CollapsibleSection
                            title={<Typography fontWeight={"medium"} flex={1}>Bone and soft tissues examination</Typography>}
                            content={
                                <Stack direction={"column"} spacing={2}>
                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Condyles</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalCondyles"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalCondyles" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalCondyles(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalCondyles ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioCondyles"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioCondyles" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Sinuses</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalSinuses"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalSinuses" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalSinuses(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalSinuses ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioSinuses"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioSinuses" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Basal bones</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalBasalBones"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalBasalBones" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalBasalBones(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalBasalBones ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioBasalBones"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioBasalBones" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Apical lesions</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalApicalLesions"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalApicalLesions" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalApicalLesions(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalApicalLesions ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioApicalLesions"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioApicalLesions" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Periodontal bone loss</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalPeriodontalBoneLoss"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalPeriodontalBoneLoss" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalPeriodontalBoneLoss(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalPeriodontalBoneLoss ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioPeriodontalBoneLoss"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioPeriodontalBoneLoss" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"column"} spacing={1}>
                                        <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                            <Typography fontWeight={"medium"} flex={1}>Teeth and dental hard tissues</Typography>
                                            <Stack direction={"row"} flex={5} justifyContent="flex-start">
                                                <Typography>Normal</Typography>
                                                <Controller
                                                    control={control}
                                                    name="radioNormalTeeth"
                                                    render={({ field: { ref, ...field } }) => (
                                                        <Switch id="radioNormalTeeth" checked={field.value} {...field} onChange={(e, checked) => { setRadioNormalTeeth(checked); field.onChange(e) }}></Switch>
                                                    )}
                                                />
                                            </Stack>
                                        </Stack>
                                        <Box style={{ display: radioNormalTeeth ? 'None' : '', padding: 10 }}>
                                            <Stack direction={"row"}>
                                                <Typography fontWeight={"medium"} flex={1}>Description</Typography>
                                                <Box flex={5}>
                                                    <Controller
                                                        control={control}
                                                        name="radioTeeth"
                                                        render={({ field: { ref, ...field } }) => (
                                                            <TextField id="radioTeeth" {...field}></TextField>
                                                        )}
                                                    />
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Stack>

                                    <Stack direction={"row"} spacing={2} justifyContent="flex-start">
                                        <Typography fontWeight={"medium"} flex={1}>Final interpretations</Typography>
                                        <Box flex={5}>
                                            <Controller
                                                control={control}
                                                name="radioFinalInterpretations"
                                                render={({ field: { ref, ...field } }) => (
                                                    <TextField id="radioFinalInterpretations" fullWidth multiline {...field}></TextField>
                                                )}
                                            />
                                        </Box>
                                    </Stack>

                                </Stack>
                            }
                        />
                    </Box>

                </Stack>
            }
        />
    )
}