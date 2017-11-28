import React from "react";
import FollowsContainer from "../follows/follows_container";

class StoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let storyId = this.props.match.params.storyId;
    this.props.fetchStory(storyId);
  }

  render() {
    if (!this.props.story || !this.props.users) {
      return null;
    } else {
      let { title, body, img_url, author_id, updated_at } = this.props.story;

      let img =
        "https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12108215_10103930124440943_5214808814929508094_n.jpg?oh=1ef4f0bb2b9936d55580ca680010a434&oe=5A95C236";
      if (img_url === "story_default.png") {
        img_url = img;
      }

      return (
        <div className="article-flex-container">
          <div className="article-flex-child follows-container">
            <FollowsContainer user={this.props.users} updated_at={updated_at} />
          </div>
          <div className="article-title article-flex-child">
            <h2 className="title">{title}</h2>
          </div>
          <div className="article-img article-flex-child">
            <img src={img_url} />
          </div>
          <div className="article-text-container article-flex-child">
            <pre className="article-text">{body}</pre>
          </div>
        </div>
      );
    }
  }
}

export default StoryShow;
