import * as React from 'react';
import { Hooks } from './hooks';

interface Props {
  name: string;
}

interface State {
  count: number;
  message?: string;
}

class App extends React.Component<Props, State> {
  state: State = {
    count: 3,
    message: 'hi',
  };

  increment = (amount: number) => {
    this.setState((state) => ({
      count: state.count + amount,
    }));
  };

  componentDidMount() {
    this.setState({
      message: 'henlo there',
    });
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>
          Hi, my name is: {name}, this is the count: {this.state.count}, and
          this is the message: {this.state.message}!
        </h1>
        <Hooks />
      </div>
    );
  }
}

export default App;
