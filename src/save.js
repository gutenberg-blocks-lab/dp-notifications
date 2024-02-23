// save.js

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getMessageContent } from './getMessageContent';

export default function save({ attributes }) {
    const { messageType } = attributes;
    const messageContent = getMessageContent(messageType);

    return (
        <div {...useBlockProps.save({ className: messageContent.className })}>
            <div className="info-title">
                <span dangerouslySetInnerHTML={{ __html: messageContent.svg }}></span>
                <h4>{messageContent.text}</h4>
            </div>
            <InnerBlocks.Content />
        </div>
    );
}