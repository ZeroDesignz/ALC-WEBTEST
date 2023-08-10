// import React, { useState } from 'react';
// import { Container, Content, Deck, CardShine } from './styles';
// // import { useSpring } from '@react-spring/core';
// import { useWindowSize } from '../../hooks/useWindowSize';



// const calc = (x, y) => [-(y - window.innerHeight /2) / 20, (x - window.innerWidth / 2) / 20, 1];
// const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

// export const Nftz = () => {
//   const { width } = useWindowSize();
//   const [props, set] = useSpring(() => ({
//     xys: [0, 0, 1],
//     config: { mass:10, tension:200, friction:50 }
//   }));
  
//   const [nfts] = useState([
//     { id: 1, rarity: 'Rare', image: 'images/NFT/Rare1.gif' },
//     { id: 2, rarity: 'Epic', image: 'images/NFT/Epic1.gif' },
//     { id: 3, rarity: 'Legend', image: 'images/NFT/Legend6.gif' },
//     { id: 4, rarity: 'Neap', image: 'images/NFT/Neap1.gif' },
//   ]);


//   return (
//     <Container id='nets'>
//       <h1>Algo Leagues NFTs</h1>
    
//     <Content
//         onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
//         onMouseLeave={() => set({xys:[0,0,1]})}
//         style={{
//             transform: props.xys.to(trans)
//         }}
//     >
//       <deck>
//       <img src={`images/NFT/Rare1.gif`} alt="" />
//       <div class="card__shine">
//         ::before
//         ::after
//       </div>
//       </deck>
//     </Content>
//     <span className='operator'>+</span>
//     <Content
//         onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
//         onMouseLeave={() => set({xys:[0,0,1]})}
//         style={{
//             transform: props.xys.to(trans)
//         }}
//     >
//       <deck>
//       <img src={`images/NFT/Epic1.gif`} alt="" />
//       </deck>
//     </Content>
//     <span className='operator'>+</span>
//     <Content
//         onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
//         onMouseLeave={() => set({xys:[0,0,1]})}
//         style={{
//             transform: props.xys.to(trans)
//         }}
//     >
//       <deck>
//       <img src={`images/NFT/Legend1.gif`} alt="" />
//       </deck>
//     </Content>
//       <span className='operator'>=</span>
//     <Content
//         onMouseMove={({clientX: x, clientY: y}) => (set({xys:calc(x,y)}))}
//         onMouseLeave={() => set({xys:[0,0,1]})}
//         style={{
//             transform: props.xys.to(trans)
//         }}
//     >
//       <deck>
//       <img src={`images/NFT/Neap1.gif`} alt="" />
//       </deck>
//     </Content>

//       <style class='hover'></style>

//     </Container>

//   )
// }
