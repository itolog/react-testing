import React from "react";
// TYPES
import { People } from "../../shared/types";
// STYLES
import styles from "./peopleList.module.scss";

interface PeopleListProps {
  error: boolean;
  items: People[] | undefined;
  loading: boolean;
}

const PeopleList: React.FC<PeopleListProps> = ({ error, items, loading }) => {
  if (loading) return <span>Loading ...</span>;
  if (error) return <span>Something went wrong ...</span>;

  return (
    <div className={styles.PeopleList}>
      <ul>
        {items?.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default PeopleList;
