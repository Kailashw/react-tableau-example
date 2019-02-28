import React, { Component } from 'react';
import tableau from 'tableau-api'

const baseUrl = 'http://public.tableau.com/views/RegionalSampleWorkbook/'     // This could be chanegd with your actual tableau URL.
const tab = 'College'                                                        // This marks your default tab view to load.

class App extends Component {

  componentDidMount() {
    this.init()
  }

  // initialize viz view.
  init = () => {
    let options = {
      hideTabs: false,                                                      // can be set to true to hide other tabs.
      hideToolbar: true,                                                    // can be set to true to hide toolbar in the bottom of all tabs.
      onFirstInteractive: function () {
        console.log("this is called post tableau loads.")                   // you can perform post loading operations here :) 
      }
    };
    let url = baseUrl + tab                                                // concatinating base url and default tab to load.
    new window.tableau.Viz(document.getElementById("vizId"), url, options)
  }

  render() {
    return (
        <div id="vizId">
        </div>
    )
  }

}

export default App;  