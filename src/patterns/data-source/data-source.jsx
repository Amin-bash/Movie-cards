import React from "react";
import { FULFILLED, PENDING, REJECTED } from "../../utils/constants/api-source";
import { NoDataFound, Loader } from "../../components/common";

export const DataSource = ({ children, resourceName, data, status }) => {
  if (data?.length === 0 && status !== PENDING) return <NoDataFound />;
  if (status === PENDING) return <Loader />;
  else if (status === REJECTED) return <h1>Somethine went wrong ...</h1>;
  else if (status === FULFILLED)
    return React.Children.map(
      children,
      (child) =>
        React.isValidElement(child) &&
        data.map((item, index) =>
          React.cloneElement(child, { [resourceName]: item })
        )
    );
};
