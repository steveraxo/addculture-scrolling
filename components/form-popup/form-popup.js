import React, { Component } from 'react'
import axios from 'axios'

export default class FormPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formResponse: false,
            nameField: "",
            relationAgencyField: "",
            relationAgencyFieldOther: "",
            agencyNameField: "",
            linkToWebsiteField: "",
            minorityGroupField: "",
            additionalLinksField: "",
        }
    
        this.handleTextInput = this.handleTextInput.bind(this)
        this.handleSelectInput = this.handleSelectInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTextInput(event){
        var targetId = event.target.id; 
        var targetValue = event.target.value; 

        if(targetValue.trim().length > 2){
            document.querySelectorAll(`.${targetId}`)[0].classList.remove("error__input");

            if(targetId === "your-name"){
                this.setState({ nameField: targetValue })
            }
            if(targetId === "relation-with-agency-other"){
                if(document.getElementById("relation-with-agency").value === "Other"){
                    this.setState({ relationAgencyFieldOther: targetValue })
                }
            }
            if(targetId === "name-of-agency"){
                this.setState({ agencyNameField: targetValue })
            }
            if(targetId === "link-to-website"){
                this.setState({ linkToWebsiteField: targetValue })
            }
            if(targetId === "minority-group"){
                this.setState({ minorityGroupField: targetValue })
            }
            if(targetId === "additional-links"){
                this.setState({ additionalLinksField: targetValue })
            }
        }else{
            document.querySelectorAll(`.${targetId}`)[0].classList.add("error__input");
        }
    }
    handleSelectInput(event){
        var targetId = event.target.id; 
        var targetValue = event.target.value; 

        this.setState({ relationAgencyField: targetValue })

        if(document.getElementById("relation-with-agency").value === "Other"){   
            document.getElementById("relation-with-agency-other").classList.remove("hidden__input");
        }else{
            document.getElementById("relation-with-agency-other").classList.add("hidden__input");
        }
    }
    handleSubmit(event){
        event.preventDefault();

        var name = false;
        var nameAgency = false;
        var linkWebsite = false;
        var minorityGroup = false;
        var additionalLink = false;

        if(document.getElementById("your-name").value.trim().length > 2){
            document.querySelectorAll(".your-name")[0].classList.remove("error__input");
            this.setState({ nameField: document.getElementById("your-name").value })

            name = true;
        }else{
            document.querySelectorAll(".your-name")[0].classList.add("error__input");
        }

        if(document.getElementById("relation-with-agency").value === "Other"){
            if(document.getElementById("relation-with-agency-other").value.trim().length > 2){
                document.querySelectorAll(".relation-with-agency-other")[0].classList.remove("error__input");

                this.setState({ relationAgencyFieldOther: document.getElementById("relation-with-agency-other").value })
            }else{
                document.querySelectorAll(".relation-with-agency-other")[0].classList.add("error__input");
            }

            this.setState({ relationAgencyField: document.getElementById("relation-with-agency").value })
        }else{
            this.setState({ relationAgencyField: document.getElementById("relation-with-agency").value })
        }
        
        if(document.getElementById("name-of-agency").value.trim().length > 2){
            document.querySelectorAll(".name-of-agency")[0].classList.remove("error__input");

            this.setState({ agencyNameField: document.getElementById("name-of-agency").value })

            nameAgency = true;
        }else{
            document.querySelectorAll(".name-of-agency")[0].classList.add("error__input");
        }

        if(document.getElementById("link-to-website").value.trim().length > 2){
            document.querySelectorAll(".link-to-website")[0].classList.remove("error__input");

            this.setState({ linkToWebsiteField: document.getElementById("link-to-website").value })

            linkWebsite = true;
        }else{
            document.querySelectorAll(".link-to-website")[0].classList.add("error__input");
        }
        
        if(document.getElementById("minority-group").value.trim().length > 2){
            document.querySelectorAll(".minority-group")[0].classList.remove("error__input");

            this.setState({ minorityGroupField: document.getElementById("minority-group").value })

            minorityGroup = true;
        }else{
            document.querySelectorAll(".minority-group")[0].classList.add("error__input");
        }

        if(document.getElementById("additional-links").value.trim().length > 2){
            document.querySelectorAll(".additional-links")[0].classList.remove("error__input");

            this.setState({ additionalLinksField: document.getElementById("additional-links").value })

            additionalLink = true;
        }else{
            document.querySelectorAll(".additional-links")[0].classList.add("error__input");
        }

        if(name && nameAgency && linkWebsite && minorityGroup && additionalLink){
            var personName = document.getElementById("your-name").value; 
            var agencyName = document.getElementById("name-of-agency").value; 
            var agencyLink = document.getElementById("link-to-website").value;
            var minorityGroupData = document.getElementById("minority-group").value;  
            var additionalLinkData = document.getElementById("additional-links").value; 
            var agencyRelation = document.getElementById("relation-with-agency").value; 
            var agencyRelationOther = document.getElementById("relation-with-agency-other").value;

            let formData = new FormData()

            formData.set("your-name", personName);
            formData.set("name-of-agency", agencyName);
            formData.set("link-to-website", agencyLink);
            formData.set("minority-group", minorityGroupData);
            formData.set("additional-links", additionalLinkData);
            formData.set("relation-with-agency-other", agencyRelation);
            formData.set("relation-with-agency-other", agencyRelationOther);


            console.log(formData, personName, agencyName, agencyLink, minorityGroupData, additionalLinkData, agencyRelation, agencyRelationOther);

            // Add Lead to SharpSpring
            var xhr = new XMLHttpRequest()
            xhr.open('POST', `https://app-3QNNS064W6.marketingautomation.services/webforms/receivePostback/MzawMLEwMbSwBAA/004d44cf-2e67-44e8-b17a-e5e61fef4782/jsonp/?personName=${personName}&agencyName=${agencyName}&agencyRelation=${agencyRelation}&agencyRelationOther=${agencyRelationOther}&agencyWebsite=${agencyLink}&minorityGroup=${minorityGroupData}&additionalLink=${minorityGroupData}`);
            xhr.send()

            // Add lead to wordpress
            axios.post(
                `https://rx.raxo.dev/wp-json/contact-form-7/v1/contact-forms/2031/feedback`,
                formData,
                {
                  headers: {
                    "content-type": "multipart/form-data",
                  },
                }
            )
            .then((response) => {
            
                this.setState({ 
                    nameField: "",
                    relationAgencyField: "",
                    relationAgencyFieldOther: "",
                    agencyNameField: "",
                    linkToWebsiteField: "",
                    minorityGroupField: "",
                    additionalLinksField: "",
                })

                document.getElementById('agency__form').reset();

                this.setState({ formResponse: "Thank your for your submit" })
            }, (error) => {
                this.setState({ formResponse: "We were not able to submit the agency, please try again later" })
            });
        }
    }
    closeForm(){
        document.getElementById("form__wrapper").classList.add("close__form__state");
    }
    render() {
        return (
            <div id="form__wrapper" className="close__form__state">
                
                <div className="form__popup">
                    <div className="close__form" onClick={this.closeForm}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L33 33" stroke="#FFC6C6" stroke-width="2"/>
                            <path d="M33 3L3 33" stroke="#FFC6C6" stroke-width="2"/>
                        </svg>
                    </div>
                    <div className="form__information">
                        <h3 className="avant uppercase">
                            Ad+d Culture Minority-Owned <br/> Agency Feature
                        </h3>
                        <p className="helvetica">Thank you for submitting a minority-owned agency to be featured on Ad+d Culture. <br/> Together, we'll continue to amplify the voices that set the tone.</p>
                        <p className="helvetica second"><small>*REQUIRED</small></p>
                    </div>
                    <form id="agency__form">
                        
                        <div className="form__inner__wrapper">
                            <div className="form__fields">

                                <div className="form__input your-name">
                                    <input type="text" name="your-name" placeholder="YOUR NAME *" id="your-name" onKeyPress={this.handleTextInput} />
                                </div>
                                <div className="form__input relation-with-agency">
                                    <label htmlFor="relation-with-agency">RELATIONSHIP TO AGENCY *</label><br/>
                                    <select name="relation-with-agency" id="relation-with-agency" onChange={this.handleSelectInput}>
                                        <option value="Owner">Owner</option> 
                                        <option value="Employee">Employee</option> 
                                        <option value="Client">Client</option> 
                                        <option value="Other">Other</option> 
                                    </select>
                                </div>
                                <div className="form__input relation-with-agency-other">
                                    <input type="text" name="relation-with-agency-other" placeholder="Type of relation *" id="relation-with-agency-other" className={"hidden__input"} onKeyPress={this.handleTextInput} />
                                </div>
                                <div className="form__input name-of-agency">
                                    <input type="text" name="name-of-agency" placeholder="Name Of Agency *" id="name-of-agency" onKeyPress={this.handleTextInput} />
                                </div>
                                <div className="form__input link-to-website">
                                    <input type="text" name="link-to-website" placeholder="Link to Website *" id="link-to-website" onKeyPress={this.handleTextInput} />
                                </div>
                                <div className="form__input minority-group">
                                    <input type="text" name="minority-group" placeholder="WHAT MINORITY GROUP DOES THE OWNER OF THE AGENCY BELONG TO OR IDENTIFY WITH *" id="minority-group" onKeyPress={this.handleTextInput} />
                                </div>
                                <div className="form__input additional-links">
                                    <input type="text" name="additional-links" placeholder="ADDITIONAL LINKS (BEHANCE, LINKEDIN, ETC) *" id="additional-links" onKeyPress={this.handleTextInput} />
                                </div>
                            </div>
                            <div className="submit__form helvetica">
                                <button onClick={this.handleSubmit}><p>Submit</p></button>
                            </div>
                        </div>
                        <div className="form__response">
                            {
                                this.state.formResponse
                                ?
                                <div className="response">
                                    <p>{this.state.formResponse}</p>
                                </div>
                                :""
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
