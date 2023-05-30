import {describe, expect, test} from '@jest/globals'
import ArrayRandomValues from './arrayRandomValues'
import Product from './Product'

describe('Testes ArrayRandomValues', () => {
    test('Deve randomizar', () => {
        const arrProducts = [
            new Product('Caneta azul', 5.99, 2),
            new Product('Caneta verde', 6.99, 2),
            new Product('Caneta vermelha', 7.99, 2),
            new Product('Caneta laranja', 8.99, 2),
            new Product('Caneta preta', 9.99, 2),
            new Product('Caneta rosa', 10.99, 2),
            new Product('Azul caneta', 11.99, 2),
            new Product('Caneta colorida', 12.99, 2),
            new Product('Caneta pink', 13.99, 2),
            new Product('Caneta azul marinho', 14.99, 2)
        ]
        const arrRandomValues = new ArrayRandomValues(arrProducts)
        const originalList = arrRandomValues.getProductList()
        const randomList = arrRandomValues.getRandomValuesFromArray(10)
        expect(originalList).not.toBe(randomList)
    })

    test('Deve retornar lista', () => {
        const originalList = [
            new Product('Caneta azul', 5.99, 2),
            new Product('Caneta verde', 6.99, 2),
            new Product('Caneta vermelha', 7.99, 2),
            new Product('Caneta laranja', 8.99, 2),
            new Product('Caneta preta', 9.99, 2),
            new Product('Caneta rosa', 10.99, 2),
            new Product('Azul caneta', 11.99, 2),
            new Product('Caneta colorida', 12.99, 2),
            new Product('Caneta pink', 13.99, 2),
            new Product('Caneta azul marinho', 14.99, 2)
        ]
        const arrRandomValues = new ArrayRandomValues(originalList)
        const arrProducts = arrRandomValues.getProductList()
        expect(originalList).toEqual(arrProducts)
    })
})