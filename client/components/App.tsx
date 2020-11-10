import * as React from 'react';
import './styles.css';

interface Props {
  name: string;
  message?: string;
}

interface State {
  count: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 3 };
  }

  render() {
    const { name, message = 'henlo' } = this.props;
    const { count } = this.state;
    return (
      <div className="hello">
        <h1>
          Hi, my name is: {name}, this is the count: {count}, and this is the message: {message}!
        </h1>
      </div>
    );
  }
}

export default App;
