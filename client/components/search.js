import React from "react";
//import Answer from "./Answer"
import "./search.css";

import Results from "./Results";

class search extends React.Component {
  constructor(props) {
    
  }
  //Rendering Search and Results
  render() {
    return (
      <div className="col-md-12">
          <div className="row">
            <div className="col-sm-12">
              <answer searchitem={this.props.searchitem} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Results results={this.props.results} setSavearticle={this.props.setSavearticle} resultSave={this.props.result_Save} />
            </div>
          </div>
      </div>
    );
  }
}
export default search;