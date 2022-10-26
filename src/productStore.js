const productsArray = [
    {
        id: '1',
        title: 'Coffee',
        price: 1.99
    },
    {
        id: '2',
        title: 'Candy',
        price: 2.99
    },
    {
        id: '3',
        title: 'Juice',
        price: 5.99
    },
    {
        id: '4',
        title: 'Phone',
        price: 12.99
    },
    {
        id: '5',
        title: 'Tennis',
        price: 56.39
    },
    {
        id: '6',
        title: 'Microwave',
        price: 34.39
    },
]

function getProductData(id) {
    let productArray = productArray.find(
        product => product.id === id
    );
    if (getProductData === undefined) {
        console.log('Product data does not exist for ID: ' + id);
        return undefined;
    }

    return getProductData;
}

export {productsArray, getProductData};