// import React, { Component } from "react";
// import { Upload, UploadPreview } from "material-ui-upload";
//
// export default class UploadImage extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   onFileLoad = (e, file) => {
//     const { state, callback } = this.props;
//     callback(file, state);
//   };
//
//   render() {
//     const { picture } = this.props;
//     return picture ? (
//       <UploadPreview
//         label="Add"
//         initialItems={picture}
//         onChange={this.onChange}
//       />
//     ) : (
//       <Upload label="Add" onFileLoad={this.onFileLoad} />
//     );
//   }
// }
