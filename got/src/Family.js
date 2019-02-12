import React from "react";
import Member from "./Member";

class Family extends React.Component {
  render() {
    const wikiLink = "http://gameofthrones.wikia.com/wiki/";
    const familyData = this.props.familyData;

    const members = familyData.people.map(person => {
      return <Member personData={person} />;
    });



    return (
      <div>
        <h1>{familyData.name}</h1>
        <a href={wikiLink + familyData.wikiSuffix}>Read more about {familyData.name}</a>
        <div>{members}</div>
      </div>
    );
  }
}

export default Family;