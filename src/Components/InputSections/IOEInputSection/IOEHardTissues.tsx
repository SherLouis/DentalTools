import { Box, TextField } from "@mui/material";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

// TODO: IOE Hard Tissues
export const IOEHardTissues = (props: InputSectionProps) => (
    <CollapsibleSection title="Teeth / Hard tissues"
        content={
            <Box>
                <TextField label="test input text"></TextField>
            </Box>
        }
    />
)