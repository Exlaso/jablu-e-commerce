'use client'

import { useCartContext } from '@/Store/StoreContext';

const ItemsinCart = () => {
    const { FetchNoifItemsinCart } = useCartContext();
    FetchNoifItemsinCart();
}

export default ItemsinCart