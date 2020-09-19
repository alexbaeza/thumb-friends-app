import React from 'react';
import {
  Badge, Button, Card, CardBody, Row,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL;

function AvatarCard(props) {
  const { thumbFriendId } = props;
  const editUrl = `/build/${thumbFriendId}`;
  return (
    <>
      <Card className="card-lift--hover shadow border-0">
        <Row>
          <Badge color="primary" pill className="mt-1">
            {`#${thumbFriendId}`}
          </Badge>
        </Row>
        <CardBody>
          <div className="thumb-friend-image">
            <a href={editUrl}>
              <img
                alt={`Thumb friend ${thumbFriendId}`}
                className="rounded-circle"
                src={`${LAMBDA_URL}/svg?id=${thumbFriendId}`}
              />
            </a>
          </div>
          <Button
            className="btn-block btn-lg thumb-friend-button"
            color="primary"
            onClick={() => props.history.push(editUrl)}
          >
            Edit
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default withRouter(AvatarCard);
