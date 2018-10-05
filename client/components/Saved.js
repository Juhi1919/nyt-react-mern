import React from "react";

class Saved extends React.Component {
	constructor(props) {
	}
	render() {
		return (
          			<div className="col-sm-12">
          				<div className="panel-primary">
          					<div className="panel-heading">
          						<h3 className="panel-title">Saved Articles</h3>
        					</div>
        					<div>
					      	{this.props.saved.map((article, i) => {
					        	return (
					        		<div>
					        			<div className="col-md-6 articleText">
					        				<a href={article.url}>{article.title}</a>
					        			</div>
					        			<div className="col-md-6 dateText">
					        				Date Saved: {article.date}
					        			</div>
					        			
					        		</div>
					        	);
					      	})}
					    	</div>
          				</div>
          			</div>
		);
	}
}

// Export the component back for use in other files.
export default Saved;