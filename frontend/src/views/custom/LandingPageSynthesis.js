import React from "react";
import {Link} from "react-router-dom";
import Button from "../../components/Elements/Button";

export default class LandingPageSynthesis extends React.Component {

    render() {
        return (
            <div className="bg-gradient-to-r from-emerald-600 to-teal-400 min-h-screen">
                <div className="flex justify-center min-h-screen">
                    <div className="flex flex-col justify-center w-50">
                        <div className="display-1 title-up text-white text-shadow-md mb-8 text-center font-bold">
                            Crome
                        </div>
                        <div className="text-base text-white mb-12 text-shadow-md text-justify italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="flex justify-center">
                            <Link to="/synthesis" class="nav-link">
                                <Button color="white" outline={true} size="lg">
                                <span className="text-lg">
                                    Start Crome
                                </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
