import React from 'react';
import { Col, Row } from 'reactstrap';

function ColourPalette(props) {
  const { id, name, palette, callback, selected } = props;

  return (
    <>
      <Row className="">
        <h5>{name}</h5>
        <ul className="list-palette">
          <Row className="p-2">
            {Object.entries(palette)
              .map(([key, map]) => (
                <Col className="pl-1 pr-0">
                  {/* eslint-disable-next-line max-len */}
                  {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                  <li
                    key={key}
                    className={
                      selected === key ? 'palette palette_active' : 'palette'
                    }
                    onClick={() => callback(id, key)}
                  >
                    <div className="palette-color">
                      <div
                        className="palette-color_square"
                        style={{ backgroundColor: map.base }}
                      />
                      <div
                        className="palette-color_square"
                        style={{ backgroundColor: map.shadow }}
                      />
                    </div>
                    <div className="palette-color_content">
                      <h6 className="palette-color_name">{key}</h6>
                      <div className="palette-color_code">{map.base}</div>
                      <div className="palette-color_code">{map.shadow}</div>
                    </div>
                  </li>
                </Col>
              ))}
          </Row>
        </ul>
      </Row>
    </>
  );
}

export default ColourPalette;
