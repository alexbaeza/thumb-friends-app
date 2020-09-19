import React from 'react';

import {
  Button, Col, Container, Row,
} from 'reactstrap';

import { withRouter } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import AvatarList from '../../components/AvatarList/AvatarList';
import PATHS from '../../utils/paths';
import Separator from '../../components/Separator/Separator';
import HeroBackground from '../../components/Hero/HeroBackground';
import { calculateTotalCombinations } from '../../utils/utils';
import { generateRandomAvatarIds } from '../../utils/id-utils';

const LAMBDA_URL = process.env.REACT_APP_LAMBDA_URL;

function Home(props) {
  return (
    <>
      <NavigationBar />
      <main>
        <div className="position-relative">
          <section className="section section-shaped pb-250">
            <HeroBackground />
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg={6}>
                    <h1 className="display-3 text-white">
                      Thumb Friends
                      {' '}
                      <span>Fun avatars for everyone</span>
                    </h1>
                    <p className="lead text-white">
                      Create your own thumb friend avatar by combining different
                      facial expressions, there are millions of combinations
                      possible.
                    </p>
                    <p className="lead text-white">
                      Free your creativity with a total of
                      <br />
                      {calculateTotalCombinations()
                        .toLocaleString()}
                      {' '}
                      possible combinations. 😲🙀🆒
                    </p>
                    <p className="text-muted text-white">
                      Project created for learning purposes.
                      <br />
                      Consider buying me a coffee!
                    </p>
                    <div className="btn-wrapper">
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="info"
                        onClick={() => props.history.push(PATHS.BUILD)}
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">
                          Create my thumb friend
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mb-3 mb-sm-0 ml-1"
                        color="default"
                        href="http://buymeacoff.ee/alexbaeza"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-coffee" />
                        </span>
                        <span className="btn-inner--text">Buy Coffee</span>
                      </Button>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="thumb-friend-image d-none d-lg-block">
                      <img
                        alt="Thumb friend main page"
                        className="rounded-circle"
                        src={`${LAMBDA_URL}/svg?id=${generateRandomAvatarIds(
                          1,
                        )}`}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            <Separator />
          </section>
        </div>
        <section className="mt--200">
          <Container>
            <AvatarList amount={18} />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default withRouter(Home);
