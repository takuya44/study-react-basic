import classes from "./CssModules.module.scss";

const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- Css Modules -</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};

export default CssModules;
