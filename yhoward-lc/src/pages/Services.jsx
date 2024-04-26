import React from "react";
import FAQ from "../components/FAQ";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <>
      <div class="text-center font-basker">
        <h2>Services</h2>

        <div class="flex p-5">
          <img
            class=""
            src="https://t3.ftcdn.net/jpg/05/22/92/86/360_F_522928616_xqzObEMWOQs25Aiz4iubcgLndw2jGsih.jpg"
          ></img>
          {/* <h3>Verve = Energy</h3>
          <h3>Veritas = Truth</h3>
          <h4>Verve & Veritas Coaching represents the high energy and honesty needed for genuine, long-lasting change. Ready to embark on your transformative journey?</h4> */}
          <div class="bg-white p-5">
            <h3>
              My approach is deeply collaborative, holistic, and
              strengths-based:
            </h3>
            <br></br>
            <ul>
              <strong>Uncover your authentic self: </strong>Explore your values,
              goals, and desires to chart a future aligned with your true
              purpose.
            </ul>
            <ul>
              <strong>Embrace transformation: </strong>Address emotional blocks
              and limiting beliefs with compassion and acceptance, fostering
              self-discovery and growth.
            </ul>
            <ul>
              <strong>Navigate complexity: </strong>Equip yourself with
              practical tools and strategies for managing stress, building
              resilience, and navigating challenges with grace.
            </ul>
            <ul>
              <strong>Celebrate your journey: </strong>Recognize progress,
              maintain motivation, and savor the transformative power of change.
            </ul>
          </div>
        </div>

        <div class="p-5 bg-gray-700">
          <Testimonials />
        </div>

        <div class="p-5">
          <Card className="my-2">
            <CardBody>
              <CardTitle tag="h5">Service 1</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                excepturi quisquam, tenetur dolorum harum mollitia tempora quod
                amet natus id, voluptatibus nemo qui nesciunt libero, error
                dolor reiciendis! Sequi recusandae similique, minus, deserunt
                rerum doloribus cupiditate dolor amet illo, vel eveniet
                explicabo fugiat sunt porro nobis a aperiam nihil suscipit!
              </CardText>
            </CardBody>
          </Card>

          <Card className="my-2">
            <CardBody>
              <CardTitle tag="h5">Service 2</CardTitle>
              <CardText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eligendi sequi exercitationem molestias quo perferendis veniam
                optio illo voluptatibus ducimus, provident temporibus, repellat
                fuga eos earum blanditiis reiciendis! Sit quas in voluptas
                minima aliquam hic mollitia fugiat iste recusandae nostrum nulla
                unde consequatur numquam dicta cum saepe rem, eligendi
                assumenda. Temporibus fuga a quod, est quia veritatis modi rem
                tenetur eligendi sunt eveniet voluptates placeat. Eveniet
                dignissimos dolore atque nulla asperiores laudantium odit id
                possimus? Deleniti, aliquam consequuntur saepe iure deserunt
                delectus fugiat ratione quae accusantium ea dicta quis inventore
                quia pariatur quas, exercitationem nemo odit ipsam? Veritatis
                harum fugiat ratione.
              </CardText>
            </CardBody>
          </Card>

          <Card className="my-2">
            <CardBody>
              <CardTitle tag="h5">Service 3</CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a
                quibusdam rerum accusantium, sapiente vitae explicabo nostrum
                sed, earum dolore repudiandae numquam dolorem at saepe
                accusamus? Nemo tempore molestiae aperiam fugit hic rerum
                consectetur, ducimus omnis modi. Quas, adipisci ducimus ipsa rem
                dolorem quo rerum quam laboriosam ipsam nihil totam tempore ea
                in, sit dignissimos facere numquam voluptate voluptates quaerat
                ullam, architecto hic nam non assumenda. Qui repudiandae odio
                repellat.
              </CardText>
            </CardBody>
          </Card>
        </div>

        <div class="p-5">
          <FAQ />
        </div>
      </div>
    </>
  );
}
