import React from "react";

class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchitem: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //State change handling
  handleChange(event) {
    //console.log("State Change!!!!");
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log("Current State=" + newState);
  }
  //Submit Button After submit form
  handleSubmit(event) {
    event.preventDefault();
     this.props.searchitem(this.state.searchitem);
    this.setState({ searchitem: "" });
  }
  //Submit the form to trigger the search
  render() {
    return (
      <div>
        <div className="panel-heading">
          <h3 className="panel-title">Search</h3>
        </div>

        <div className="panel-body">
        <div class="form-container">
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="Search Item">Enter Search String</label>
              <input
                type="text"
                className="form-control"
                id="term"
                value={this.state.searchitem}
                onChange={this.handleChange}
                required
              />                      
              <br />
              <button
                type="submit"
                className="btn btn-primary">
                Search Article!!!
              </button>
            </div>
          </form>        
        </div>

        </div>
      </div>
    );
  }
}

export default Answer;