/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Collapse,
    FormGroup,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
    ModalFooter,
} from "reactstrap";

// core components

function CustomJavascript() {
    // focus states and functions for login modal
    const [nameFocus, setNameFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    // modals states and functions
    const [modalClassic, setModalClassic] = React.useState(false);
    const [modalMini, setModalMini] = React.useState(false);
    const [modalNotice, setModalNotice] = React.useState(false);
    const [modalLogin, setModalLogin] = React.useState(false);
    // collapse states and functions
    const [collapses, setCollapses] = React.useState([1]);
    const changeCollapse = (collapse) => {
        if (collapses.includes(collapse)) {
            setCollapses(collapses.filter((prop) => prop !== collapse));
        } else {
            setCollapses([...collapses, collapse]);
        }
    };
    return (
        <>
            <div className="section section-javascript" id="javascriptComponents">
                <Container>
                    <h3 className="title">Javascript components</h3>
                    <Row id="modals">
                        <Col md="6">
                            <h4>Modal</h4>
                            <Button
                                color="info"
                                className="mr-1"
                                onClick={() => setModalClassic(true)}
                            >
                                <i className="now-ui-icons files_single-copy-04"></i> Classic
                            </Button>
                            <Button
                                color="info"
                                className="mr-1"
                                onClick={() => setModalMini(true)}
                            >
                                <i className="now-ui-icons media-1_button-power"></i> Launch
                                Modal Mini
                            </Button>
                            <Button
                                color="info"
                                className="mr-1"
                                onClick={() => setModalNotice(true)}
                            >
                                <i className="now-ui-icons travel_info"></i> Notice
                            </Button>
                            <Button color="info" onClick={() => setModalLogin(true)}>
                                <i className="now-ui-icons users_single-02"></i> Login Modal
                            </Button>
                            <Modal
                                isOpen={modalClassic}
                                toggle={() => setModalClassic(false)}
                            >
                                <div className="modal-header justify-content-center">
                                    <button
                                        aria-hidden={true}
                                        className="close"
                                        onClick={() => setModalClassic(false)}
                                        type="button"
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h4 className="title title-up">Modal title</h4>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts. Separated they live in Bookmarksgrove right at the
                                        coast of the Semantics, a large language ocean. A small
                                        river named Duden flows by their place and supplies it with
                                        the necessary regelialia. It is a paradisematic country, in
                                        which roasted parts of sentences fly into your mouth.
                                    </p>
                                </div>
                                <ModalFooter>
                                    <Button color="default" type="button">
                                        Nice Button
                                    </Button>
                                    <Button color="danger" onClick={() => setModalClassic(false)}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            <Modal
                                modalClassName="modal-mini modal-info"
                                isOpen={modalMini}
                                toggle={() => setModalMini(false)}
                            >
                                <div className="modal-header justify-content-center">
                                    <div className="modal-profile">
                                        <i className="now-ui-icons users_circle-08"></i>
                                    </div>
                                </div>
                                <div className="modal-body">
                                    <p>Always have an access to your profile</p>
                                </div>
                                <ModalFooter>
                                    <Button className="btn-neutral" color="link" type="button">
                                        Back
                                    </Button>
                                    <Button
                                        className="btn-link"
                                        color="neutral"
                                        onClick={() => setModalMini(false)}
                                    >
                                        Close
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            <Modal isOpen={modalNotice} toggle={() => setModalNotice(false)}>
                                <div className="modal-header">
                                    <button
                                        aria-hidden={true}
                                        className="close"
                                        onClick={() => setModalNotice(false)}
                                        type="button"
                                    >
                                        <i className="now-ui-icons ui-1_simple-remove"></i>
                                    </button>
                                    <h5 className="modal-title" id="myModalLabel">
                                        How Do You Become an Affiliate?
                                    </h5>
                                </div>
                                <div className="modal-body">
                                    <div className="instruction">
                                        <Row>
                                            <Col md="8">
                                                <strong>1. Register</strong>
                                                <p className="description">
                                                    The first step is to create an account at{" "}
                                                    <a
                                                        href="http://www.creative-tim.com/?ref=nuk-pro-react-index"
                                                        target="_blank"
                                                    >
                                                        Creative Tim
                                                    </a>
                                                    . You can choose a social network or go for the
                                                    classic version, whatever works best for you.
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <div className="picture">
                                                    <img
                                                        alt="..."
                                                        className="rounded img-raised"
                                                        src={require("assets/img/pricing1.jpg").default}
                                                    ></img>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="instruction">
                                        <Row>
                                            <Col md="8">
                                                <strong>2. Apply</strong>
                                                <p className="description">
                                                    The first step is to create an account at{" "}
                                                    <a
                                                        href="http://www.creative-tim.com/?ref=nuk-pro-react-index"
                                                        target="_blank"
                                                    >
                                                        Creative Tim
                                                    </a>
                                                    . You can choose a social network or go for the
                                                    classic version, whatever works best for you.
                                                </p>
                                            </Col>
                                            <Col md="4">
                                                <div className="picture">
                                                    <img
                                                        alt="..."
                                                        className="rounded img-raised"
                                                        src={require("assets/img/project9.jpg").default}
                                                    ></img>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <p>
                                        If you have more questions, don't hesitate to contact us or
                                        send us a tweet @creativetim. We{"'"}re here to help!
                                    </p>
                                </div>
                                <ModalFooter className="justify-content-center">
                                    <Button
                                        className="btn-round"
                                        color="info"
                                        onClick={() => setModalNotice(false)}
                                    >
                                        Sounds good!
                                    </Button>
                                </ModalFooter>
                            </Modal>
                            <Modal
                                className="modal-login"
                                modalClassName="modal-info"
                                isOpen={modalLogin}
                                toggle={() => setModalLogin(false)}
                            >
                                <Card
                                    className="card-login card-plain"
                                    data-background-color=""
                                >
                                    <div className="modal-header justify-content-center">
                                        <button
                                            aria-hidden={true}
                                            className="close"
                                            onClick={() => setModalLogin(false)}
                                            type="button"
                                        >
                                            <i className="now-ui-icons ui-1_simple-remove"></i>
                                        </button>
                                        <div className="header header-info text-center">
                                            <div className="logo-container">
                                                <img
                                                    alt="..."
                                                    src={require("assets/img/now-logo.png").default}
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-body">
                                        <Form action="" className="form" method="">
                                            <CardBody>
                                                <InputGroup
                                                    className={
                                                        nameFocus
                                                            ? "no-border input-lg input-group-focus"
                                                            : "no-border input-lg"
                                                    }
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="now-ui-icons users_circle-08"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="First Name..."
                                                        type="text"
                                                        onFocus={() => setNameFocus(true)}
                                                        onBlur={() => setNameFocus(false)}
                                                    ></Input>
                                                </InputGroup>
                                                <InputGroup
                                                    className={
                                                        passwordFocus
                                                            ? "no-border input-lg input-group-focus"
                                                            : "no-border input-lg"
                                                    }
                                                >
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="now-ui-icons ui-1_lock-circle-open"></i>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        placeholder="Password..."
                                                        type="text"
                                                        onFocus={() => setPasswordFocus(true)}
                                                        onBlur={() => setPasswordFocus(false)}
                                                    ></Input>
                                                </InputGroup>
                                            </CardBody>
                                        </Form>
                                    </div>
                                    <ModalFooter className="text-center">
                                        <Button
                                            block
                                            className="btn-neutral btn-round"
                                            color="info"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="lg"
                                        >
                                            Get Started
                                        </Button>
                                    </ModalFooter>
                                </Card>
                            </Modal>
                        </Col>
                        <Col md="6">
                            <h4>Popovers</h4>
                            <Button
                                color="default"
                                className="mr-1"
                                id="tooltip731365854"
                                type="button"
                            >
                                On left
                            </Button>
                            <UncontrolledPopover
                                placement={window.innerWidth > 991 ? "left" : "top"}
                                target="tooltip731365854"
                                className="popover-info"
                            >
                                <PopoverHeader>Popover On Left</PopoverHeader>
                                <PopoverBody>
                                    Here will be some very useful information about his popover.
                                </PopoverBody>
                            </UncontrolledPopover>
                            <Button
                                color="default"
                                className="mr-1"
                                id="tooltip458615484"
                                type="button"
                            >
                                On top
                            </Button>
                            <UncontrolledPopover placement="top" target="tooltip458615484">
                                <PopoverHeader>Popover on Top</PopoverHeader>
                                <PopoverBody>
                                    Here will be some very useful information about his popover.
                                </PopoverBody>
                            </UncontrolledPopover>
                            <Button
                                color="default"
                                className="mr-1"
                                id="tooltip511894367"
                                type="button"
                            >
                                On right
                            </Button>
                            <UncontrolledPopover
                                target="tooltip511894367"
                                placement={window.innerWidth > 991 ? "right" : "bottom"}
                            >
                                <PopoverHeader>Popover on Right</PopoverHeader>
                                <PopoverBody>
                                    Here will be some very useful information about his popover.
                                    <br /> Here will be some very useful information about his
                                    popover.
                                </PopoverBody>
                            </UncontrolledPopover>
                            <Button color="default" id="tooltip179222853" type="button">
                                On bottom
                            </Button>
                            <UncontrolledPopover placement="bottom" target="tooltip179222853">
                                <PopoverHeader>Popover on Bottom</PopoverHeader>
                                <PopoverBody>
                                    Here will be some very useful information about his popover.
                                </PopoverBody>
                            </UncontrolledPopover>
                        </Col>
                        <br></br>
                        <br></br>
                        <Col md="6">
                            <h4>Datetimepicker</h4>
                            <Row>
                                <Col md="6">
                                    <div className="datepicker-container">
                                        <FormGroup>
                                            <ReactDatetime
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Datetime Picker Here",
                                                }}
                                            ></ReactDatetime>
                                        </FormGroup>
                                        <FormGroup>
                                            <ReactDatetime
                                                dateFormat={false}
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Time Picker Here",
                                                }}
                                            ></ReactDatetime>
                                        </FormGroup>
                                        <FormGroup>
                                            <ReactDatetime
                                                inputProps={{
                                                    className: "form-control",
                                                    placeholder: "Date Picker Here",
                                                }}
                                                timeFormat={false}
                                            ></ReactDatetime>
                                        </FormGroup>
                                    </div>
                                </Col>
                            </Row>
                            <div id="collapse">
                                <div className="title">
                                    <h4>Collapse</h4>
                                </div>
                                <Row>
                                    <Col md="12">
                                        <div
                                            aria-multiselectable={true}
                                            className="card-collapse"
                                            id="accordion"
                                            role="tablist"
                                        >
                                            <Card className="card-plain">
                                                <CardHeader id="headingOne" role="tab">
                                                    <a
                                                        aria-expanded={collapses.includes(1)}
                                                        data-toggle="collapse"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            changeCollapse(1);
                                                        }}
                                                    >
                                                        Collapsible Group Item #1{" "}
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                                                    </a>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(1)}>
                                                    <CardBody>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                                        high life accusamus terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard
                                                        dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                                        a bird on it squid single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh
                                                        helvetica, craft beer labore wes anderson cred
                                                        nesciunt sapiente ea proident. Ad vegan excepteur
                                                        butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt
                                                        you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </CardBody>
                                                </Collapse>
                                            </Card>
                                            <Card className="card-plain">
                                                <CardHeader id="headingTwo" role="tab">
                                                    <a
                                                        aria-expanded={collapses.includes(2)}
                                                        data-toggle="collapse"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            changeCollapse(2);
                                                        }}
                                                    >
                                                        Collapsible Group Item #2{" "}
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                                                    </a>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(2)}>
                                                    <CardBody>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                                        high life accusamus terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard
                                                        dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                                        a bird on it squid single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh
                                                        helvetica, craft beer labore wes anderson cred
                                                        nesciunt sapiente ea proident. Ad vegan excepteur
                                                        butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt
                                                        you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </CardBody>
                                                </Collapse>
                                            </Card>
                                            <Card className="card-plain">
                                                <CardHeader id="headingThree" role="tab">
                                                    <a
                                                        aria-expanded={collapses.includes(3)}
                                                        data-toggle="collapse"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            changeCollapse(3);
                                                        }}
                                                    >
                                                        Collapsible Group Item #3{" "}
                                                        <i className="now-ui-icons arrows-1_minimal-down"></i>
                                                    </a>
                                                </CardHeader>
                                                <Collapse isOpen={collapses.includes(3)}>
                                                    <CardBody>
                                                        Anim pariatur cliche reprehenderit, enim eiusmod
                                                        high life accusamus terry richardson ad squid. 3
                                                        wolf moon officia aute, non cupidatat skateboard
                                                        dolor brunch. Food truck quinoa nesciunt laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                                                        a bird on it squid single-origin coffee nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh
                                                        helvetica, craft beer labore wes anderson cred
                                                        nesciunt sapiente ea proident. Ad vegan excepteur
                                                        butcher vice lomo. Leggings occaecat craft beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt
                                                        you probably haven't heard of them accusamus labore
                                                        sustainable VHS.
                                                    </CardBody>
                                                </Collapse>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6">
                            <h4>Tooltips</h4>
                            <Button
                                className="btn-tooltip mr-1"
                                color="default"
                                id="tooltip632862085"
                                type="button"
                            >
                                On left
                            </Button>
                            <UncontrolledTooltip
                                delay={100}
                                placement="left"
                                target="tooltip632862085"
                            >
                                Tooltip on left
                            </UncontrolledTooltip>
                            <Button
                                className="btn-tooltip mr-1"
                                color="default"
                                id="tooltip605005046"
                                type="button"
                            >
                                On top
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                placement="top"
                                target="tooltip605005046"
                            >
                                Tooltip on top
                            </UncontrolledTooltip>
                            <Button
                                className="btn-tooltip mr-1"
                                color="default"
                                id="tooltip117625561"
                                type="button"
                            >
                                On bottom
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                placement="bottom"
                                target="tooltip117625561"
                            >
                                Tooltip on bottom
                            </UncontrolledTooltip>
                            <Button
                                className="btn-tooltip"
                                color="default"
                                id="tooltip838650451"
                                type="button"
                            >
                                On right
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                placement="right"
                                target="tooltip838650451"
                            >
                                Tooltip on right
                            </UncontrolledTooltip>
                            <div className="clearfix"></div>
                            <br></br>
                            <br></br>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default CustomJavascript;
