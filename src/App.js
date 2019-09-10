import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import utama from './components/utama';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#fff' }}>Portfolio </span><strong>Mate!</strong></span>}>
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Vadim Blyat">
            <Navigation>
                <a href="/">Resume</a>
                <a href="/">About Me</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
            <div><h1>Oy Babushka!</h1></div>
          <utama/>
        </Content>
    </Layout>
</div>    
  );
}

export default App;
