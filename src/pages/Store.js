import {Row, Col} from 'react-bootstrap';
import {productsArray} from '../productStore';
import ProductCard from '../components/ProductCard';


function Store() {
    return (
        <>
            <h1 align="center" className='p-3'>Welcome to the store</h1>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    
                    <Col align="center">
                        <h1>{product.title}</h1>
                        <ProductCard product={product} />
                    </Col>

                ))}
            </Row>
        </>
    )
}

export default Store;