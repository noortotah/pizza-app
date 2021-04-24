import React, { Component, Fragment } from 'react';
import { instance as axios} from '../../axios';
import { Container, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
class  Eyal extends Component {
    state = {  users: [] , isLoading : true}

    async componentDidMount(){
        if(isNaN(this.props.match.params.id)) {
            const {data: users} = await axios.get('/users');
            this.setState({users: users, isLoading: false })
        }else{
            this.fetchUserData(this.props.match.params.id)
                  .then((user) => {
                    this.setState({users: [user], isLoading: false })
                  })
            // this.setState({users: [user], isLoading: false })
        }
        
    }

    componentDidUpdate(prevProps) {
        if(!isNaN(this.props.match.params.id) ) {
            if (prevProps.match.params.id !== this.props.match.params.id) {
                this.setState({ users: [] });
                this.fetchUserData(this.props.match.params.id)
                  .then((user) => {
                    this.setState({users: [user], isLoading: false })
                  })
              }
        }
        
    }

    async fetchUserData(id) {
        const {data: user} = await axios.get('/users/'+ this.props.match.params.id);
        return user;
    }
    render() { 
        return ( 
            <Fragment>
              

                    <Container>
                        <Row>         
                            <Col md={6} className="mx-auto">
                            {this.state.isLoading && <h3 className="mx-auto">Loading ... </h3>}
                            {! this.state.isLoading && 
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                this.state.users.map( user => ( 
                                    <tr key={user.id}>
                                        <td> <NavLink to={ {pathname: '/eyal/'+ user.id }}>{user.name}</NavLink> </td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                ))
                                }
                                </tbody>
                            </table>
                            } 
                            </Col>
                        </Row>
                    </Container>
               
            </Fragment>
        
        );
    }
}
 
export default Eyal;