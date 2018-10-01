import React, { Component } from "react";
import createMediaListener from "./lib/createMediaListener";
import { Galaxy, Trees, Earth } from "./lib/screens";
import { CSSTransition } from "react-transition-group";

class Media extends Component {
  media = createMediaListener(this.props.queries);

  state = {
    media: this.media.getState(),
  };

  createMedia() {
    this.media = createMediaListener(this.props.queries);
    this.media.listen(media => this.setState({ media }));
  }

  componentDidMount() {
    this.createMedia();
  }

  componentWillUpdate(prevProps) {
    if (this.props.queries !== prevProps.queries) {
      this.media.dispose();
      this.createMedia();
    }
  }

  render() {
    return (
      this.props.children(this.state.media)
    );
  }
}

class App extends Component {
  state = {
    queries: {
      big: "(min-width : 1000px)",
      tiny: "(max-width: 600px)",
    }
  }

  render() {
    const { queries } = this.state;

    return (
      <Media queries={queries}>
        {media => (
          <CSSTransition classNames="fade" timeout={1000}>
            {media.big ? (
              <Galaxy key="galaxy" />
            ) : media.tiny ? (
              <Trees key="trees" />
            ) : (
              <Earth key="earth" />
            )}
          </CSSTransition>
        )}
      </Media>
    );
  }
}

export default App;



// HOC code ✅



// import React, { Component } from "react";
// import createMediaListener from "./lib/createMediaListener";
// import { Galaxy, Trees, Earth } from "./lib/screens";
// import { CSSTransition } from "react-transition-group";

// const media = createMediaListener({
//   big: "(min-width : 1000px)",
//   tiny: "(max-width: 600px)"
// });

// function withMedia() {
//   return class withMediaHOC extends Component {
//     state = {
//       media: media.getState()
//     };

//     componentDidMount() {
//       media.listen(media => this.setState({ media }));
//     }

//     componentWillUnmount() {
//       media.dispose();
//     }

//     render() {
//       return (<App media={this.state.media} />)
//     }
//   }
// };

// class App extends Component {


//   render() {
//     // const { media } = this.state;

//     // HOC version
//     const { media } = this.props;

//     return (
//       <CSSTransition classNames="fade" timeout={1000}>
//         {media.big ? (
//           <Galaxy key="galaxy" />
//         ) : media.tiny ? (
//           <Trees key="trees" />
//         ) : (
//           <Earth key="earth" />
//         )}
//       </CSSTransition>
//     );
//   }
// }

// export default withMedia(App);
