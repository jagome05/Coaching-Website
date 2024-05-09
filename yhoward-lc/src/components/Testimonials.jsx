import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    name: 'Danyelle',
    caption: "Yvonne is such a delight to work with as a coach! Her keen listening skills andremarkable ability to reflect back enrich our coaching sessions tremendously. What I love about Yvonne is her ability to ask probing questions which facilitate newperceptions allowing me to uncover hidden answers. Exemplifying compassion and aprofound orientation towards people, Yvonne is remarkable in her &#39;3G&#39; approach: Grace,Gratitude, and Goodness. In my opinion, her unique style and passion particularly resonate with the BIPOCcommunities. I highly recommend Yvonne: a masterful coach whose heart creates aspace for exceptional personal growth and discovery. She's a difference-maker; your journey with her will be transformative!"
  },
  {
    id: 2,
    altText: 'Slide 2',
    name: 'Brittany H.',
    caption: '“I can’t say enough good things about working with Yvonne! As a coach, she is fantasticat keeping me grounded, supporting me in problem-solving, and collaborating with mygoals and ambitions. She brings a wealth of knowledge and experience into oursessions together. As a person, she is genuinely kind, has a high level of integrity, and ahuge heart that loves to help others reach their full potential. Through working withYvonne, I’ve been able to gain the confidence to launch my new business and maintainconsistent healthy habits. I highly recommend her!”',
  },
  {
    id: 3,
    altText: 'Slide 3',
    name: 'Jenn L.',
    caption: 'Yvonne creates a space for me where I hear myself, free of distraction. She asks questionsthat center me and propel me on my path. Yvonne is a great listener, and her energyresonates depending on what I’m moving through. With Yvonne’s skilled and genuinesupport, I’m able to identify what is truly important to me, focus my headspace and achievewhat I set my sights on. Our weekly coaching sessions have been empowering! I’m happier, healthier, moreproductive, and at ease going for what I wantYvonne’s coaching expertise and level of engagement have been life-changing andtransformative!',
  },
];

export default function Testimonials() {
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
        // className="custom-tag"
        // tag="div"
        className='max-w-full h-96 bg-[url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8yOF9wYWludGluZ19vZl9sYXZlbmRlcl9ib3JkZXJfaW5fdGhlX3N0eWxlX29mX19mMzBiYjlmZi1mYWE4LTQ4NzEtYmI5YS0zZTFkMjI3MjNlMDJfMS5qcGc.jpg)]'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption
          className="text-black italic top-20"
          captionText={item.caption}
          captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  return (
    <div className='shadow-2xl border-2 border-black'>
      {/* <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: white;
            }`}
      </style> */}
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

//   return(
//     <>
//     {/* //TODO insert quotes img */}
//       <div class="text-white flex rounded-lg border-4 border-white p-2 items-center gap-4">
//         {/* //TODO insert basic user img */}
//         <h1>Testimonial</h1>
//         <div>
//           <h1>Jason says:</h1>
//           <p>Yvonne was really helpful!</p>
//         </div>
//       </div>
//     </>
//   )
// }