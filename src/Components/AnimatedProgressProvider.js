import React from "react";
import { easeQuadInOut } from "d3-ease";
import { Animate } from "react-move";

const DURATION = 1.0;

class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false,
  };

  static defaultProps = {
    valueStart: 0,
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated,
        });
      }, DURATION * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated,
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: 0,
        })}
        update={() => ({
          value: [this.state.isAnimated ? this.props.valueEnd : 0],
          timing: {
            duration: DURATION * 1000,
            ease: easeQuadInOut,
          },
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;
