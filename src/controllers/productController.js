import { v4 as uuidv4 } from 'uuid'
import products from '../data.js'

export const getProducts = async (request, reply) => {
  reply.send(products)
}

export const getProduct = async (request, reply) => {
  const id = request.params.id
  let product = products.find(item => item.id === id)

  if (!product) {
    reply.status(404).send('Product not found!')
  }

  reply.send(product);
}

export const postProduct = async (request, reply) => {
  const { name } = request.body
  const id = uuidv4()

  const newData = {
    id,
    name
  }

  products.push(newData)

  reply.status(201).send(newData)
}

export const updateProduct = async (request, reply) => {
  const id  = request.params.id
  const { name } = request.body

  let product = products.find(item => item.id === id)

  if (!product) {
    reply.status(404).send('No product found!')
  }

  product = { ...product, name }
  products = products.map(item => (item.id === id ? product : item))

  reply.send(product)
}

export const deleteProduct = async (request, reply) => {
  const id = request.params.id
  products = products.filter(product => product.id !== id)
  reply.send('Product deleted!')
}