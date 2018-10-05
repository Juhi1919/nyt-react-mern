import axios from "axios";

const BASEURL = "http://www.echojs.com/";

const api = {
    runQuery: (searcharticle) => {
      console.log("We have a search term passed into query: " + searcharticle);
      // NYTimes search query.
      const queryURL = BASEURL+ "&q=" + searcharticle;
      return axios.get(queryURL).then((response) => {
        console.log("API Searching Result is = " + response);
        if(response.data.response.docs[0]) {
            return response.data.response.docs;
        } else {
            return "";
        }
      });
    },
    
    // Get all the items  saved in the database
  getSaved: () => {
  	return axios.get("/api/saved");
  },

  //Saving the selected articles to the database.
  savearticle: (Title, Date, URL) => {
  	return axios.post("/api/saved",
  		{
  			title: Title,
  			date: Date,
            url: URL
  		}
  	);
  },

  
};
// Export the helpers function.
export default api;