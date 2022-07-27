import React from 'react';
import {Button, ModalFooter} from "reactstrap";

function ContractModalDetails(props) {

    return(
        <>
            <div className="modal-header justify-content-center">
                <button
                    aria-hidden={true}
                    className="close"
                    onClick={props.close}
                    type="button"
                >
                    <i className={"now-ui-icons ui-1_simple-remove"}/>
                </button>
                <h4 className="title title-up">Contract Details</h4>
            </div>
            <div className="modal-body justify-content-center">
                <div>Content not available yet</div>
            </div>
            <ModalFooter>
                <Button onClick={props.close}>
                    Cancel
                </Button>
            </ModalFooter>
        </>
    );
}

export default ContractModalDetails;