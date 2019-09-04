import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var skills = this.props.data.skills.map(function (skills) {
        //var className = ' ' + skills.name.toLowerCase();
        var skillsImage = 'images/portfolio/' + skills.image;
        return <div className="columns portfolio-item" key={skills.name}><span style={{ width: skills.level }}></span><em>{skills.name}<img width={125} height={125} alt={skills.name} src={skillsImage} /></em></div>
      })
    }

    return (


      <section id="resume">

      <div className="row">

          
        <div className="twelve columns collapsed">


          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {skills}
          </div>
        </div>
      </div>
    </section>



      // <section id="resume">
      //   <div className="row skill">

      //     <div className="three columns header-co">
      //       <h1><span>Skills</span></h1>
      //     </div>

      //     <div className="nine columns main-col">

      //       <p>{skillmessage}
      //       </p>
          
      //       <div class="columns feature-item">
      //         <ul >
      //         {skills}
                
              
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default Resume;
