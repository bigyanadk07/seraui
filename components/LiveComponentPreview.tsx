'use client';

import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
// @ts-ignore
import dracula from 'prism-react-renderer/themes/dracula';

interface LiveComponentPreviewProps {
  code: string;
  scope?: Record<string, unknown>;
}

const LiveComponentPreview: React.FC<LiveComponentPreviewProps> = ({
  code,
  scope = {}
}) => {
  return (
    <div className="border rounded-lg p-4 mb-8 bg-gray-900 text-white">
      <LiveProvider code={code} scope={scope} theme={dracula} noInline={true}>
        <div className="mb-4 p-4 border border-gray-700 rounded bg-gray-800">
          <LivePreview />
        </div>
        <LiveEditor className="rounded bg-gray-800" />
        <LiveError className="mt-2 text-red-500 text-sm" />
      </LiveProvider>
    </div>
  );
};

export default LiveComponentPreview;
