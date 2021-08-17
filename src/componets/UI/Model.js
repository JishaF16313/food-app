import { Fragment } from "react";
import ReactDOM from "react-dom"
import classes from "./Model.module.css";
const Backdrop=props=>{
return <div className={classes.backdrop}/>
}
const Overlays=props=>{
return <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>
</div>
}
const Model=(props)=>{
    const portalElement=document.getElementById('overlays')
    return  <Fragment>
    {ReactDOM.createPortal(<Backdrop/>,portalElement)}
    {ReactDOM.createPortal(<Overlays>{props.children}</Overlays> ,portalElement)}
</Fragment>
   

}
export default Model;