import React from 'react';



export default class ProcessDescriptionBubble extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerDescription: 'Single Origin'
    }
  }

  render() {
    return (
      <div className="process-description">
        <div>
        <div className="process-row">
          <div>
            <h2 className="process-title">Single Origin</h2>
          </div>

          <div className="process-image-paragraph-container">
            <div className="process-row-image"></div>


              <p className="paragraph-container">  We take it very seriously where our beans come from, and how they are handled, transported, and stored. As of 2016, we have started to use beans grown in a little town in south Columbia called Jardin. The beans themselves are elevated atop a mountain that sees adequate moisture and ash falloff, making the beans rich and fertile. </p>
          </div>

          <hr />
          </div>


          <div className="process-row">
            <div>
              <h2 className="process-title">Fusion Ground</h2>
            </div>
            <div className="process-image-paragraph-container">
              <div className="process-row-image"></div>


                <p className="paragraph-container">  We take it very seriously where our beans come from, and how they are handled, transported, and stored. As of 2016, we have started to use beans grown in a little town in south Columbia called Jardin. The beans themselves are elevated atop a mountain that sees adequate moisture and ash falloff, making the beans rich and fertile. </p>
            </div>
            <hr />
            </div>

            <div className="process-row">
              <div>
                <h2 className="process-title">Tilted to Taste</h2>
              </div>
              <div className="process-image-paragraph-container">
                <div className="process-row-image"></div>


                  <p className="paragraph-container">  We take it very seriously where our beans come from, and how they are handled, transported, and stored. As of 2016, we have started to use beans grown in a little town in south Columbia called Jardin. The beans themselves are elevated atop a mountain that sees adequate moisture and ash falloff, making the beans rich and fertile. </p>
              </div>
              <hr />
              </div>

              <div className="process-row">
                <div>
                  <h2 className="process-title">Fresh is a Given</h2>
                </div>
                <div className="process-image-paragraph-container">
                  <div className="process-row-image"></div>


                    <p className="paragraph-container">  We take it very seriously where our beans come from, and how they are handled, transported, and stored. As of 2016, we have started to use beans grown in a little town in south Columbia called Jardin. The beans themselves are elevated atop a mountain that sees adequate moisture and ash falloff, making the beans rich and fertile. </p>
                </div>
                <hr />
                </div>
        </div>
      </div>
    )
  }
}
