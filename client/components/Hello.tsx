import * as React from 'react';
// import './styles.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('you could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

//optional class version of this
// class Hello1 extends React.Component<Props, object> {
//   render() {
//     const { name, enthusiasmLevel = 1 } = this.props;

//     if (enthusiasmLevel <= 0)
//       throw new Error('You could be a little more enthusiastic. :D');

//     return (
//       <div>
//         <div>Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
//       </div>
//     );
//   }
// }

export default Hello;

//helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}