import { Box, Stack, TextField } from "@mui/material";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";
import { IOEHardTissues } from "./IOEHardTissues";
import { IOESoftTissues } from "./IOESoftTissues";

export const IOEInputSection = (props: InputSectionProps) => {
    return (
        <CollapsibleSection title="Intra-Oral Exam"
            content={
                <Stack direction="column" spacing={2}>
                    <IOESoftTissues control={props.control}/>
                    <IOEHardTissues control={props.control}/>
                </Stack>
            } />
    )
}