import { Box, TextField } from "@mui/material";
import { CollapsibleSection } from "../../CollapsibleSection/CollapsibleSection";

export const DiagnosticInputSection = () => (
    <CollapsibleSection title={<Box>This is a test</Box>} content={<Box><TextField label="test input text"></TextField></Box>}></CollapsibleSection>
)