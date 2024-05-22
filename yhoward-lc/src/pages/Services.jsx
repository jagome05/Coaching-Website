import React, { useState } from "react";
import FAQ from "../components/FAQ";
import {
  Card,
  CardTitle,
  CardText,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import Testimonials from "../components/Testimonials";
import lightbulb from "../../src/image/lightbulb.png";
import stoneman from "../../src/image/stonefig.jpg";

//TODO update FAQ info and Testimonials...
export default function Services() {
  // State for current active Tab
  let [activeTab, setActiveTab] = useState("1");

  const activeStyles = "active text-black text-2xl select-none";
  const styles = "text-slate-400 text-2xl select-none";

  return (
    <>
      <div className="text-center font-basker">
        <h2 className="p-4 text-6xl">Services</h2>

        <div class="p-5">
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={activeTab === "1" ? activeStyles : styles}
                onClick={() => setActiveTab("1")}
              >
                Transitioning Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                className={activeTab === "2" ? activeStyles : styles}
                onClick={() => setActiveTab("2")}
              >
                Let's talk about Adoption
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <CardTitle className="text-5xl p-4">
                  Transitioning Services
                </CardTitle>

                <Col>
                  <img
                    className="shadow-2xl w-full rounded-lg"
                    src={lightbulb}
                    alt="img"
                  />
                </Col>

                <Col sm="6">
                  <Card body>
                    <CardText className="text-2xl p-3">
                      People 35 years and older may face a unique set of
                      challenges as they navigate through midlife and plans for
                      retirement. Have you experienced the sweet taste of
                      success only to have it replaced by a lack of growth
                      opportunities and/or complacency? Do you feel pulled in
                      too many directions? Is the life you are living, the life
                      you want? When you are ready to leave your daily monotony
                      of existence, I will help guide you to recognize the
                      untapped opportunities and gifts needed to break through
                      and break free!
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId="2">
              <Row>
                <CardTitle className="text-5xl p-4">
                  Let's talk about Adoption
                </CardTitle>
                <Col>
                  <img
                    className="shadow-2xl w-full rounded-lg"
                    src={stoneman}
                    alt="img"
                  />
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardText className="text-2xl p-3">
                      Adoption is often considered a gift – for both the adoptee
                      and the adoptive parents. Yet many times the adoptee is
                      left with a multitude of unresolved thoughts and beliefs.
                      Are you considering seeking out your birth parents?
                      Concerned about the potential blowback from both adoptive
                      and birth families if you do? Are you a transracial or
                      biracial adoptee who has had to grapple with living life
                      between two or more worlds? As a biracial adoptee from a
                      closed adoption, come and be present in my safe place. I
                      can be a thought and a heart partner for you, as you find
                      your sense of wholeness, belonging, and inner peace.
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>

        <div class="p-5 ">
        <Testimonials 
        name="Brittany H."
         caption="I can’t say enough good things about working with Yvonne! As a coach, she is fantasticat keeping me grounded, supporting me in problem-solving, and collaborating with mygoals and ambitions. She brings a wealth of knowledge and experience into oursessions together. As a person, she is genuinely kind, has a high level of integrity, and ahuge heart that loves to help others reach their full potential. Through working withYvonne, I’ve been able to gain the confidence to launch my new business and maintainconsistent healthy habits. I highly recommend her!"
         quote="The less you respond to negative people, the more positive your life will
         become.”"
         quoteName="- Paulo Coelho"
        />
        </div>

        <div className="p-5 gap-5">
          <div class="bg-white p-5 border-5 border-black shadow-2xl z-10 relative">
            <h3 className="text-4xl">
              My approach is deeply collaborative, holistic, and
              strengths-based:
            </h3>
            <br></br>
            <ul className="text-2xl p-2">
              <strong>Uncover your authentic self: </strong>Explore your values,
              goals, and desires to chart a future aligned with your true
              purpose.
            </ul>
            <ul className="text-2xl p-2">
              <strong>Embrace transformation: </strong>Address emotional blocks
              and limiting beliefs with compassion and acceptance, fostering
              self-discovery and growth.
            </ul>
            <ul className="text-2xl p-2">
              <strong>Navigate complexity: </strong>Equip yourself with
              practical tools and strategies for managing stress, building
              resilience, and navigating challenges with grace.
            </ul>
            <ul className="text-2xl p-2">
              <strong>Celebrate your journey: </strong>Recognize progress,
              maintain motivation, and savor the transformative power of change.
            </ul>
          </div>
        </div>

        <div class="p-5 shadow-md relative z-10">
          <FAQ />
        </div>
      </div>
    </>
  );
}
