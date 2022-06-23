import React from "react";
import {Link} from "react-router-dom";
import Button from "../../components/Elements/Button";

export default class LandingPageContracts extends React.Component {

    render() {
        return (
            <div className="bg-gradient-to-r from-red-500 to-purple-500 min-h-screen">
                <div className="flex justify-center min-h-screen">
                    <div className="flex flex-col justify-center w-50">
                        <div className="transition ease-in-out duration-700 hover:custom-transform display-1 title-up text-white text-shadow-md mb-8 hover:text-lg text-center font-bold" >
                            Contracts
                        </div>
                        <div className="text-base text-white mb-12 text-shadow-md text-justify italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className="flex justify-center">
                            <Link to="/contracts" className="nav-link">
                                <Button color="white" outline={true} size="customLg">
                                <span className="text-lg">
                                    Start Contracts
                                </span>
                                    <i className="ml-2 text-lg fa-solid fa-arrow-right"></i>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
