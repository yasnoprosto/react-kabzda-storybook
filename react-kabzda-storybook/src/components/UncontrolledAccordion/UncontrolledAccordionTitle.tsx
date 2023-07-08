import {StateType} from "./Reducer";


type UncontrolledAccordionTitlePropsType = {
    titleValue: string
    setExpanded:(expanded: boolean)=>void
    expanded: boolean
}
export const UncontrolledAccordionTitle = ({titleValue, setExpanded, expanded}: UncontrolledAccordionTitlePropsType) => {
    console.log("UncontrolledAccordion title is rendering")

    let toggleExpanded = !expanded

    return (
        <>
            <h3 onClick={() => {setExpanded(toggleExpanded)}}>-- {titleValue} --</h3>
        </>
    )
};