import { prisma } from "../lib/prisma.js";

export const getProductsService = async () => {
  //return products.find();
  return await prisma.product.findMany()
}

export const getProductService = async (productId) => {
  //return products.find(product => product.id === id)
  return await prisma.product.findUnique({
    where: {
      id: productId
    }
  })
}

export const addProductService = async (productData) => {
  //return products.push(productData);
  return await prisma.product.create({
    data: productData
  })
} 

export const updateProductService = async (updatedProduct) => {

  /*const product = getProductService(id)
  product.name = name

  return products.map(item => item.id === id ? product : item)*/
  return await prisma.product.update(updatedProduct)
}

export const deleteProductService = async (productId) => {
  //return products.filter(product => product.id !== id)
  return await prisma.product.delete({
    where: {
      id: productId
    }
  })
}
