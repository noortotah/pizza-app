import  { Component } from 'react';
import { toast } from 'react-toastify';

const withErrors = (WrappingComponent, axios) => {
    return class extends Component {
        constructor(props){
          super(props);
          console.log(props);
        }
        state = {
            error: null
        }

        componentDidMount(){

            console.log('componentDidMount', this.props);
            let requestInterceptor = axios.interceptors.request.use(request => {
                console.log('request', request);
                axios.interceptors.request.eject(requestInterceptor);

                return request;
              }, (error) => {
                console.log(error);
                toast.error('Something went wrong');
                return Promise.reject(error);
              })
              
              let responseInterceptor = axios.interceptors.response.use(response => {
                console.log('response', response);
                axios.interceptors.response.eject(responseInterceptor);
                return response;
              }, (error) => {
                console.log(error);
                toast.error('Something went wrong');
                return Promise.reject(error);
              })
        }

        render(){
            return (<WrappingComponent {...this.props} />)
        }
    };
}
 
export default withErrors;