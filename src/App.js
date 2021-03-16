
import './App.css';
import LoginForm from './components/Form/LoginForm';

import Layout from './components/Layouts/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';

function App() {
  return (  
      <Layout>
        <PizzaBuilder></PizzaBuilder>
        <LoginForm></LoginForm>
      </Layout>   
  );
}

export default App;
