import React, { useState } from "react";
import FAQ from "../components/FAQ";
import { Card, CardTitle, CardText, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap";
import Testimonials from "../components/Testimonials";
//TODO update FAQ info and Testimonials...

export default function Services() {

    // State for current active Tab 
    let [activeTab, setActiveTab] = useState('1');

    const activeStyles = ('active text-black')
    const styles = ('text-slate-400')

  return (
    <>
      <div className="text-center font-basker">
        <h2 className="p-4 text-6xl">Services</h2>

        <div class="p-5">
          <Nav tabs justified>

            <NavItem>
              {/* <NavLink active={activeTab === '1' ? 'True' : 'False'} className="text-black" onClick={() => setActiveTab('1')}>*/}
              <NavLink className={activeTab === '1' ? activeStyles : styles} onClick={() => setActiveTab('1')}>
                Transition Coach
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={activeTab === '2' ? activeStyles : styles}  onClick={() => setActiveTab('2')}>
                Group Session
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={activeTab === '3' ? activeStyles : styles}  onClick={() => setActiveTab('3')}>
                Biracial Service
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className={activeTab === '4' ? activeStyles : styles}  onClick={() => setActiveTab('4')}>
                Adoptee Services
              </NavLink>
            </NavItem>

          </Nav>

          <TabContent activeTab={activeTab}>

            <TabPane tabId='1'>
              <Row>
                <CardTitle className="text-5xl p-4">
                  Transition Coach
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
                  Group Session
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

            <TabPane tabId='3'>
            <Row>
                <CardTitle className="text-5xl p-4">
                  Biracial Services
                </CardTitle>
                <Col>
                  <img className="shadow-2xl w-full rounded-lg" src='https://trinityvillage.org/wp-content/uploads/2021/02/Peer-to-Peer-Recovery.png' alt='img' />
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardText>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quia, facilis et veritatis voluptatibus at quae inventore, earum soluta officiis molestiae natus nisi deleniti vero. Earum unde quam aspernatur qui aut, autem libero, asperiores saepe et facilis ipsa voluptate officia eveniet aliquam laborum nostrum? Nobis dolor saepe odit, quaerat sapiente suscipit nisi iste quam perferendis sint accusamus possimus impedit repellendus nostrum hic architecto odio amet porro repudiandae. Quam saepe eveniet, hic libero dicta rerum expedita ullam quis? Voluptate, in magni sunt amet, incidunt animi odit sit consectetur fuga, officia id? Officiis placeat et, nulla dolor accusamus, pariatur repudiandae quae tempora sit, voluptates harum alias! A, asperiores. At nam accusantium enim quidem, similique error recusandae repudiandae, optio dolorem minus odit fugit sunt beatae delectus! Recusandae delectus, velit provident placeat quaerat, sit illum sunt repellendus reprehenderit eligendi ipsum ab non deleniti laudantium magni eius impedit eveniet quo quod totam aliquam tenetur! Repudiandae modi impedit recusandae pariatur ducimus magni qui ut placeat a error aliquid veritatis quia iusto voluptatibus, dicta earum cum at numquam sapiente maxime, natus ipsum necessitatibus! Minus, beatae ex quos sint, minima atque iure mollitia excepturi modi nisi eveniet aperiam facere dicta et fugit labore error a optio! Molestiae molestias est adipisci voluptatem obcaecati provident itaque hic, quis eius nulla, sapiente mollitia quaerat. Quis cum beatae voluptatibus, deleniti quod, maxime illum perferendis officia magnam recusandae dicta id? Porro voluptatibus fugit neque totam. Ratione, incidunt dolorem aperiam aut minima quasi, architecto magnam nemo ducimus molestiae voluptate? Magnam nam nihil perferendis optio autem a fugiat veniam soluta excepturi et, ab facilis impedit ex consequuntur doloribus minus consectetur porro. Eaque iure, rem iste quaerat, minus nam voluptates obcaecati itaque quod veritatis, mollitia blanditiis soluta voluptatem harum nemo necessitatibus quis ratione ab eligendi recusandae animi. Obcaecati eos corporis possimus quasi nulla veritatis, maxime ab!
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>

            <TabPane tabId='4'>
            <Row>
                <CardTitle className="text-5xl p-4">
                  Adoptee
                </CardTitle>
                <Col>
                  <img className="shadow-2xl w-full rounded-lg" src='https://showhope.org/content/uploads/2021/08/IMGL9816-2-scaled.jpg' alt='img' />
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardText>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur a temporibus, sapiente tempora provident corporis aliquam placeat veniam repudiandae dolore nam ad obcaecati dolorem dolores architecto saepe commodi aspernatur animi dolor necessitatibus esse voluptatibus. Esse, architecto iste vitae voluptate labore dolorum inventore recusandae aperiam, error dolor impedit quis, tempore soluta quisquam eius dolorem voluptas delectus ab ratione quibusdam laudantium itaque. Hic error optio temporibus earum iure voluptatibus alias placeat iusto rem porro, rerum dicta obcaecati possimus! Eveniet quia at tempora, amet esse itaque ex sapiente soluta totam a est exercitationem consequuntur ad necessitatibus debitis suscipit veniam tempore excepturi, officia nesciunt! Dolorum est incidunt harum? Atque, quae quibusdam aut doloribus amet eaque tempora porro placeat harum ea soluta in accusamus pariatur sunt! Obcaecati sint expedita quia alias nobis laboriosam. Doloremque perspiciatis fugit aspernatur, officiis qui assumenda delectus voluptates rerum. Qui ipsum dignissimos, molestiae culpa modi deserunt delectus enim soluta eligendi inventore ullam quisquam error repellendus dicta dolore sapiente illo. Incidunt sunt similique possimus dolores eius, tenetur repellendus, fuga tempora laboriosam aspernatur omnis! Voluptates deserunt repudiandae quia. Fugit hic eos dolore aperiam a non obcaecati laudantium voluptatum labore mollitia libero iste doloribus, dicta quia quo rem recusandae facilis harum accusamus architecto reprehenderit ipsam magnam quas quis. Distinctio iusto odio laborum deleniti eius ea minus voluptas fuga alias, eligendi voluptate, excepturi laudantium perferendis unde eum consectetur neque ipsum facilis similique consequuntur suscipit sed illo, nam earum. Consectetur labore numquam fuga libero fugit quod ab repellendus expedita est porro mollitia rerum quaerat dolor ut quis temporibus amet tempore cum repudiandae, doloremque a quas. Provident iusto nesciunt molestiae, expedita voluptate, saepe, esse nihil temporibus molestias at omnis architecto commodi? Eaque, est dolor id porro delectus eveniet, doloremque perferendis eos voluptatem exercitationem ab? Molestias autem, molestiae impedit atque animi sed quibusdam provident dolores nisi dicta ipsa, mollitia commodi eos laboriosam placeat sit fugiat tempore. Cumque vitae officiis optio laboriosam culpa et reiciendis, ad repellat nobis blanditiis porro. Doloribus, cum? Sunt quibusdam repudiandae optio eius fugiat id obcaecati dolorem itaque! Veniam repellat placeat blanditiis animi explicabo? Repellendus repudiandae dolores ducimus iste provident soluta iure assumenda officiis deleniti, laborum, sapiente error eaque vitae quibusdam libero, sunt voluptatem commodi impedit veritatis ratione. Eius doloremque in pariatur sequi hic vero perspiciatis. Aspernatur tenetur quam voluptates minima odio iure provident? Sequi culpa nam voluptatem corporis animi quam obcaecati accusamus. Quod inventore nam aspernatur! Accusantium perspiciatis suscipit earum expedita, libero veritatis minima consectetur doloremque repellat, magni, totam quos incidunt molestias alias tenetur magnam cum amet animi tempora voluptates quisquam? A aliquid inventore enim similique animi? Laudantium rerum delectus reprehenderit sequi ipsa doloremque, reiciendis saepe? Nemo omnis odit explicabo temporibus, nesciunt fugit, odio perspiciatis quaerat quia dolores nam qui ipsa commodi illo tenetur?
                    </CardText>
                  </Card>
                </Col>
              </Row>
            </TabPane>

          </TabContent>

        </div>

        <div class="p-5 bg-gray-700">
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
