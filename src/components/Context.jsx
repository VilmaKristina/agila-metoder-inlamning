import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ProductProvider = (props) => {
  const [openProductBacklog, setProductBacklog] = useState(false);
  const [openSprintPlanning, setSprintPlanning] = useState(false);
  const [openSprintBacklog, setSprintBacklog] = useState(false);
  const [openSprint, setSprint] = useState(false);
  const [openProductIncrement, setProductIncrement] = useState(false);
  const [openSprintReview, setSprintReview] = useState(false);
  const [openSprintRetrospective, setSprintRetrospective] = useState(false);
  const [openTools, setTools] = useState(false);

  return (
    <ListContext.Provider
      value={{
        openProductBacklog,
        setProductBacklog,
        openSprintPlanning,
        setSprintPlanning,
        openSprintBacklog,
        setSprintBacklog,
        openSprint,
        setSprint,
        openProductIncrement,
        setProductIncrement,
        openSprintReview,
        setSprintReview,
        openSprintRetrospective,
        setSprintRetrospective,
        openTools,
        setTools,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
