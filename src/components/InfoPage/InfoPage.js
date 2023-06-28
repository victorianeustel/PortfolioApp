import React, { useState, createContext, useContext } from "react";

//the name of this context will be DataContext
const DataContext = createContext({});

function Tab({ id, children }) {
    //extract the 'setActiveTabID` method from the DataContext state.
    const [, setActiveTabID] = useContext(DataContext);
    return (
        <div>
            <div onClick={() => setActiveTabID(id)}>{children}</div>
        </div>
    );
}
function TabPanel({ whenActive, children }) {
    //get the 'activeTabID' state from DataContext.
    const [activeTabID] = useContext(DataContext);
    return <div>{activeTabID === whenActive ? children : null}</div>;
}

Page.Table = function PageTable({ }) {

    return (
        <table id="infoTable">
            <tbody>
                <tr>
                    <td>Type</td>
                    <td>type</td>
                </tr>
            </tbody>
        </table>
    )
}

function PageDescription({ children}) {

}

export default function Page(props) {
    const [activeTabID, setActiveTabID] = useState("a");
    //since this component will provide data to the child components, we will use DataContext.Provider
    return (
        <DataContext.Provider value={[activeTabID, setActiveTabID]}>
            {props.children}
        </DataContext.Provider>
    );
}

// export default TabSwitcher;
// export { Tab, TabPanel };