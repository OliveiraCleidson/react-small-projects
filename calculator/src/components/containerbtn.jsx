import React from 'react';

export default function ContainerBtn() {
  const numbers = []
  for (let i = 1; i < 11; i++) {
    if (i < 10) {
      numbers.push(i);
    } else {
      numbers.push(0);
    }
  }
  const listBtn = numbers.map((num) => {
    return (<li key={num}>{num}</li>);
  })

  return (<ul>
    {listBtn}
  </ul>
  );
}