import React from "react";

type PageTitlePropsType = {
    title: string;
}
export const PageTitle = (props: PageTitlePropsType) => {
    console.log("PageTitle is Rendering");
    return <h1>{props.title}</h1>
}