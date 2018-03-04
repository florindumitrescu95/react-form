import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
import Dropdown from "./Dropdown/Dropdown";
import UploadImage from "./UploadImage/UploadImage";

const styles = {
  title: {
    margin: "20px 0 0"
  },
  horizontalLineContainer: {
    backgroundColor: "hsla(0, 0%, 53.3%, .4)",
    height: 3,
    marginBottom: 10
  },
  horizontalLine: {
    backgroundColor: "#337ab7",
    height: 3,
    width: 150
  }
};
const WedgeSize = ["Regular", "Small"];
const PlateSize = ["30", "40", "50", "60"];
const wedges = {
  Regular: ["6", "7.5", "9", "10.5", "12", "13.5", "15"],
  Small: ["4.5", "6", "7.5", "9", "10.5", "12"]
};
const Breed = ["doggo", "shiba", "husky"];
const Temperments = ["agitat", "fumat", "melancolic"];
const Options = ["Browse", "Something"];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: "",
      age: "",
      weight: "",
      temperment: "",
      wedgeSize: WedgeSize[0],
      wedgeSizeValue: "",
      plateSize: "",
      preOpRadiograph: "",
      postOpRadiograph: "",
      followUpRadiograph: "",
      preOpPhoto: null,
      postOpPhoto: null,
      followUpPhoto: null,
      caseInfoNotes: ""
    };
  }
  handler = (value, state) => {
    let newState = this.state;
    newState[state] = value;

    this.setState({ newState });
  };

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h3 style={styles.title}>Registry2</h3>
            <hr />
            <a href="#">Home</a>
            <span>/ Registry</span>
            <hr />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h4>Case information *</h4>
            <div style={styles.horizontalLineContainer}>
              <div style={styles.horizontalLine} />
            </div>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h4>Breed *</h4>
                <Dropdown
                  callback={this.handler}
                  state={"breed"}
                  options={Breed}
                  value={this.state.breed}
                  fullWidth={true}
                />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <h4>Age(years) *</h4>
                <input
                  type="textarea"
                  onChange={event => this.handler(event.target.value, "age")}
                />
              </Col>
              <Col xs={6} md={6}>
                <h4>Weight(kg) *</h4>
                <input
                  type="textarea"
                  onChange={event => this.handler(event.target.value, "weight")}
                />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <h4>Temperment *</h4>
                <Dropdown
                  callback={this.handler}
                  state={"temperment"}
                  options={Temperments}
                  value={this.state.temperment}
                  fullWidth={true}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={6} md={6} lg={6}>
            <h4>Notes</h4>
            <input
              type="textarea"
              style={{
                width: "100%",
                height: 100
              }}
              onChange={event =>
                this.handler(event.target.value, "caseInfoNotes")
              }
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <h4>Implants *</h4>
            <div style={styles.horizontalLineContainer}>
              <div style={styles.horizontalLine} />
            </div>
          </Col>
          <Col xs={4} md={3}>
            <h4>Wedge size *</h4>
            <Dropdown
              callback={this.handler}
              state={"wedgeSize"}
              options={WedgeSize}
              value={this.state.wedgeSize}
              fullWidth={true}
            />
          </Col>

          <Col xs={4} md={3}>
            <h4>{this.state.wedgeSize} *</h4>
            <Dropdown
              callback={this.handler}
              state={"wedgeSizeValue"}
              options={this.state.wedgeSize ? wedges[this.state.wedgeSize] : []}
              value={this.state.wedgeSizeValue}
              fullWidth={true}
            />
          </Col>
          <Col xs={4} md={3}>
            <h4>Plate size *</h4>
            <Dropdown
              callback={this.handler}
              state={"plateSize"}
              options={PlateSize}
              value={this.state.plateSize}
              fullWidth={true}
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <h4>Radiographs *</h4>
            <div style={styles.horizontalLineContainer}>
              <div style={styles.horizontalLine} />
            </div>
          </Col>
          <Row>
            <Col xs={6} md={6}>
              <h4>Pre-op Radiograph *</h4>
              <Dropdown
                callback={this.handler}
                state={"preOpRadiograph"}
                options={Options}
                value={this.state.preOpRadiograph}
              />
            </Col>
            <Col xs={6} md={6}>
              {/*<UploadImage callback={this.handler} state={"postOpPhoto"} />*/}
            </Col>
          </Row>
        </Row>
      </Grid>
    );
  }
}
