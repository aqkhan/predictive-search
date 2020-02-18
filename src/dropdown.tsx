import React, { useRef, useEffect, Component } from "react";
import Close from "./closeDiv";

interface innerProps {
    results: any[];
    selectValue: (text: string) => void;
    setShow: (text: boolean) => void;
}

const Dropdown: React.FC<innerProps> = ({ results, selectValue, setShow }) => {

    const setShowMain = () => {
        setShow(false);
    }

    return <Close onClose={setShowMain}>
        <div className="__resultsWrapper">
            {
                results.length === 0 ? <div className="__results">No result found</div> :  results.map((item, index) => {
                    return <div className="__results" key={index} onClick={() => selectValue(item)}>{item}</div>
                })
            }
        </div>
    </Close>
}

export default Dropdown;