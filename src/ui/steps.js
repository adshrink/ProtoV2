export function DIV_MessageSuccess(props) {
    return (
        <React.Fragment>
            <div className="ui positive message">All steps completed</div>
            <a href="#">Exit URL</a>
        </React.Fragment>
    )
}

export function DIV_PreMessageSuccess(props) {
    return (
        <div className="ui positive message">Loading..</div>
    )
}

export function DIV_ContainerSteps({ HTML_global_status, user_step_track }) {
    return (
        <div className="ui container" style={{ marginTop: '2em' }}>
            <h1 className="ui header" style={{ textAlign: 'center' }}>Steps to Follow</h1>
            {/**JSON.stringify(user_step_track)*/}
            <div className="ui raised very padded text container segment">
                {HTML_global_status}
            </div>

        </div>
    )
}

export function BUTTON_StepCompleted({ index, user_required_steps, STEP_onClick, AD_text }) {
    return (
        <div key={index}>
            {/** success button  */}
            <div
                className="ui button fluid green large"
                onClick={() => STEP_onClick()} >

                <i className="fas fa-check-circle"></i> {AD_text}
            </div>
            {index < user_required_steps.length - 1 && <div className="ui divider"></div>}
        </div>
    )
}

export function BUTTON_Step({ index, user_required_steps, STEP_onClick, AD_icon, AD_text, AD_description, HTML_button_status }) {
    return (
        <div key={index}>
            {/** step button (incomplete)  */}
            <div
                className={`ui animated button fluid primary large ${HTML_button_status} `}
                data-buttonIndex={`BUTTON_index_${index}`}
                onClick={() => STEP_onClick()} >

                <div className="visible content"><i className={AD_icon}></i> {AD_text}</div>
                <div className="hidden content">
                    {AD_description} <i className="right arrow icon"></i>
                </div>
            </div>

            {index < user_required_steps.length - 1 && <div className="ui divider"></div>}
        </div>
    )
}

export function BUTTON_Step_setLoadingState(index) {
    document.querySelector(`[data-buttonIndex="BUTTON_index_${index}"]`).classList.add('loading');
}