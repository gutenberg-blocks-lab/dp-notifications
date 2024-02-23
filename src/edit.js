// Edit.js

import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  BlockControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import { getMessageContent } from './getMessageContent.js';
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
  const { messageType } = attributes;

  const updateMessageType = (type) => {
    setAttributes({ messageType: type });
  };


  const messageContent = getMessageContent(messageType);
  const blockProps = useBlockProps({
    className: messageContent.className,
  });


  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon={() => <InfoOutlinedIcon />}
            label={__("Info", "notifications")}
            onClick={() => updateMessageType("info")}
            isActive={messageType === "info"}
          />
          <ToolbarButton
            icon={() => <TipsAndUpdatesOutlinedIcon />}
            label={__("Tip", "notifications")}
            onClick={() => updateMessageType("tip")}
            isActive={messageType === "tip"}
          />
          <ToolbarButton
            icon={() => <WarningAmberOutlinedIcon />}
            label={__("Warning", "notifications")}
            onClick={() => updateMessageType("warning")}
            isActive={messageType === "warning"}
          />
          <ToolbarButton
            icon={() => <DangerousOutlinedIcon />}
            label={__("Deprecated", "notifications")}
            onClick={() => updateMessageType("deprecated")}
            isActive={messageType === "deprecated"}
          />
        </ToolbarGroup>
      </BlockControls>
      <div {...blockProps}>
		<div className="info-title">
			<messageContent.Icon />
			<h4>
				{messageContent.text}
			</h4>
		</div>
        <InnerBlocks />
      </div>
    </>
  );
}
