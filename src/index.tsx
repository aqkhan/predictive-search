import React, {useEffect, useState} from "react";
import Dropdown from "./dropdown";

interface InnerProps {
    keyword: string;
    getKeyword: (text: string) => void;
    placeholder?: string;
    wrapperClass?: string;
    results: any[];
};

const PredictiveSearch: React.FC<InnerProps> = ({keyword, getKeyword, placeholder, wrapperClass, results}) => {


    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);


    useEffect(() => {
        if(keyword){
            setValue(keyword);
            setShow(true);
        }else {
            setValue(keyword);
            setShow(false);
        }
    }, [keyword]);
    const getVal = (event: React.ChangeEvent<HTMLInputElement>) => {
        getKeyword(event.target.value);
    };

    const selectValue = (item: string) => {
        getKeyword(item);
        setShow(false);
    }

    return <div className={"__autocomplete"+ (wrapperClass ? " wrapperClass": "")}>
        <input id="myInput" type="text" value={value ? value : ""} name="myCountry" onChange={getVal} placeholder={placeholder}/>
        {
            (show) &&
            <Dropdown results={results} setShow={setShow} selectValue={selectValue}/>
        }
        <style>{`
            .__autocomplete{
                position: relative;
            }
            #myInput{
                height: 30px;
                width: 100%;
                padding: 3px;
                font-size: 16px;

            }
            .__resultsWrapper{
                position: absolute;
                top: 40px;
                left: 0;
                right: 0;
                text-align: left;
                max-height: 308px;
                overflow: auto;
                background-color: #fff;
                color: black;
                z-index: 999;
                padding-bottom: 10px;
            }
            .__results{
                padding-top: 10px;
                padding-left: 10px;
                cursor: pointer;
            }
        `}</style>
    </div>
}

export default PredictiveSearch;