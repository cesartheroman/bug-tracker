import * as React from 'react';

interface Props {
  name: string;
  message?: string;
}

interface State {
  count: number;
}

class App extends React.Component<Props, State> {
  state: State = { count: 3 };

  render() {
    const { name, message = 'henlo' } = this.props;
    return (
      <div>
        <h1>
          Hi, my name is: {name}, this is the count: {this.state.count}, and
          this is the message: {message}!
        </h1>
      </div>
    );
  }
}

export default App;
