

type AccordionTitlePropsType = {
    titleValue: string
    setExpanded:()=>void
}
export const ControlledAccordionTitle = ({titleValue,setExpanded}: AccordionTitlePropsType) => {
    console.log("UncontrolledAccordion title is rendering")
    return (
        <>
            <h3 onClick={setExpanded}>-- {titleValue} --</h3>
        </>
    )
};