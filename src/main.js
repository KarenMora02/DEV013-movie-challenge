import App from './components/App.js';

App().then(app=>{ 
    document.getElementById('root').appendChild(app);
app.dispatchEvent(new Event("load"));

})

