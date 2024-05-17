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
              <NavLink className={activeTab === '2' ? activeStyles : styles}  onClick={() => setActiveTab('2')}>
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
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, eveniet error! Eum, eos? Dignissimos possimus quibusdam ipsam doloribus eum iure autem dolor recusandae a deleniti, animi fugit? Deserunt rem placeat et! Tempore commodi itaque neque optio incidunt laborum odio, quis nulla minima dicta perferendis veritatis eos cum est harum ex accusantium, minus doloribus dolorem inventore placeat voluptatem modi. Dolorem, ea nulla omnis animi fugiat asperiores cum, rem fugit fuga earum impedit porro sapiente sed. Maxime aliquam veniam eligendi nobis consectetur sunt omnis! Facere autem cumque nam commodi quod obcaecati optio culpa eius perspiciatis voluptate tenetur, corrupti illum earum aut voluptates.
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas dolorum nemo quis nesciunt, minima repellat corrupti nobis dicta natus necessitatibus, optio possimus maiores eveniet nulla officiis sed? Id accusantium praesentium voluptates optio totam quod natus doloribus nostrum fugiat sunt necessitatibus numquam modi placeat aperiam veniam reiciendis illo facilis nisi cumque, accusamus tempore eius? Temporibus nam suscipit in quas iusto. Similique corporis inventore, modi, enim optio iure possimus amet sed accusamus autem veritatis nulla quas doloribus fuga aliquid ad iste libero labore. Labore, itaque! Hic sint cumque numquam nihil maiores molestias facere illo, repudiandae reiciendis vero consectetur consequatur ab repellat vel obcaecati veritatis fuga eos in quos. Exercitationem nulla ratione sed, mollitia maiores magnam a voluptatibus quos, est dignissimos similique quo hic eos aliquid aperiam dicta id vel praesentium labore. Quo corporis quam sapiente nihil rerum? In optio odio dicta dolore architecto ex inventore delectus ea harum voluptatum nemo facere cumque doloremque soluta ipsam voluptatem, quas quo laboriosam, culpa voluptates, labore minus aut placeat. Officia atque distinctio ex magnam placeat, totam, natus ipsum inventore neque adipisci quam porro. Quaerat, veritatis? Autem rerum id, iste nisi vitae est consequatur saepe ducimus ipsum vel laudantium, neque illo optio nemo unde inventore natus?
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
