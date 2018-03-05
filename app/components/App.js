import React, { Component } from "react";
import { Row, Grid, Col, Button, Image } from "react-bootstrap";
import Dropdown from "./Dropdown/Dropdown";
// import UploadImage from "./UploadImage/UploadImage";
import Checkbox from 'material-ui/Checkbox';
import './App.css';

const styles = {
  title: {
    margin: "20px 0 0"
  },
  horizontalLineContainer: {
    backgroundColor: "#e4e4e4",
    height: 3,
    marginBottom: 25
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
const Radiographs = [
  { state: "preOpComment", image: "preOpPhoto", name: "Pre-op" },
  {
    state: "postOpComment",
    image: "postOpPhoto",
    name: "Post-op"
  },
  {
    state: "followUpComment",
    image: "followUpPhoto",
    name: "Follow-up"
  }
];

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
      preOpComment: "",
      preOpPhoto: null,
      preOpPhotoUrl: '',
      postOpComment: "",
      postOpPhoto: null,
      postOpPhotoUrl: '',
      followUpComment: "",
      followUpPhoto: null,
      followUpPhotoUrl: '',
      caseInfoNotes: "",
      receiveFeedback: '',
      termsAndConditions: '',
      reviewerFeedback: "",
      operationRating: "",
    };
  }
  handler = (value, state) => {
    let newState = this.state;
    newState[state] = value;

    this.setState({ newState });
  };

  handleCheckbox = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleUploadImage = (event, name) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];
    let newState = this.state;
    console.log(newState);

    reader.onloadend = () => {
      newState[name] = file;
      newState[`${name}Url`] = reader.result;
      this.setState({ newState });
    };

      reader.readAsDataURL(file);
  };

  render() {
    return (
      <Grid bsClass={'container pageContainer'}>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <h3 style={styles.title}>Registry</h3>
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
            <Row className="show-grid formContainer">
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
            <Row className="show-grid formContainer">
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
            <Row className="show-grid formContainer">
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
                height: 187
              }}
              onChange={event =>
                this.handler(event.target.value, "caseInfoNotes")
              }
            />
          </Col>
        </Row>

        <Row className={'show-grid sectionTitle'}>
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

        <Row className={'show-grid formContainer'}>
          <Col xs={12} md={12}>
            <h4>Radiographs *</h4>
            <div style={styles.horizontalLineContainer}>
              <div style={styles.horizontalLine} />
            </div>
          </Col>
          {Radiographs.map(value => (
            <Row className={'show-grid photosArea'}>
              <Col xs={6} md={6}>
                <h4 className={'photosAreaTitle'}>{value.name} Radiograph *</h4>
                <label for={`input${value.name}`} className={'btn btn-default'}>Browse</label>
                <input
                    type={'file'}
                    onChange={(e) => this.handleUploadImage(e, value.image)}
                    accept={'image/*'}
                    style={{ display: 'none'}}
                    id={`input${value.name}`} />
                <h4>{value.name} surgical comments:</h4>
                <input
                  type="textarea"
                  style={{
                    width: "100%",
                    height: 100
                  }}
                  onChange={event =>
                    this.handler(event.target.value, value.state)
                  }
                />
              </Col>
              <Col xs={6} md={6}>
                <div className={'radiograph'}>
                  { this.state[value.image] ?
                      <Image src={this.state[`${value.image}Url`]} width={231} height={231} />
                  : ''
                  }
                </div>
              </Col>
            </Row>
          ))}
        </Row>

        <Row>
          <Col xs={12} md={12}>
            <h4>Feedback *</h4>
            <div style={styles.horizontalLineContainer}>
              <div style={styles.horizontalLine} />
            </div>
          </Col>
          <Col xs={6} md={6}>
            <h4 className={'checkbox'}>Would you like to receive some feedback *</h4>
            <Checkbox
                checked={this.state.receiveFeedback}
                onChange={this.handleCheckbox('receiveFeedback')}
                value='receiveFeedback'
                color='primary'
                classes={{
                    default: 'checkbox'
                }}
            />
          </Col>
          <Col xs={6} md={6}>
            <h4 className={'checkbox'}>I agree to the <a href={'#'}>terms and conditions</a> *</h4>
            <Checkbox
                checked={this.state.termsAndConditions}
                onChange={this.handleCheckbox('termsAndConditions')}
                value='termsAndConditions'
                color='primary'
                classes={{
                  default: 'checkbox'
                }}
            />
          </Col>
        </Row>

        <Row className={'feedBackandRating'}>
          <Col xs={6} md={6}>
            <h4>Reviewer feedback: </h4>
            <input
                type="textarea"
                style={{
                    width: "100%",
                    height: 100
                }}
                onChange={event =>
                    this.handler(event.target.value, 'reviewerFeedback')
                }
            />
          </Col>
          <Col xs={6} md={6} className={'rating'}>
            <div className={'rateOperation'}>
              <h4>Rate this operation</h4>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
