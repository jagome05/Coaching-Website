import React from "react";
import ResourceBox from "../components/ResourceBox";
import Testimonials from "../components/Testimonials"

export default function Resources() {
  return (
    <>
      <div class="p-5 font-basker">
        <h1 className="text-5xl">
          Below are some resources to help you along your journey
        </h1>
        <div class="grid grid-cols-2 grid-flow-row gap-12">
          <ResourceBox
            url="https://geediting.com/people-who-become-a-better-version-of-themselves-later-in-life-usually-adopt-these-habits/"
            img="https://geediting.com/wp-content/uploads/2024/03/People-who-become-a-better-version-of-themselves-later-in-life-usually-adopt-these-habits-1024x538.png"
            title="People who become a better version of themselves later in life usually adopt these 10 habits"
          />
          <ResourceBox
            url="https://www.forbes.com/sites/traversmark/2024/04/13/a-psychologist-explains-how-to-beat-perfectionism-procrastination/"
            img="https://imageio.forbes.com/specials-images/imageserve/6619453353ea4dea08eb27ac/0x0.jpg?format=jpg&crop=2418,1133,x0,y93,safe&height=900&width=1600&fit=bounds"
            title="A Psychologist Explains How To Beat ‘Perfectionism-Procrastination’"
          />
        </div>

        <br></br>

        <div className="py-5">
        <Testimonials 
        name="Jenn L."
         caption="Yvonne creates a space for me where I hear myself, free of distraction. She asks questionsthat center me and propel me on my path. Yvonne is a great listener, and her energyresonates depending on what I’m moving through. With Yvonne’s skilled and genuinesupport, I’m able to identify what is truly important to me, focus my headspace and achievewhat I set my sights on. Our weekly coaching sessions have been empowering! I’m happier, healthier, moreproductive, and at ease going for what I wantYvonne’s coaching expertise and level of engagement have been life-changing andtransformative!"
         quote="Forgive yourself for not knowing what you didn’t know before you learned it."
        quoteName=" - Maya Angelou"
        />
        </div>

        {/*
    id: 3,
    altText: 'Slide 3',
    name: 'Jenn L.',
    caption: 'Yvonne creates a space for me where I hear myself, free of distraction. She asks questionsthat center me and propel me on my path. Yvonne is a great listener, and her energyresonates depending on what I’m moving through. With Yvonne’s skilled and genuinesupport, I’m able to identify what is truly important to me, focus my headspace and achievewhat I set my sights on. Our weekly coaching sessions have been empowering! I’m happier, healthier, moreproductive, and at ease going for what I wantYvonne’s coaching expertise and level of engagement have been life-changing andtransformative!',
  quote “Forgive yourself for not knowing what you didn’t know before you learned it.”
  */}

        <br></br>

        <img></img>

      </div>
    </>
  );
}
