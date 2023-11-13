'use client';
import { useEffect } from 'react';

const Index = () => {
  const velocity = 50;

  const shuffleText = (element, originalText) => {
    const elementTextArray = Array.from(originalText);
    let randomText = [];

    const repeatShuffle = (times, index) => {
      if (index === times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(() => {
        randomText = shuffle(elementTextArray);
        for (let i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join('');
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  useEffect(() => {
    const shuffleElements = document.querySelectorAll('.shuffle');
    shuffleElements.forEach((element) => {
      element.dataset.text = element.textContent;
      shuffleText(element, element.dataset.text);
      element.addEventListener('mouseenter', () => {
        shuffleText(element, element.dataset.text);
      });
    });
  }, []);

  const shuffle = (o) => {
    for (let i = o.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [o[i - 1], o[j]] = [o[j], o[i - 1]];
    }
    return o;
  };

  return (
    <span className='shuffle'>
    

        asklndlknaksbdiuhaihsd.,amslkndkj
      {/* Your HTML content where you want to apply the shuffling effect */}
    </span>
  );
};

export default Index;






