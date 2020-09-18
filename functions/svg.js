import ReactDOMServer from 'react-dom/server';
import { idToProps } from '../src/utils/id-utils';
import Avatar from '../src/components/Avatar/Avatar';

const React = require('react');

exports.handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;
    const choices = idToProps(id);

    const avatarString = ReactDOMServer.renderToString(
      React.createElement(Avatar, { ...choices }),
    );
    return {
      statusCode: 200,
      body: avatarString,
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
