const { WebhookClient } = require('dialogflow-fulfillment');

module.exports = app => {
    app.post('/', async (req, res) => {

        const agent = new WebhookClient({request: req, response: res});

        function snoopy(agent){
            agent.add('Welcome to my Snoopy fulfillment');
        }

        function shaked(agent){
            agent.add('Welcome to my Shaked fulfillment');
        }

        function fallback(agent){
            agent.add('I didnt understand');
            agent.add('Im sorry, can you try again?');
        }

        let intentMap = new Map();

        //TODO: change to real one
        intentMap.set('snoopy', snoopy);

        intentMap.set('shaked', shaked);

        intentMap.set('Default fallback Intent', fallback);

        agent.handleRequest(intentMap);

    });
}