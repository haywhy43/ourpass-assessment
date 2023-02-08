import { createServer, Model, Registry } from 'miragejs';
import { AnyFactories, AnyModels, ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import invoices from './db/invoices';

interface IInvoice {
  name: '';
}

interface IModels extends AnyModels {
  invoice: ModelDefinition<IInvoice>;
}

type AppRegistry = Registry<IModels, AnyFactories>;

type AppSchema = Schema<AppRegistry>;

export function makeServer({ environment = 'development' } = {}) {
  const server = createServer({
    environment,

    models: {
      invoice: Model,
    },

    seeds(server) {
      server.db.loadData({
        invoices,
      });
    },

    routes() {
      this.namespace = 'api';
      // this.timing = 5000;

      this.get('/invoices/:id', (schema: AppSchema, request) => {
        return schema.db.invoices.find(request.params.id);
      });
    },
  });

  return server;
}
