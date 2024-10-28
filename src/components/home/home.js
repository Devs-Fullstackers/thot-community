import React from 'react';
import { ThotContainer, Title, Subtitle, WisdomQuote } from './homeStyles';
import { getThotGreeting } from './homeDm';

const Thot = () => (
  <ThotContainer>
    <Title>Thot</Title>
    <Subtitle>{getThotGreeting()}</Subtitle>
    <WisdomQuote>“La verdad y el conocimiento son el camino a la inmortalidad”</WisdomQuote>
  </ThotContainer>
);

export default Thot;
