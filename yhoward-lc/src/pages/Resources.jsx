import React from "react";
import ResourceBox from "../components/ResourceBox";

export default function Resources() {
  return (
    <>
      <div class="p-5 font-basker">
        <h1 className="heading">
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
      </div>
    </>
  );
}
