import { addNewContact, getContacts, getContact, updateContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware
            console.log(`Reqest from ${ req.originalUrl }`);
            console.log(`Request type ${ req.method }`);
            next();
        }, getContacts)
        .post(addNewContact);

        app.route('/contact/:id')
            .get((req, res, next) => {
            //middleware
            console.log(`Reqest from ${ req.originalUrl }`);
            console.log(`Request type ${ req.method }`);
            console.log(`Request contact by id: ${ req.params.id }`)
            next();
        }, getContact);

    app.route('/contact/:id')
        .put((req, res, next) => {
            //middleware
            console.log(`Reqest from ${ req.originalUrl }`);
            console.log(`Request type ${ req.method }`);
            console.log(`Request contact by id: ${ req.params.id }`)
            next();
        }, updateContact);
    
    app.route('/contact/:id')
        .delete((req, res) => {
            res.send('DELETE request successful!');
        });
}

export default routes;