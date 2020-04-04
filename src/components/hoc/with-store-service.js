import React from "react";
import { StoreServiceConsumer } from '../store-service-context';

const withStoreService = (Comp) => {
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