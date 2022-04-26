import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

function ContentAreas() {
  return (
    <>
      <div className="section">
        <Container>
          <div className="space-70"></div>
          <div className="cd-section" id="contentAreas">
            <h3 className="title">Content Areas</h3>
            <div id="tables">
              <div className="title">
                <h3>
                  <small>Tables</small>
                </h3>
              </div>
              <Row>
                <Col md="12">
                  <h4>
                    <small>Simple Table</small>
                  </h4>
                </Col>
                <Col className="ml-auto mr-auto" md="8">
                  <h6>Simple With Actions</h6>
                  <Card className="card-plain">
                    <CardBody>
                      <Table responsive>
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th>Name</th>
                            <th>Job Position</th>
                            <th className="text-center">Since</th>
                            <th className="text-right">Salary</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td>Andrew Mike</td>
                            <td>Develop</td>
                            <td className="text-center">2013</td>
                            <td className="text-right">€ 99,225</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td>John Doe</td>
                            <td>Design</td>
                            <td className="text-center">2012</td>
                            <td className="text-right">€ 89,241</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td>Mike Monday</td>
                            <td>Marketing</td>
                            <td className="text-center">2013</td>
                            <td className="text-right">€ 49,990</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon btn-neutral mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-neutral mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-neutral"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">5</td>
                            <td>Paul Dickens</td>
                            <td>Communication</td>
                            <td className="text-center">2015</td>
                            <td className="text-right">€ 69,201</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon btn-neutral mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-neutral mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-neutral"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td>Alex Mike</td>
                            <td>Design</td>
                            <td className="text-center">2010</td>
                            <td className="text-right">€ 92,144</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-round"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center">6</td>
                            <td>Manuel Rico</td>
                            <td>Manager</td>
                            <td className="text-center">2012</td>
                            <td className="text-right">€ 99,201</td>
                            <td className="text-right">
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="info"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons users_single-02"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-2_settings-90"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-round"
                                color="danger"
                                size="sm"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                  <h6>Striped With Checkboxes</h6>
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h4"></CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive striped>
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th className="text-center"></th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th className="text-center">Qty</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Moleskine Agenda</td>
                            <td>Office</td>
                            <td className="text-center">25</td>
                            <td className="text-right">€ 49</td>
                            <td className="text-right">€ 1,225</td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Stabilo Pen</td>
                            <td>Office</td>
                            <td className="text-center">30</td>
                            <td className="text-right">€ 10</td>
                            <td className="text-right">€ 300</td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>A4 Paper Pack</td>
                            <td>Office</td>
                            <td className="text-center">50</td>
                            <td className="text-right">€ 10.99</td>
                            <td className="text-right">€ 109</td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Apple iPad</td>
                            <td>Meeting</td>
                            <td className="text-center">10</td>
                            <td className="text-right">€ 499.00</td>
                            <td className="text-right">€ 4,990</td>
                          </tr>
                          <tr>
                            <td className="text-center">5</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Apple iPhone</td>
                            <td>Communication</td>
                            <td className="text-center">10</td>
                            <td className="text-right">€ 599.00</td>
                            <td className="text-right">€ 5,999</td>
                          </tr>
                          <tr>
                            <td colSpan="5"></td>
                            <td className="td-total">Total</td>
                            <td className="td-price">€ 35,999</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                  <h4>
                    <small>Shopping Cart Table</small>
                  </h4>
                </Col>
                <Col md="12">
                  <Card className="card-plain">
                    <CardBody>
                      <Table className="table-shopping" responsive>
                        <thead>
                          <tr>
                            <th className="text-center"></th>
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Qty</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={
                                    require("assets/img/saint-laurent.jpg")
                                      .default
                                  }
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Suede Biker Jacket
                              </a>
                              <br></br>
                              <small>by Saint Laurent</small>
                            </td>
                            <td>Black</td>
                            <td>M</td>
                            <td className="td-number">
                              <small>€</small>
                              3,390
                            </td>
                            <td className="td-number">
                              1{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              549
                            </td>
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip109218971"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip109218971"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={
                                    require("assets/img/balmain.jpg").default
                                  }
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Jersey T-Shirt
                              </a>
                              <br></br>
                              <small>by Balmain</small>
                            </td>
                            <td>Black</td>
                            <td>M</td>
                            <td className="td-number">
                              <small>€</small>
                              499
                            </td>
                            <td className="td-number">
                              2{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              998
                            </td>
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip230976474"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip230976474"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/prada.jpg").default}
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Slim-Fit Swim Short
                              </a>
                              <br></br>
                              <small>by Prada</small>
                            </td>
                            <td>Red</td>
                            <td>M</td>
                            <td className="td-number">
                              <small>€</small>
                              200
                            </td>
                            <td className="td-number">
                              1{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              799
                            </td>
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip11104356"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip11104356"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3"></td>
                            <td className="td-total">Total</td>
                            <td className="td-price">
                              <small>€</small>
                              2,346
                            </td>
                            <td className="text-right" colSpan="3">
                              <Button
                                className="btn-round"
                                color="info"
                                type="button"
                              >
                                Complete Purchase{" "}
                                <i className="now-ui-icons arrows-1_minimal-right"></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
            <div className="space-50"></div>
            <div id="comments">
              <div className="title">
                <h3>
                  <small>Comments</small>
                </h3>
              </div>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <div className="media-area">
                    <h3 className="title text-center">
                      <small>10 Comments</small>
                    </h3>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("assets/img/marie.jpg").default}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          Tina Andrew{" "}
                          <small className="text-muted">· 7 minutes ago</small>
                        </Media>
                        <p>
                          Chance too good. God level bars. I'm so proud of
                          @LifeOfDesiigner #1 song in the country. Panda! Don't
                          be scared of the truth because we need to restart the
                          human foundation in truth I stand with the most
                          humility. We are so blessed!
                        </p>
                        <p>
                          All praises and blessings to the families of people
                          who never gave up on dreams. Don't forget, You're
                          Awesome!
                        </p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip942449042"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip942449042"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            243
                          </Button>
                        </div>
                        <Media className="media-post">
                          <a
                            className="pull-left author"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                className="img-raised"
                                object
                                src={require("assets/img/michael.jpg").default}
                              ></Media>
                            </div>
                          </a>
                          <Media body>
                            <Input
                              placeholder="Write a nice reply or go home..."
                              type="textarea"
                              rows="4"
                            ></Input>
                            <div className="media-footer">
                              <Button
                                className="pull-right"
                                color="info"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-1_send"></i> Reply
                              </Button>
                            </div>
                          </Media>
                        </Media>
                      </Media>
                    </Media>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("assets/img/olivia.jpg").default}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          John Camber{" "}
                          <small className="text-muted">· Yesterday</small>
                        </Media>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>Don't forget, You're Awesome!</p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip289520285"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip289520285"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            25
                          </Button>
                        </div>
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                className="img-raised"
                                object
                                src={require("assets/img/emily.jpg").default}
                              ></Media>
                            </div>
                          </a>
                          <Media body>
                            <Media heading tag="h5">
                              Tina Andrew{" "}
                              <small className="text-muted">· 2 Days Ago</small>
                            </Media>
                            <p>
                              Hello guys, nice to have you on the platform!
                              There will be a lot of great stuff coming soon. We
                              will keep you posted for the latest news.
                            </p>
                            <p>Don't forget, You're Awesome!</p>
                            <div className="media-footer">
                              <Button
                                className="btn-neutral pull-right"
                                color="info"
                                href="#pablo"
                                id="tooltip994177304"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-1_send"></i> Reply
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                target="tooltip994177304"
                              >
                                Reply to Comment
                              </UncontrolledTooltip>
                              <Button
                                className="btn-neutral pull-right"
                                color="danger"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                                243
                              </Button>
                            </div>
                          </Media>
                        </Media>
                      </Media>
                    </Media>
                    <Media>
                      <a
                        className="pull-left"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            object
                            src={require("assets/img/james.jpg").default}
                          ></Media>
                        </div>
                      </a>
                      <Media body>
                        <Media heading tag="h5">
                          Rosa Thompson{" "}
                          <small className="text-muted">· 2 Days Ago</small>
                        </Media>
                        <p>
                          Hello guys, nice to have you on the platform! There
                          will be a lot of great stuff coming soon. We will keep
                          you posted for the latest news.
                        </p>
                        <p>Don't forget, You're Awesome!</p>
                        <div className="media-footer">
                          <Button
                            className="btn-neutral pull-right"
                            color="info"
                            href="#pablo"
                            id="tooltip449823762"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-1_send"></i> Reply
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip449823762"
                          >
                            Reply to Comment
                          </UncontrolledTooltip>
                          <Button
                            className="btn-neutral pull-right"
                            color="danger"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="now-ui-icons ui-2_favourite-28"></i>{" "}
                            243
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    <Pagination
                      className="pagination pagination-info justify-content-center"
                      listClassName="pagination-info justify-content-center"
                    >
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Previous"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className="fa fa-angle-double-left"
                            ></i>
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          aria-label="Next"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span aria-hidden={true}>
                            <i
                              aria-hidden={true}
                              className="fa fa-angle-double-right"
                            ></i>
                          </span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </div>
                  <h4 className="text-center">
                    Post your comment <br></br>
                    <small className="text-muted">- Logged In User -</small>
                  </h4>
                  <Media className="media-post">
                    <a
                      className="pull-left author"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          object
                          src={require("assets/img/james.jpg").default}
                        ></Media>
                      </div>
                    </a>
                    <Media body>
                      <Input
                        placeholder="Write some nice stuff or nothing..."
                        type="textarea"
                        rows="6"
                      ></Input>
                      <div className="media-footer">
                        <Button
                          className="btn-wd pull-right"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Post Comment
                        </Button>
                      </div>
                    </Media>
                  </Media>
                  <h4 className="text-center">
                    Post your comment <br></br>
                    <small className="text-muted">- Not Logged In User -</small>
                  </h4>
                  <Media className="media-post">
                    <a
                      className="pull-left author"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="avatar">
                        <Media
                          alt="..."
                          className="img-raised"
                          object
                          src={require("assets/img/placeholder.jpg").default}
                        ></Media>
                      </div>
                    </a>
                    <Media body>
                      <Form className="form">
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <Input
                                placeholder="Your Name"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <Input
                                placeholder="Your email"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Input
                          placeholder="Write some nice stuff or nothing..."
                          type="textarea"
                          rows="6"
                        ></Input>
                        <div className="media-footer">
                          <h6 className="text-muted">Sign in with</h6>
                          <Button
                            className="btn-icon btn-round"
                            color="twitter"
                          >
                            <i className="fab fa-twitter"></i>
                          </Button>
                          <Button
                            className="btn-icon btn-round"
                            color="facebook"
                          >
                            <i className="fab fa-facebook-square"></i>
                          </Button>
                          <Button className="btn-icon btn-round" color="google">
                            <i className="fab fa-google-plus-square"></i>
                          </Button>
                          <Button
                            className="pull-right"
                            color="info"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Post Comment
                          </Button>
                        </div>
                      </Form>
                    </Media>
                  </Media>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContentAreas;
