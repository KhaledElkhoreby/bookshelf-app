import classes from "./NoResults.module.css";

const NoResults = (props) => {
  return (
    <div className={classes.noResults}>
      <p>
        No results found for " <strong>{props.children}</strong> "
      </p>
    </div>
  );
};

export default NoResults;
