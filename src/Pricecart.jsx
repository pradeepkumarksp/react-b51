import React from "react";
import "./App.css"

const Pricecart = (props) => {
    return (
        <>
            <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
            <div className="card-body">
            <h5 className="card-tittle text-uppercase text-centre">{props.value.plan}</h5>
            <h6 className="card-price text-centre">{props.value.price}</h6>
            <hr />
            <ul className="fa-ul">
                <li className={props.value.userEnabler && props.value.highlight ? "": ""}><span className="fa-li" ><i className={props.value.userEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.user}</li>
                <li className={props.value.storageEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.storageEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.storage}</li>
                <li className={props.value.communityAccessEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.communityAccessEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.communityAccess}</li>
                <li className={props.value.publicProjectsEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.publicProjectsEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.publicProjects}</li>
                <li className={props.value.PrivateProjectsEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.PrivateProjectsEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.PrivateProjects}</li>
                <li className={props.value.PhonesupportEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.PhonesupportEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.Phonesupport}</li>
                <li className={props.value.SubdominEnalber ? "": "text-muted"}><span className="fa-li" ><i className={props.value.SubdominEnalber? "fas fa-check": "fas fa-times"}></i></span>{props.value.Subdomin}</li>
                <li className={props.value.statusEnabler ? "": "text-muted"}><span className="fa-li" ><i className={props.value.statusEnabler? "fas fa-check": "fas fa-times"}></i></span>{props.value.Status}</li>

            </ul>
            <div className="d-grid">
            <a href="javascript(void)" className="btn btn-primary text-uppercase">BUTTON</a>

            </div>

            </div>

            </div>

            </div>
        </>
    )
}

export default Pricecart