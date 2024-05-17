import React, { useState } from "react";
import FAQ from "../components/FAQ";
import { Card, CardTitle, CardText, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import Testimonials from "../components/Testimonials";
//TODO update FAQ info and Testimonials...

export default function Services() {

  // State for current active Tab 
  let [activeTab, setActiveTab] = useState('1');

  const activeStyles = ('active text-black select-none')
  const styles = ('text-slate-400 select-none')

  return (
    <>
      <div className="text-center font-basker">
        <h2 className="p-4 text-6xl">Services</h2>

        <div class="p-5">
          <Nav tabs justified>

            <NavItem>
              {/* <NavLink active={activeTab === '1' ? 'True' : 'False'} className="text-black" onClick={() => setActiveTab('1')}>*/}
              <NavLink className={activeTab === '1' ? activeStyles : styles} onClick={() => setActiveTab('1')}>
                Transitioning Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={activeTab === '2' ? activeStyles : styles} onClick={() => setActiveTab('2')}>
                Let's talk about Adoption
              </NavLink>
            </NavItem>

          </Nav>

          <TabContent activeTab={activeTab}>

            <TabPane tabId='1'>
              <Row>
                <CardTitle className="text-5xl p-4">
                  Transitioning Services
                </CardTitle>

                <Col>
                  <img className="shadow-2xl w-full rounded-lg" src='https://media.istockphoto.com/id/1372615051/photo/caring-female-high-school-teacher-tutors-female-student.jpg?s=612x612&w=0&k=20&c=80rQ9bYR2K5L-K3l_BHfF6RZ_uwl9M5R-VWWgVB0_IU=' alt='img' />
                </Col>

                <Col sm="6">
                  <Card body>
                    <CardText>
                      People 35 years and older may face a unique set of challenges as they navigate through
                      midlife and plans for retirement. Have you experienced the sweet taste of success only
                      to have it replaced by a lack of growth opportunities and/or complacency? Do you feel
                      pulled in too many directions? Is the life you are living, the life you want? When you are
                      ready to leave your daily monotony of existence, I will help guide you to recognize the
                      untapped opportunities and gifts needed to break through and break free!
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId='2'>
              <Row>
                <CardTitle className="text-5xl p-4">
                  Let's talk about Adoption
                </CardTitle>
                <Col>
                  <img className="shadow-2xl w-full rounded-lg" src='https://t3.ftcdn.net/jpg/05/22/92/86/360_F_522928616_xqzObEMWOQs25Aiz4iubcgLndw2jGsih.jpg' alt='img' />
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardText>
                      Adoption is often considered a gift – for both the adoptee and the adoptive parents. Yet
                      many times the adoptee is left with a multitude of unresolved thoughts and beliefs. Are
                      you considering seeking out your birth parents? Concerned about the potential
                      blowback from both adoptive and birth families if you do? Are you a transracial or
                      biracial adoptee who has had to grapple with living life between two or more worlds?
                      As a biracial adoptee from a closed adoption, come and be present in my safe place. I
                      can be a thought and a heart partner for you, as you find your sense of wholeness,
                      belonging, and inner peace.
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>

          </TabContent>

        </div>

        <div class="p-5 ">
          <Testimonials />
        </div>

        <div className="p-5 gap-5">
          {/* <img
            className="shadow-2xl"
            src="https://t3.ftcdn.net/jpg/05/22/92/86/360_F_522928616_xqzObEMWOQs25Aiz4iubcgLndw2jGsih.jpg"
            alt=''
          ></img> */}
          <div class="bg-white p-5 border-5 border-black shadow-2xl">
            <h3 className="text-4xl">
              My approach is deeply collaborative, holistic, and
              strengths-based:
            </h3>
            <br></br>
            <ul className="text-2xl p-4">
              <strong>Uncover your authentic self: </strong>Explore your values,
              goals, and desires to chart a future aligned with your true
              purpose.
            </ul>
            <ul className="text-2xl p-4">
              <strong>Embrace transformation: </strong>Address emotional blocks
              and limiting beliefs with compassion and acceptance, fostering
              self-discovery and growth.
            </ul>
            <ul className="text-2xl p-4">
              <strong>Navigate complexity: </strong>Equip yourself with
              practical tools and strategies for managing stress, building
              resilience, and navigating challenges with grace.
            </ul>
            <ul className="text-2xl p-4">
              <strong>Celebrate your journey: </strong>Recognize progress,
              maintain motivation, and savor the transformative power of change.
            </ul>
          </div>
        </div>

        <div class="p-5 shadow-2xl">
          <FAQ />
        </div>
      </div>
    </>
  );
}
