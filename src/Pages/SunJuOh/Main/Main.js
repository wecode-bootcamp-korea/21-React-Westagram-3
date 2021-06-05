import React from 'react';
import Nav from '../../../Components/Nav';
import Feed from '../Feed/Feed';
import MainRight from '../MainRight/MainRight';
import { GET_FEED_API } from '../../../../src/config';
import './Main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedData: [],
    };
  }

  toggleLike = feedId => {
    const { feedData } = this.state;

    const newFeedData = feedData.map((feed, index) => {
      return feedId === index
        ? { ...feed, isFeedLike: !feed.isFeedLike }
        : feed;
    });

    this.setState({ feedData: newFeedData });
  };

  addComment = (e, feedId, value, reset) => {
    e.preventDefault();
    const { feedData } = this.state;

    const newObj = {
      id: feedData[feedId].commentList.length + 1,
      userName: '_ocean_zoo',
      content: value,
    };

    const newComment = feedData.map(feed => {
      return feed.feedId === feedId
        ? { ...feed, commentList: feed.commentList.concat(newObj) }
        : feed;
    });
    this.setState({
      feedData: newComment,
    });
    reset();
  };

  componentDidMount() {
    fetch(`${GET_FEED_API}/feedData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedData: data,
        });
      });
  }

  render() {
    const { feedData } = this.state;
    return (
      <div className="superContainer">
        <section className="allWrapper">
          <Nav />
          <main>
            <div className="mainWrapper">
              <div className="main-left">
                <div className="storyBox">
                  <ul>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/songkang.jpeg" />
                      <p>songkang</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/sohee.jpeg" />
                      <p>sohee</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/jisoo.jpeg" />
                      <p>jisoo</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/seonho.jpeg" />
                      <p>seonho</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/junghan.jpeg" />
                      <p>junghan</p>
                    </li>
                    <li>
                      <img alt="profile" src="/Images/SunJuOh/ryujin.jpeg" />
                      <p>ryujin</p>
                    </li>
                    <li className="nextPointer">
                      <i className="fas fa-chevron-circle-right fa-2x" />
                    </li>
                  </ul>
                </div>
                {feedData.map(feed => {
                  return (
                    <Feed
                      key={feed.feedId}
                      feed={feed}
                      addComment={this.addComment}
                      toggleLike={this.toggleLike}
                    />
                  );
                })}
              </div>
              <MainRight />
            </div>
          </main>
        </section>
      </div>
    );
  }
}

export default Main;
