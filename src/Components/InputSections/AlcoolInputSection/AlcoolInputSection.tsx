import { Box, FormControlLabel, Radio, RadioGroup, Stack, Switch, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

export const AlcoolInputSection = (props: InputSectionProps) => {
    const control = props.control;
    const [isAlcool, setIsAlcool] = useState(control._defaultValues.isAlcoolUsage);
    const [drinkFrequency, setDrinkFrequency] = useState(control._defaultValues.alcoolUsageFrequency);

    return (
        <CollapsibleSection
            title="Alcool"
            content={
                <Stack direction={"column"} spacing={2}>
                    <Stack direction={"row"} spacing={1}>
                        <Typography fontWeight={"medium"} flex={1}>Alcool usage</Typography>
                        <Box flex={5}>
                            <Controller
                                control={control}
                                name="isAlcoolUsage"
                                render={({ field: { ref, ...field } }) => (
                                    <Switch id="isAlcoolUsage" checked={field.value} {...field} onChange={(e, checked) => { setIsAlcool(checked); field.onChange(e) }}></Switch>
                                )}
                            />
                        </Box>
                    </Stack>

                    <Box style={{ display: isAlcool ? '' : 'None' }}>
                        <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                            <Typography fontWeight={"medium"} flex={1}>Drinking frequency</Typography>
                            <Box flex={5}>
                                <Controller
                                    control={control}
                                    name="alcoolUsageFrequency"
                                    render={({ field: { ref, ...field } }) => (
                                        <RadioGroup row {...field} onChange={(e) => { setDrinkFrequency(e.target.value); field.onChange(e) }}>
                                            <FormControlLabel
                                                value="regular"
                                                control={<Radio />}
                                                label="Regular"
                                            />
                                            <FormControlLabel
                                                value="occasional"
                                                control={<Radio />}
                                                label="Occanional"
                                            />
                                        </RadioGroup>
                                    )}
                                />
                            </Box>
                        </Stack>

                        <Box style={{ display: drinkFrequency === "regular" ? '' : 'None' }}>
                            <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                <Typography fontWeight={"medium"} flex={1}>Drinks/day</Typography>
                                <Box flex={5}>
                                    <Controller
                                        control={control}
                                        name="alcoolDrinksPerDay"
                                        render={({ field: { ref, ...field } }) => (
                                            <TextField type="number" id="alcoolDrinksPerDay" {...field}></TextField>
                                        )}
                                    />
                                </Box>
                            </Stack>

                            <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                <Typography fontWeight={"medium"} flex={1}>Years</Typography>
                                <Box flex={5}>
                                    <Controller
                                        control={control}
                                        name="alcoolYears"
                                        render={({ field: { ref, ...field } }) => (
                                            <TextField type="number" id="alcoolYears" {...field}></TextField>
                                        )}
                                    />
                                </Box>
                            </Stack>
                        </Box>

                        <Box style={{ display: drinkFrequency === "occasional" ? '' : 'None' }}>
                            <Stack direction={"row"} spacing={1} justifyContent={"flex-start"}>
                                <Typography fontWeight={"medium"} flex={1}>Drinks/month</Typography>
                                <Box flex={5}>
                                    <Controller
                                        control={control}
                                        name="alcoolDrinksPerMonth"
                                        render={({ field: { ref, ...field } }) => (
                                            <TextField type="number" id="alcoolDrinksPerMonth" {...field}></TextField>
                                        )}
                                    />
                                </Box>
                            </Stack>
                        </Box>

                    </Box>
                </Stack>
            }
        />
    )
}