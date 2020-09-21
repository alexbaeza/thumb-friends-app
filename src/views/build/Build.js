import React from 'react';

import {
  Button, Card, Col, Container, Row,
} from 'reactstrap';
import { saveSvgAsPng } from 'save-svg-as-png';
import colours from '../../colours';
import Footer from '../../components/Footer/Footer';
import Avatar from '../../components/Avatar/Avatar';
import Separator from '../../components/Separator/Separator';
import HeroBackground from '../../components/Hero/HeroBackground';
import ColourPalette from '../../components/ColourPalette/ColourPalette';
import {
  accessoriesMap,
  beardMap,
  eyebrowsMap,
  eyesMap,
  hairMap,
  moustacheMap,
  mouthMap,
} from '../../components/Avatar/Maps';
import ShareModal from '../../components/ShareModal/ShareModal';
import { idToProps, propsToId } from '../../utils/id-utils';
import { selectRandomProperty } from '../../utils/property-utils';
import { selectRandomKey } from '../../utils/object-utils';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const settingMaps = {
  accessory: Object.fromEntries(accessoriesMap),
  hair: Object.fromEntries(hairMap),
  beard: Object.fromEntries(beardMap),
  eyebrows: Object.fromEntries(eyebrowsMap),
  eyes: Object.fromEntries(eyesMap),
  moustache: Object.fromEntries(moustacheMap),
  mouth: Object.fromEntries(mouthMap),
};

class Build extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: '',
      modal: false,
      hairColour: selectRandomProperty(colours.hair),
      facialHairColour: selectRandomProperty(colours.facialHair),
      skinTone: selectRandomProperty(colours.skin),
      lipColour: selectRandomProperty(colours.lipColours),
      eyeColour: selectRandomProperty(colours.eyes),
      hair: selectRandomKey(hairMap),
      accessory: selectRandomKey(accessoriesMap),
      beard: selectRandomKey(beardMap),
      eyebrows: selectRandomKey(eyebrowsMap),
      eyes: selectRandomKey(eyesMap),
      moustache: selectRandomKey(moustacheMap),
      mouth: selectRandomKey(mouthMap),
    };
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.id) {
      const choices = idToProps(this.props.location.state.id);
      this.updateState(choices);
    }
  }

  setAvatarId() {
    const id = propsToId(this.state);
    this.setState((prevState) => ({
      ...prevState,
      id,
    }));
  }

  toggleModal = () => {
    this.updateState({
      modal: !this.state.modal,
    });
  };

  randomize = () => {
    this.updateState({
      hairColour: selectRandomProperty(colours.hair),
      facialHairColour: selectRandomProperty(colours.facialHair),
      skinTone: selectRandomProperty(colours.skin),
      lipColour: selectRandomProperty(colours.lipColours),
      eyeColour: selectRandomProperty(colours.eyes),
      hair: selectRandomKey(hairMap),
      accessory: selectRandomKey(accessoriesMap),
      beard: selectRandomKey(beardMap),
      eyebrows: selectRandomKey(eyebrowsMap),
      eyes: selectRandomKey(eyesMap),
      moustache: selectRandomKey(moustacheMap),
      mouth: selectRandomKey(mouthMap),
    });
  };

  download = () => {
    saveSvgAsPng(document.getElementById('avatar'), 'my-thumb-friend.png');
  };

  updateProp = (event) => {
    this.updateState({
      [event.target.name]: event.target.value,
    });
  };

  updateColour = (id, value) => {
    this.updateState({
      [id]: value,
    });
  };

  /**
   * Helps calling callback everytime a new state is set
   * @param newState the object containing the new state
   */
  updateState(newState) {
    this.setState(newState, () => {
      this.setAvatarId();
    });
  }

  render() {
    const {
      id,
      modal,
      skinTone,
      hairColour,
      facialHairColour,
      lipColour,
      eyeColour,
      hair,
      accessory,
      beard,
      eyebrows,
      eyes,
      moustache,
      mouth,
    } = this.state;

    return (
      <>
        <NavigationBar />
        <main className="build-page">
          <section className="section-build-page-cover section-shaped my-0">
            <HeroBackground />
            <Separator />
          </section>
          <section className="section section-lg pt-lg-0 mt--300">
            <Container>
              <ShareModal isOpen={modal} callback={this.toggleModal} id={id} />
              <Card className="shadow">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col />
                    <Col lg={6} className="mt--200">
                      <Avatar
                        skinTone={skinTone}
                        hairColour={hairColour}
                        facialHairColour={facialHairColour}
                        lipColour={lipColour}
                        eyeColour={eyeColour}
                        hair={hair}
                        beard={beard}
                        accessory={accessory}
                        eyebrows={eyebrows}
                        eyes={eyes}
                        moustache={moustache}
                        mouth={mouth}
                      />
                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <Button
                            className="btn-icon btn-block btn-lg mt-3"
                            color="primary"
                            onClick={this.randomize}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-random" />
                            </span>
                            <span className="btn-inner--text">Randomize</span>
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            className="btn-icon btn-block btn-lg mt-3"
                            color="default"
                            onClick={this.download}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-picture-o" />
                            </span>
                            <span className="btn-inner--text">Image</span>
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button
                            className="btn-icon btn-block btn-lg mt-3"
                            color="default"
                            onClick={() => this.toggleModal()}
                          >
                            <span className="btn-inner--icon mr-1">
                              <i className="fa fa-share-alt" />
                            </span>
                            <span className="btn-inner--text">Share</span>
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="border-top mt-5">
                    <Row>
                      <Col md={6} className="order-0 pr-5">
                        {Object.entries(settingMaps)
                          .map(([key, map]) => (
                            <Row>
                              <h5 className="text-capitalize">{key}</h5>
                              <select
                                id={key}
                                name={key}
                                defaultValue={this.state[key]}
                                onChange={this.updateProp}
                                className="form-control bg-white rounded border px-4 py-2"
                              >
                                {Object.keys(map)
                                  .map((value) => (
                                    <option
                                      className="text-capitalize"
                                      key={value}
                                      value={value}
                                    >
                                      {value}
                                    </option>
                                  ))}
                              </select>
                            </Row>
                          ))}
                      </Col>
                      <Col md={6} className="order-1">
                        <ColourPalette
                          id="skinTone"
                          name="Skin colour"
                          palette={colours.skin}
                          callback={this.updateColour}
                          selected={skinTone}
                        />
                        <ColourPalette
                          id="hairColour"
                          name="Hair colour"
                          palette={colours.hair}
                          callback={this.updateColour}
                          selected={hairColour}
                        />
                        <ColourPalette
                          id="facialHairColour"
                          name="Facial hair colour"
                          palette={colours.facialHair}
                          callback={this.updateColour}
                          selected={facialHairColour}
                        />
                        <ColourPalette
                          id="eyeColour"
                          name="Eyes colour"
                          palette={colours.eyes}
                          callback={this.updateColour}
                          selected={eyeColour}
                        />
                        <ColourPalette
                          id="lipColour"
                          name="Lips colour"
                          palette={colours.lipColours}
                          callback={this.updateColour}
                          selected={lipColour}
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Build;
