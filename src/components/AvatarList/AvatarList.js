import React from 'react';
import { Col, Row } from 'reactstrap';
import AvatarCard from './AvatarCard';
import { generateRandomAvatarIds } from '../../utils/id-utils';

function AvatarList(props) {
  const { amount } = props;

  const items = generateRandomAvatarIds(amount);
  return (
    <>
      <Col lg={12}>
        <Row className="grid">
          {items.map((thumbFriendId, x) => (
            <Col className="pb-4" key={`item-${x}`} lg={4} xs={6}>
              <AvatarCard thumbFriendId={thumbFriendId}/>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
}

export default AvatarList;
