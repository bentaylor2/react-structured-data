import React from 'react';
import PropTypes from 'prop-types';
import styles from './CodeSnippet.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { googlecode } from 'react-syntax-highlighter/styles/hljs';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import { docco } from 'react-syntax-highlighter/styles/hljs';

const CodeSnippet = ({ codeString, language, style }) => {
  return (
    <SyntaxHighlighter
      language={ language }
      style={ style }>
      { codeString }
    </SyntaxHighlighter>
  );
}

CodeSnippet.defaultProps = {
  language: 'javascript',
  style: docco
}

CodeSnippet.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string,
  style: PropTypes.string
}

export default CodeSnippet;
