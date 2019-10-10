'use strict'

const { graphql, buildSchema } = require('graphql')

/* schema define */

const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

/* resolvers
    Debe tener propiedades que tiene que ser igual a la query!
    la función que está adentro se va a ejecutar cuándo llamen esa query

    Nota: Si yo defino una query nueva, yo debo definir otra función para ese resolvers

*/
const resolvers = {
  hello: () => {
    return 'Hola mundo!'
  },
  saludo: () => {
    return 'Hola a todos!'
  }
}

/* run schema */
graphql(schema, '{ saludo }', resolvers).then((data) => {
  console.log(data)
})
