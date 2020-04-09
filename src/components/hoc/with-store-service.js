import React from "react";
import { StoreServiceConsumer } from '../store-service-context';

/* 
* withStoreService should return function that returns component (best practices)
*/
const withStoreService = () => (Comp) => {
    return (props) => {
        return (
            <StoreServiceConsumer>
                {
                    (storeService) => <Comp {...props} storeService={storeService} />
                }
            </StoreServiceConsumer>
        )
    } 
}

export default withStoreService;