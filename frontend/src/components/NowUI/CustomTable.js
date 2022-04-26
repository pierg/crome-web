import {Button, Card, CardBody, Table} from "reactstrap";
import React from "react";

function CustomTable() {
    return (
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon btn-neutral mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon btn-neutral"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon btn-neutral mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon btn-neutral"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
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
                                <i className="now-ui-icons users_single-02"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round mr-1"
                                color="success"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-2_settings-90"/>
                            </Button>
                            <Button
                                className="btn-icon btn-round"
                                color="danger"
                                size="sm"
                                type="button"
                            >
                                <i className="now-ui-icons ui-1_simple-remove"/>
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>);
}

export default CustomTable;