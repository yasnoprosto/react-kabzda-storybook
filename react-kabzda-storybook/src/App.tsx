import React, {useState} from "react";
import "./App.css";
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff";
import {ControlledAccordion} from "./components/ControlledAccordion/ControlledAccordion";
import {PageTitle} from "./components/PageTitle/PageTitle";
import {ControlledRating, RatingValueType} from "./components/ControlledRating/ControlledRating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {ControlledSelect} from "./components/ControlledSelect/ControlledSelect";
import {ControlledSelectOnDiv} from "./components/ControlledSelect/ControlledSelectOnDiv";


const App = () => {
    console.log("App is rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isOn, setIsOn] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>("Moscow");

    const selectItems = [{title: "Moscow", value: "1"}, {title: "Ufa", value: "2"}, {title: "Sochi", value: "3"}];

    const onAccordionClickHandler = (value: any) => {
        alert(value);
    };

    const onSelectClickHandler = (value: string | undefined) => {
        setSelectedValue(value);
    };

    return (
        <div className="App">
            <PageTitle title={"TITLE"}/>
            <div>
                Uncontrolled OnOff <UncontrolledOnOff onChange={setIsOn}/> {isOn.toString()}
            </div>
            <div>
                Uncontrolled Accordion <UncontrolledAccordion titleValue={"Users"}/>
            </div>
            <div>
                Uncontrolled Rating <UncontrolledRating/>
            </div>
            <div>
                Controlled OnOff <ControlledOnOff setIsOn={setIsOn} isOn={isOn}/>
            </div>
            <div>
                Controlled Accordion <ControlledAccordion onClick={onAccordionClickHandler} titleValue={"Controlled"}
                                                          setExpanded={() => {
                                                              setIsExpanded(!isExpanded);
                                                          }}
                                                          expanded={isExpanded} items={[{title: "Denis", value: 1}, {
                title: "Oleg",
                value: 2
            }, {title: "Sasha", value: 3}]}/>
            </div>
            <div>
                Controlled Rating <ControlledRating value={ratingValue} setRatingValue={setRatingValue}/>
            </div>
            <div><ControlledSelect items={selectItems} onChange={onSelectClickHandler} selectedValue={selectedValue}/>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><ControlledSelectOnDiv items={selectItems} onChange={onSelectClickHandler} selectedValue={selectedValue}/></div>
        </div>
    );
};


export default App;
