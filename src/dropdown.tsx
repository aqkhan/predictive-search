import React, { useRef, useEffect, Component } from "react";
import OutsideClick from "@alphasquad/outside-click";
interface innerProps {
    results: any[];
    selectValue: (text: string) => void;
    setShow: (text: boolean) => void;
}

const Dropdown: React.FC<innerProps> = ({ results, selectValue, setShow }) => {

    const setShowMain = () => {
        setShow(false);
    }

    return <OutsideClick onClose={setShowMain}>
        <div className="__resultsWrapper">
            {
                results.length === 0 ? <div className="__results">No result found</div> :  results.map((item, index) => {
                    return <div className="__results" key={index} onClick={() => selectValue(item)}>{item}</div>
                })
            }
        </div>
    </OutsideClick>
}

export default Dropdown;