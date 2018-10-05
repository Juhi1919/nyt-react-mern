import React from "react";
// API Functions
import api from "./utils/api";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchitem: "",
      results: [],
      result_Save: {},
      saved: []
    };

    this.searchitem = this.searchitem.bind(this);
    this.setSavearticle = this.setSavearticle.bind(this);
    this.deletearticle = this.deletearticle.bind(this);
  }

    // The moment the page renders get saved articles
  componentDidMount() {
    // Get the latest history.
    api.getSaved().then(function(response) {
      console.log("Saved Articles is =" + response);
      if (response !== this.state.saved) {
        console.log("Saved articles is ", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchitem !== this.state.searchitem) {
      console.log("Search item updated.");
      
      api.runQuery(this.state.searchitem).then((data) => {
        if (data !== this.state.results) {
          console.log("Answer Geting" + data[0].headline.main);
          this.setState({ results: data });
        }
      });
    }
  }

  //Setting the state
  searchitem(items) {
    this.setState({
        searchitem: items
    });
  }

  // Saving state before saving the article
  setSavearticle(index, article) {
    const newState = this.state.result_Save;
    newState.title = article.title;
    newState.date = article.date;
    newState.url = article.url;
    console.log("Title=" + newState.title);
    console.log("Date=" + newState.date);
    console.log("URL=" + newState.url);
    this.setState({
        result_Save: newState
    });
    console.log("Save Article Title=" + this.state.result_Save.title);
    // Save selected article
    api.savearticle(this.state.result_Save.title, this.state.result_Save.date, this.state.result_Save.url).then((data) => {
      console.log("Save Article Data=" + data);
      console.log("Article saving complete");
      this.setState(previousState => ({
        saved: [...previousState.saved, this.state.result_Save],
        results: [...previousState.results.slice(0, index), ...previousState.results.slice(index+1)]
      }));
    });
  }

  // Delete an article
  deleteArticle(articleID, index) {
    // console.log("About to delete....");
    console.log("Delete Article ID=" + articleID);
    
  }

  render() {
    return (
      <div id="container">
        <div id ="jumbotron">
          <h1>Article Search</h1>
          <h3>From from echojs</h3>
        </div>
        <div className="row">
          <input Search searchitem={this.searchitem} 
                setsavearticle={this.setSavearticle} 
                saved={this.state.saved} 
                results={this.state.results}
                resultsave={this.state.result_Save} />
        </div>
        <div className="row">
          <input Save saved={this.state.saved} />
        </div>
      </div>
    );
  }
}

// Export the componen back for use in other files
export default Main;