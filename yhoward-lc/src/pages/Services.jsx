import React from "react";
import FAQ from "../components/FAQ"
import {
  Card, CardBody, CardTitle, CardText, Button
} from "reactstrap"

export default function Services() {


  return (
    <>
      <div class="text-center bg-[#81C3D7]">
        <h2>Services</h2>
        <div class="grid grid-cols-2 grid-rows-3">
          <img class="bg-cover row-span-3" src="https://t3.ftcdn.net/jpg/05/22/92/86/360_F_522928616_xqzObEMWOQs25Aiz4iubcgLndw2jGsih.jpg"></img>
          <h3>Verve = Energy</h3>
          <h3>Veritas = Truth</h3>
          <h4>Verve & Veritas Coaching represents the high energy and honesty needed for genuine, long-lasting change. Ready to embark on your transformative journey?</h4>
        </div>

        <br></br>

        Why choose me as your guide?

        <li>Purpose:  I genuinely care about your story and success. This is not just a job; it’s my passion to see you thrive!</li>
        <li>Proven results: I cultivate and empower individuals to triumph through challenging transitions, achieving personal and professional fulfillment.</li>
        <li>Compassionate listening: I create a judgment-free space for you to share your hopes, fears, and questions without hesitation.</li>
        <li>Tailored approach: I personalize my coaching to your unique needs, goals, and learning style.</li>
        <li>Deeply inclusive: I hold a strong commitment to creating a safe and affirming space for all individuals, regardless of race, ethnicity, sexual orientation, or gender identity. I understand the nuances of BIPOC experiences and walk alongside you with cultural sensitivity, warmth, and unconditional regard.</li>

        <br></br>

        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5">
              Service 1
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>
        <Card className="my-2">
          <CardBody>
            <CardTitle tag="h5">
              Service 2
            </CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
          </CardBody>
        </Card>

        <br></br>

        My approach is deeply collaborative, holistic, and strengths-based:

        <li>Uncover your authentic self: Explore your values, goals, and desires to chart a future aligned with your true purpose.</li>
        <li>Embrace transformation: Address emotional blocks and limiting beliefs with compassion and acceptance, fostering self-discovery and growth.</li>
        <li>Navigate complexity: Equip yourself with practical tools and strategies for managing stress, building resilience, and navigating challenges with grace.</li>
        <li>Celebrate your journey: Recognize progress, maintain motivation, and savor the transformative power of change.</li>

        <br></br>

        <Button color="primary">
          Book Now!
        </Button>

        <br></br>
        <br></br>
        <FAQ />
        <br></br>
      </div>
    </>
  )
}
