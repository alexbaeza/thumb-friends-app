import React from "react";
import { Button, Modal } from "reactstrap";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import htmlbars from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("htmlbars", htmlbars);

const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL;

function ShareModal(props) {
  const { isOpen, callback, id } = props;
  const link = `${LAMBDA_URL}/svg?id=${id}`;
  const snippet = `<img src=${link} alt="Thumb friend"/>`;
  return (
    <>
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={isOpen}
        toggle={() => callback()}
      >
        <div className="modal-header">
          <h5 className="modal-title">Share</h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => callback()}
          >
            <span aria-hidden>×</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="container">
            <h5>Link:</h5>
            <SyntaxHighlighter className="rounded py-4" style={monokai}>
              {link}
            </SyntaxHighlighter>
          </div>
          <div className="container border-top">
            <h5>HTML:</h5>
            <SyntaxHighlighter className="rounded py-4" style={monokai}>
              {snippet}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            data-dismiss="modal"
            type="button"
            onClick={() => callback()}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default ShareModal;
