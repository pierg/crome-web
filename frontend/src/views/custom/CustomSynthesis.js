import React from "react";
import $ from "jquery";

$(function() {
    $(".lined").val("test");
});

export default class CustomSynthesis extends React.Component {

    state = {
        textarea: `
        JavaScript was originally developed by Brendan
        Eich of Netscape under the name Mocha,
        which was later renamed to LiveScript,
        and finally to JavaScript.
        `
    }
    render(){
        return (
            <>
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="../../assets/jquery/linedtextarea/jquery-linedtextarea.js"></script>
                <link href="../../assets/jquery/linedtextarea/jquery-linedtextarea.css" rel="stylesheet" type="text/css"/>
                <div className="relative pt-8 pb-12 bg-orange-800">
                    <div className="px-4 md:px-6 mx-auto w-full">
                        <div>
                            <div className="flex flex-wrap justify-center">
                                <h1 className="display-3 title-up text-white font-semibold text-center">
                                    Synthesis
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-2 offset-1 fs-4 text-left text-blueGray-500 uppercase font-bold">
                            ASSUMPTIONS
                        </div>
                        <div className="col-6">
                            <div>
                                <textarea
                                    className="lined"
                                    id="lined"
                                    rows="10"
                                    cols="60"
                                    defaultValue={this.state.textarea}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
