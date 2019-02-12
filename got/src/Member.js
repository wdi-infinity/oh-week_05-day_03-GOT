import React from "react";

class Member extends React.Component {
  render() {
    const wikiLink = "http://gameofthrones.wikia.com/wiki/";
    const imageLink = "http://cheatsheetworld.com/img/entertainment/game-of-thrones/game-of-thrones-";
    const personData = this.props.personData;

    return (
      <div>
        <p>{personData.name}</p>
        <p>{personData.description}</p>
        <img src={imageLink + personData.imageSuffix + ".jpg"} alt="" />
        <a href={wikiLink + personData.wikiSuffix}>Read more about {personData.name}</a>
      </div>
    );
  }
}

export default Member;