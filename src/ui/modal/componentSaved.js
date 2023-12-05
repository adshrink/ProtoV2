export default class ModalComponentSaved extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fetching: false,
            page: 1,
            saved: []
        };

    }

    on_open_modal = () => {

        const that = this;

        $('#modal_user_saved_links').modal({
            onShow: () => {
                that.on_fetch_saved();
            }
        }).modal('show');
    }

    on_fetch_saved = (p = 1) => {

        let that = this;

        let { id, userid } = this.props.u || false;
        let basics = this.get_google_user();

        if (!basics || ("signed" in basics && !basics.signed))
            return false;

        this.setState({ fetching: true });

        $.post('https://www.shrink-service.it/v2/public/api/prototype/saved/u/' + userid + '/' + id, { page: p, oauth_user: { id: basics.id, name: basics.name, email: basics.email } }).then((res) => {

            if (res.success)
                that.setState({ saved: res.data, fetching: false, page: p });

        }).catch((err) => {

            that.setState({ fetching: false });
        });

    }

    get_google_user = () => {
        return window.ubasics;
    }

    print_extension_icon = (e) => {

        if (e === 'html') {
            return <i className="html5 icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'php') {
            return <i className="php icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'zip') {
            return <i className="file archive icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'rar') {
            return <i className="file archive icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'pdf') {
            return <i className="file pdf icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'ico') {
            return <i className="tint icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'csv') {
            return <i className="file excel icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'png') {
            return <i className="file image icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'jpg') {
            return <i className="file image icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'jpeg') {
            return <i className="file image icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'js') {
            return <i className="js icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'py') {
            return <i className="python icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'xml') {
            return <i className="css3 icon" style={{ margin: "0px" }}></i>;
        } else if (e === 'css') {
            return <i className="css3 icon" style={{ margin: "0px" }}></i>;
        } else {
            return <i className="file icon" style={{ margin: "0px" }}></i>;
        }

    }

    print_list = () => {

        let that = this;
        let { saved } = that.state || [];

        let html = [];

        Object.keys(saved).map((elem) => {

            let { domain, ext, artcode, title, username, likes, saved_at } = saved[elem];

            html.push(
                <div key={elem} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <h5 className="ui header">
                        {that.print_extension_icon(ext)}
                        <div className="content">
                            <span><small style={{ fontWeight: "100", color: "#c9c9c9" }}>{domain.toUpperCase()}</small></span> <br />
                            <a href={___reactjsD.host + "/" + artcode} style={{ overflow: "hidden", textOverflow: "ellipsis", color: "rgba(0,0,0,.6)" }}>{title + " "}</a><i className="external square alternate icon"></i>
                            <div className="sub header" style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{username + " "} <a href={___reactjsD.host + "/search?user=" + username}><i className="check circle small icon" style={{ bottom: 5, position: 'relative' }}></i></a></div>
                        </div>
                    </h5>
                </div>
            );

        });

        if (isEmpty(html)) {

            html.push(
                <div key={1} className="sixteen wide column item" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <div className="ui placeholder">
                        <div className="image header">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            );
        }

        return html

    }

    change_subscribers_page = (e, direction) => {
        e.preventDefault();

        let P = this.state.page || 1;

        if (direction === 'left')
            P--;
        else if (direction === 'right')
            P++;

        if (parseInt(P) < 1)
            P = 1;

        this.on_fetch_saved(P);

    }


    render() {

        let { fetching } = this.state || false;

        return (
            <React.Fragment>

                <a className="item white-text-color" onClick={(e) => this.on_open_modal()}>
                    <i className="bookmark icon" data-content={"Saved Elements."} data-variation="basic inverted mini" data-position="bottom center" data-inverted="" ></i>{this.props.children}
                </a>

                <div className="ui basic small modal" id="modal_user_saved_links">

                    <div className="ui segments">
                        <div className={"ui segment " + (fetching ? 'loading' : '')}>
                            <h3 className="ui header">
                                <i className="bookmark icon" style={{ color: '#c9c9c9' }}></i>
                                <div className="content">
                                    {language.new.saved_elements[0]}
                                    <div className="sub header">{language.new.saved_elements[1]}</div>
                                </div>
                            </h3>

                            <div className="ui divider"></div>

                            <div className="content">

                                <div className="ui grid stackable">
                                    {this.print_list()}
                                </div>

                            </div>

                            <div className="ui bottom right attached label"><i className="angle left icon" style={{ marginRight: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'left')}></i> <i className="file outline icon" style={{ margin: "0px" }}></i> <i className="angle right icon" style={{ marginLeft: "10px" }} onClick={(e) => this.change_subscribers_page(e, 'right')}></i></div>

                        </div>

                        <div className="ui secondary segment">
                            <p><i className="info circle icon"></i> {language.new.saved_elements[2]}, <a onClick={(e) => { if ("gapi" in window) { gapi.auth2.getAuthInstance().signIn() } }}>here.</a></p>
                        </div>
                    </div>

                </div>

            </React.Fragment>
        );

    }
}