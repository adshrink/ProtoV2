export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catch: {
                hasError: false,
                message: '',
                componentStack: ''  // This won't be set using getDerivedStateFromError
            }
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log('Adshrink::error:main:catch', error, errorInfo);

        if (!this.props.main && _adshrink.enabled.error_reporting) {
            $.post('https://www.shrink-service.it/v3/api/prototype/store/error', {
                url: window.location.href,
                error: {
                    message: JSON.stringify({
                        error: error.toString(),
                        errorInfo: errorInfo,
                        componentStack: errorInfo.componentStack
                    })
                }
            });
        }

        this.setState({
            catch: {
                hasError: true,
                message: error.toString(),
                componentStack: errorInfo.componentStack  // Store the component stack trace
            }
        });

    }

    render() {
        if (this.state.catch.hasError && !this.props.main) {
            // You can render any custom fallback UI
            return (
                <React.Fragment>
                    <h1>Something went wrong.</h1>
                    <p>Component Stack Trace: <br /> {String(this.state.catch.componentStack).toString()}</p>
                </React.Fragment>
            );
        }

        return this.props.children;
    }

}
