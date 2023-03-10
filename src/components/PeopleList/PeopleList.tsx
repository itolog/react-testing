import React from "react";
// TYPES
import { Users } from "../../shared/types";
// STYLES
import styles from "./peopleList.module.scss";

interface PeopleListProps {
  error: boolean;
  items: Users[] | undefined;
  loading: boolean;
}

const PeopleList: React.FC<PeopleListProps> = ({ error, items, loading }) => {
  if (loading) return <span>Loading ...</span>;
  if (error) return <span>Something went wrong ...</span>;

  return (
    <ul className={styles.PeopleList}>
      {items?.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </ul>
  );
};

export default PeopleList;
