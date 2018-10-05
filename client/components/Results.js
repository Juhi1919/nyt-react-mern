// Dependencies
import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {
        title: "",
        date: "",
        url: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //Article search result- Onclick function to save
  handleSubmit(index, headline, date, url) {
    console.log (" Save function...");
    console.log("Headline=" + headline);
    console.log("Date=" + date);
    const newState = this.state.article;
    newState.title = headline;
    newState.date = date;
    newState.url = url
    this.setState({
      article: newState
    });

    this.props.setSavearticle(index, this.state.article);
  }
  // Rendering Search Results
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body">
          {this.props.results.map(function(object, index){
            return (
              <div key={index} className="row" onClick={() => this.handleSubmit(index, object.headline.main, object.date, object.web_url)}>
                <div className="col-sm-6 articleText">
                  <a href={object.web_url}>{object.headline.main}</a>
                  
                </div>
                {
                <div className="col-sm-6">
                  <button className="btn btn-primary pull-right saveButton">
                    Save Article
                  </button>
                </div>
                }
                </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
export default Results;