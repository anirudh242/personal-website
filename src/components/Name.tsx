import * as React from 'react';

const Name = ({ name: myName }: { name: string }) => {
  function randomize(): void {
    let nameSplit = name.split('');

    for (let i = 0; i < nameSplit.length; i++) {
      if (nameSplit[i] != ' ')
        nameSplit[i] = LETTERS.split('')[Math.floor(Math.random() * 26)];
    }

    setName(nameSplit.join(''));
  }

  React.useEffect(() => {
    let iterations: number = 0;

    let interval = setInterval(() => {
      randomize();

      if (iterations >= 17) {
        clearInterval(interval);
        setName(myName);
      }
      iterations++;
    }, 50);
  }, []);

  let [name, setName] = React.useState<string>(myName);

  const LETTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return (
    <div
      className="m-auto text-8xl"
      id="nametext"
      onMouseEnter={() => {
        let iterations: number = 0;

        let interval = setInterval(() => {
          randomize();

          if (iterations >= 15) {
            clearInterval(interval);
            setName('myName');
          }
          iterations++;
        }, 50);
      }}
    >
      {name.toUpperCase()}
    </div>
  );
};

export default Name;
