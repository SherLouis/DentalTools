import { Box, TextField } from "@mui/material";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";
import { InputSectionProps } from "../../ExamInputSections/ExamInputSections";

// TODO: IOE Soft Tissues
export const IOESoftTissues = (props: InputSectionProps) => (
    <CollapsibleSection title="Soft tissues"
        content={
            <Box>
                <TextField label="test input text"></TextField>
            </Box>
        }
    />
)