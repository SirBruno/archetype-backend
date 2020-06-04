const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Book = require('./models/book.model')
const cors = require('cors')
const path = require('path')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./graphql/typeDefs')

const startServer = async () => {
	const app = express()
	app.use(cors())

	const uri = process.env.URI;
	await mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })

	const connection = mongoose.connection
	connection.once('open', () => {
		console.log("MongoDB database connection established successfully")
	});

	app.get('/delete', (req, res) => {
		Book.deleteOne({ _id: "5ea7553263b4893d0c626084" }, function (err, result) {
			if (err) {
				res.send(err);
			} else {
				res.send(result);
			}
		});
	});

	const resolvers = {
		Query: {
			books: () => Book.find({}),
			book: async (root, { _id }) => await Book.findById(_id)
		},
		Mutation: {
			addBook: async (_, args) => {
				try {
					let response = await Book.create(args);
					return response;
				} catch (e) {
					return e.message;
				}
			},
			updateBook: async (_, args) => {
				try {
					let response = await Book.findOneAndUpdate({ _id: args._id },
						{
							$set: {
								title: args.title,
								author: args.author,
								description: args.description,
							}
						}, { new: true });
					return response;
				} catch (e) { return e.message }
			},
			deleteBook: async (_, args) => {
				try {
					let response = await Book.findOneAndRemove(args)
					return response;
				} catch (e) { return e.message }
			}
		}
	};

	const server = new ApolloServer({
		typeDefs,
		resolvers,
		playground: {
			endpoint: `http://localhost:8000/graphql`,
			settings: { 'editor.theme': 'dark' }
		},
		introspection: true,
		playground: true
	});

	server.applyMiddleware({ app });

	app.use(express.static('public'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	});

	app.listen({ port: process.env.PORT || 4000 }, () =>
		console.log(`Server ready at http://localhost:${process.env.PORT || 4000}`)
	);

};

startServer();