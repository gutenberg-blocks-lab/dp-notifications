// getMessageContent.js

import { __ } from '@wordpress/i18n';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';


const infoSvg = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InfoOutlinedIcon"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path></svg>`;
const tipSvg = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="TipsAndUpdatesOutlinedIcon"><path d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2m-2-1h8v-2H5zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5m-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5m6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94z"></path></svg>`; 
const warningSvg = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="WarningAmberOutlinedIcon"><path d="M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z"></path></svg>`; 
const deprecatedSvg = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-dhaba5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ReportGmailerrorredOutlinedIcon"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM19 14.9 14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1z"></path><circle cx="12" cy="16" r="1"></circle><path d="M11 7h2v7h-2z"></path></svg>`; 

export const getMessageContent = (type) => {
    switch (type) {
        case "info":
            return {
                text: __("Info", "notifications"),
                className: "info",
                Icon: InfoOutlinedIcon, // Now correctly imported
                svg: infoSvg,
            };
        case "tip":
            return {
                text: __("Tip", "notifications"),
                className: "tip",
                Icon: TipsAndUpdatesOutlinedIcon, // Now correctly imported
                svg: tipSvg,
            };
        case "warning":
            return {
                text: __("Warning", "notifications"),
                className: "warning",
                Icon: WarningAmberOutlinedIcon, // Now correctly imported
                svg: warningSvg,
            };
        case "deprecated":
            return {
                text: __("Deprecated", "notifications"),
                className: "deprecated",
                Icon: DangerousOutlinedIcon, // Now correctly imported
                svg: deprecatedSvg,
            };
        default:
            return {
                text: __("Info", "notifications"),
                className: "",
                Icon: InfoOutlinedIcon, // Now correctly imported
                svg: tipSvg,
            };
    }
};
