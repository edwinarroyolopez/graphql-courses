'use strict'

const { graphql, buildSchema } = require('graphql')

/* schema define */

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

/* run schema */
graphql(schema, '{ hello }').then((data) => {
  console.log(data)
})
