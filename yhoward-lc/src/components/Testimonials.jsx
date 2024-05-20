import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


export default function Testimonials({ name, caption, quoteName, quote }) {

  const items = [
    {
      id: 1,
      altText: 'Slide 1',
      name: `${name}`,
      caption: `${caption}`
    },
    {
      id: 2,
      altText: 'Slide 2',
      name: `${quote}`,
      caption: `${quoteName}`
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='min-w-fit h-96 z-10 bg-[url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOF9wYWludGluZ19vZl9sYXZlbmRlcl9ib3JkZXJfaW5fdGhlX3N0eWxlX29mX19mMzBiYjlmZi1mYWE4LTQ4NzEtYmI5YS0zZTFkMjI3MjNlMDJfMS5qcGc.jpg)]'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
        className="text-black italic bg-white opacity-80 text-xl top-20 py-5"
          captionHeader={item.name}
          />
                  <CarouselCaption
        className="text-black italic text-xl"
          captionText={item.caption}
          />
      </CarouselItem>
    );
  });

  return (
    <div className='shadow-2xl border-2 border-black'>

      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
}