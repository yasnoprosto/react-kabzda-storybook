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
import {DigitalClock} from "./components/Clock/DigitalClock";


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

    const PageTitleMemo = React.memo(PageTitle)
    const UncontrolledOnOffMemo = React.memo(UncontrolledOnOff)
    const UncontrolledAccordionMemo = React.memo(UncontrolledAccordion)
    const UncontrolledRatingMemo = React.memo(UncontrolledRating)
    const ControlledOnOffMemo = React.memo(ControlledOnOff)
    const ControlledAccordionMemo = React.memo(ControlledAccordion)
    const ControlledRatingMemo = React.memo(ControlledRating)
    const ControlledSelectMemo = React.memo(ControlledSelect)
    const ControlledSelectOnDivMemo = React.memo(ControlledSelectOnDiv)

    return (
        <div className="App">
            <PageTitleMemo title={"TITLE"}/>
            <div>
                Uncontrolled OnOff <UncontrolledOnOffMemo onChange={setIsOn}/> {isOn.toString()}
            </div>
            <div>
                Uncontrolled Accordion <UncontrolledAccordionMemo titleValue={"Users"}/>
            </div>
            <div>
                Uncontrolled Rating <UncontrolledRatingMemo/>
            </div>
            <div>
                Controlled OnOff <ControlledOnOffMemo setIsOn={setIsOn} isOn={isOn}/>
            </div>
            <div>
                Controlled Accordion <ControlledAccordionMemo onClick={onAccordionClickHandler} titleValue={"Controlled"}
                                                          setExpanded={() => {
                                                              setIsExpanded(!isExpanded);
                                                          }}
                                                          expanded={isExpanded} items={[{title: "Denis", value: 1}, {
                title: "Oleg",
                value: 2
            }, {title: "Sasha", value: 3}]}/>
            </div>
            <div>
                Controlled Rating <ControlledRatingMemo value={ratingValue} setRatingValue={setRatingValue}/>
            </div>
            <div><ControlledSelectMemo items={selectItems} onChange={onSelectClickHandler} selectedValue={selectedValue}/>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><ControlledSelectOnDivMemo items={selectItems} onChange={onSelectClickHandler} selectedValue={selectedValue}/></div>
            <div><DigitalClock/></div>
        </div>
    );
};


export default App;
