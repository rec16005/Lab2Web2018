const state = {
  currentPlayer: 0,
  clicked: 0,
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'Lab 2 Totito';

  const celda1 = document.createElement('div');
  celda1.className = 'celda';
  celda1.innerHTML='<img src = "V.png">'
  celda1.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda1.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda1.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda2 = document.createElement('div');
  celda2.className = 'celda';
  celda2.innerHTML='<img src = "V.png">'
  celda2.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda2.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda2.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda3 = document.createElement('div');
  celda3.className = 'celda';
  celda3.innerHTML='<img src = "V.png">'
  celda3.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda3.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda3.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda4 = document.createElement('div');
  celda4.className = 'celda f2';
  celda4.innerHTML='<img src = "V.png">'
  celda4.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda4.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda4.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda5 = document.createElement('div');
  celda5.className = 'celda f2';
  celda5.innerHTML='<img src = "V.png">'
  celda5.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda5.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda5.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda6 = document.createElement('div');
  celda6.className = 'celda f2';
  celda6.innerHTML='<img src = "V.png">'
  celda6.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda6.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda6.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda7 = document.createElement('div');
  celda7.className = 'celda f3';
  celda7.innerHTML='<img src = "V.png">'
  celda7.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda7.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda7.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda8 = document.createElement('div');
  celda8.className = 'celda f3';
  celda8.innerHTML='<img src = "V.png">'
  celda8.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda8.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda8.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const celda9 = document.createElement('div');
  celda9.className = 'celda f3';
  celda9.innerHTML='<img src = "V.png">'
  celda9.onclick=()=>{
    if (lState.currentPlayer === 0){
      celda9.innerHTML='<img src = "X.png">'
    }
    if (lState.currentPlayer === 1) {
      celda9.innerHTML='<img src = "O.png">'
    }
    lState.currentPlayer = (lState.currentPlayer + 1) % 2;
  };

  const rst = document.createElement('button');
  rst.className = 'rst';
  rst.innerHTML='RESET'
  rst.onclick=()=>{
    celda1.innerHTML='<img src = "V.png">';
    celda2.innerHTML='<img src = "V.png">';
    celda3.innerHTML='<img src = "V.png">';
    celda4.innerHTML='<img src = "V.png">';
    celda5.innerHTML='<img src = "V.png">';
    celda6.innerHTML='<img src = "V.png">';
    celda7.innerHTML='<img src = "V.png">';
    celda8.innerHTML='<img src = "V.png">';
    celda9.innerHTML='<img src = "V.png">';
    lState.currentPlayer = 0;
  }

  root.appendChild(title);
  root.appendChild(celda1);
  root.appendChild(celda2);
  root.appendChild(celda3);
  root.appendChild(celda4);
  root.appendChild(celda5);
  root.appendChild(celda6);
  root.appendChild(celda7);
  root.appendChild(celda8);
  root.appendChild(celda9);
  root.appendChild(rst);
}
render(state);