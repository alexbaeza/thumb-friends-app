import React from 'react';
import { Badge, Button, Card, CardBody, Row, } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AvatarCardSkeleton from './AvatarCardSkeleton';
import PATHS from '../../utils/paths';

const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL;

class AvatarCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      ready: false,
    };
  }

  handleImageLoaded = () => {
    this.setState({ ready: true });
  };

  render() {
    const { ready } = this.state;
    const { thumbFriendId, history } = this.props;
    const display = !ready ? { display: 'none' } : {};

    return (
      <>
        <Card className="card-lift--hover shadow border-0">
          <Row>
            <Badge color="primary" pill className="mt-1">
              {`#${thumbFriendId}`}
            </Badge>
          </Row>
          <CardBody>
            {!ready && <AvatarCardSkeleton/>}
            <div className="thumb-friend-image" style={display}>
              <div className="thumb-friend-image">
                <img
                  alt={`Thumb friend ${thumbFriendId}`}
                  className="rounded-circle"
                  onLoad={this.handleImageLoaded}
                  src={`${LAMBDA_URL}/svg?id=${thumbFriendId}`}
                />
              </div>
              <Button
                className="btn-block btn-lg thumb-friend-button"
                color="primary"
                onClick={() => history.push(PATHS.BUILD, { id: thumbFriendId })}
              >
                Edit
              </Button>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default withRouter(AvatarCard);
