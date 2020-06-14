import React, { useContext, useState } from 'react';
import { html } from 'common-tags';
import styled from '@emotion/styled';
import CopyToClipboard from 'react-copy-to-clipboard';

import { Context } from './Context';

const renderTable = (tableItem: string) => {
  const context: any = useContext(Context);

  let arr = [];
  for (let i = 0; i < context.row; i++) {
    arr.push(i);
  }

  // prettier-ignore
  return html`
    <table>
      <tr>
        ${arr.map(a => `<td>${tableItem}</td>`)}
      </tr>
    </table>
  `;
};

const renderHtml: React.FCX = ({ className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const context: any = useContext(Context);
  return (
    <React.Fragment>
      <pre className={className}>{renderTable(context.text)}</pre>
      <CopyToClipboard text={renderTable(context.text)} onCopy={() => setIsCopied(true)}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      {isCopied ? <div>Copied!</div> : null}
    </React.Fragment>
  );
};

const StyledRenderHtml = styled(renderHtml)`
  padding: 16px;
  border: none;
  border-radius: 2px;
  background-color: #fff;
  height: 300px;
  font: inherit;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);

  /* os: dark mode or not */
  /* will storage dark mode or not to localStorage */
  @media (prefers-color-scheme: dark) {
    background-color: dimgray;
    color: #fff;
  }
`;

export default StyledRenderHtml;
